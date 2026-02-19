import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
}

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    entry.count++;
    return entry.count > RATE_LIMIT_MAX;
}

function escapeMarkdown(text: string): string {
    return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}

function formatTelegramMessage(data: ContactFormData): string {
    const serviceLabels: Record<string, string> = {
        startup: 'Startup Solutions',
        development: 'Development Services',
        partnership: 'Creative Partnership',
        documents: 'Corporate Documents',
        social: 'Social Media Management',
        brand: 'Brand Management',
        merchandise: 'Branding & Merchandise',
        consultancy: 'Strategic Consultancy',
    };

    const serviceName = serviceLabels[data.service] || data.service;

    return [
        `🔔 *NEW CONTACT FORM SUBMISSION*`,
        ``,
        `👤 *Name:* ${escapeMarkdown(data.name)}`,
        `📧 *Email:* ${escapeMarkdown(data.email)}`,
        `📞 *Phone:* ${escapeMarkdown(data.phone)}`,
        `🏢 *Company:* ${escapeMarkdown(data.company)}`,
        `📋 *Service:* ${escapeMarkdown(serviceName)}`,
        ``,
        `💬 *Message:*`,
        escapeMarkdown(data.message),
    ].join('\n');
}

async function sendTelegramMessage(text: string): Promise<boolean> {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.error('Telegram credentials not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local');
        return false;
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Try up to 2 times (initial + 1 retry)
    for (let attempt = 0; attempt < 2; attempt++) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text,
                    parse_mode: 'MarkdownV2',
                }),
            });

            if (response.ok) {
                return true;
            }

            const errorData = await response.json();
            console.error(`Telegram API error (attempt ${attempt + 1}):`, errorData);
        } catch (error) {
            console.error(`Telegram API request failed (attempt ${attempt + 1}):`, error);
        }
    }

    return false;
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { success: false, message: 'Too many submissions. Please try again later.' },
                { status: 429 }
            );
        }

        const data: ContactFormData = await request.json();

        // Validate required fields
        const { name, email, phone, company, service, message } = data;
        if (!name || !email || !phone || !company || !service || !message) {
            return NextResponse.json(
                { success: false, message: 'All fields are required.' },
                { status: 400 }
            );
        }

        // Send to Telegram
        const telegramMessage = formatTelegramMessage(data);
        const telegramSent = await sendTelegramMessage(telegramMessage);

        if (!telegramSent) {
            console.warn('Telegram message failed, but continuing...');
        }

        // Log submission server-side
        console.log(`[Contact Form] New submission from ${name} (${email})`);

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully!',
        });
    } catch (error) {
        console.error('Contact form submission error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error. Please try again.' },
            { status: 500 }
        );
    }
}
