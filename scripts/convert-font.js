const opentype = require('opentype.js');
const fs = require('fs');
const path = require('path');

const fontPath = path.join(__dirname, '../public/fonts/MonumentExtended-Ultrabold.woff');
const outputPath = path.join(__dirname, '../public/fonts/MonumentExtended_Ultrabold.json');

console.log(`Loading font from ${fontPath}...`);

opentype.load(fontPath, function (err, font) {
    if (err) {
        console.error('Font could not be loaded: ' + err);
    } else {
        console.log('Font loaded. Converting...');
        const typeface = convert(font);
        fs.writeFileSync(outputPath, JSON.stringify(typeface));
        console.log(`Converted font saved to ${outputPath}`);
    }
});

function convert(font) {
    const scale = (1000 * 100) / ((font.unitsPerEm || 2048) * 72); // Adjusted scale logic based on common converters
    // Actually, three.js loaders usually take raw units if we set resolution correctly.
    // Let's stick to raw units and set resolution to unitsPerEm.

    const result = {
        glyphs: {},
        cssFontWeight: "bold",
        ascender: font.tables.os2.sTypoAscender,
        descender: font.tables.os2.sTypoDescender,
        underlinePosition: font.tables.post.underlinePosition,
        underlineThickness: font.tables.post.underlineThickness,
        boundingBox: {
            yMin: font.tables.head.yMin,
            xMin: font.tables.head.xMin,
            yMax: font.tables.head.yMax,
            xMax: font.tables.head.xMax
        },
        resolution: 1000,
        original_font_information: font.names
    };

    // We need to scale commands to fit into 1000 unitsPerEm if the font is different?
    // Three.js FontLoader expects glyphs roughly in 1000-2048 range.
    // Let's use raw commands and see.

    const glyphCount = font.glyphs.length;
    console.log(`Processing ${glyphCount} glyphs...`);

    for (let i = 0; i < glyphCount; i++) {
        const glyph = font.glyphs.get(i);
        if (glyph.unicode !== undefined) {
            const token = {};
            token.ha = glyph.advanceWidth;
            token.x_min = glyph.xMin;
            token.x_max = glyph.xMax;
            token.o = "";

            // Convert path commands
            glyph.path.commands.forEach(cmd => {
                if (cmd.type === 'M') token.o += `m ${Math.round(cmd.x)} ${Math.round(cmd.y)} `;
                if (cmd.type === 'L') token.o += `l ${Math.round(cmd.x)} ${Math.round(cmd.y)} `;
                if (cmd.type === 'Q') token.o += `q ${Math.round(cmd.x1)} ${Math.round(cmd.y1)} ${Math.round(cmd.x)} ${Math.round(cmd.y)} `;
                if (cmd.type === 'C') token.o += `b ${Math.round(cmd.x1)} ${Math.round(cmd.y1)} ${Math.round(cmd.x2)} ${Math.round(cmd.y2)} ${Math.round(cmd.x)} ${Math.round(cmd.y)} `;
                // Z is usually implicit in three.js font loader or handled by 'm' closing if needed.
                // But TextGeometry might need it? Facetype.js doesn't seem to output 'z'.
            });

            result.glyphs[String.fromCharCode(glyph.unicode)] = token;
        }
    }

    // Uppercase keys for easier access? No, standard is case-sensitive unicode chars.
    // Three.js Fontloader sorts it out.

    return result;
}
