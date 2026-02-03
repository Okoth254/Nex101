# NEX101 Color Palette & Typography Findings

## Primary Colors

The NEX101 brand uses four main colors:

| Color | HEX Code | Description |
|-------|----------|-------------|
| **Main Pink/Magenta** | `#CE0054` | Primary brand color |
| **Dark Burgundy** | `#4C0224` | Deep accent/shadow color |
| **Gold/Orange** | `#E29D23` | Secondary accent color |
| **Navy Blue** | `#24395B` | Dark blue accent |

## Gradients

The brand palette includes key gradient blending techniques:
- Different colors applied on different backgrounds
- Side-by-side color blends for transitions

## Typography

### Font Hierarchy

| Font Name | Usage | Sample |
|-----------|-------|--------|
| **Sretch Pro** | Wordmark logo only (NEX101) | ADCDEF1234 |
| **Monumental** | Key headlines and headings | ABCDEFGHIJKL |
| **Figtree** | Body text and general content | abcdefghijlk |

## CSS Variables Recommendation

For your Next.js project, you can define these colors as CSS custom properties:

```css
:root {
  --nex-primary: #CE0054;
  --nex-dark: #4C0224;
  --nex-gold: #E29D23;
  --nex-navy: #24395B;
}
```

## Design Notes

- The palette combines warm tones (pink, gold) with cool tones (navy, burgundy)
- Suitable for creating vibrant, modern interfaces with strong contrast
- The gradient blending suggests the brand encourages dynamic, multi-layered designs
