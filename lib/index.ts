export function optimizeCSS(css: string): string {
    return css
        // Combine padding properties
        .replace(/padding-top:\s*([^\s;]+);\s*padding-right:\s*([^\s;]+)?;\s*padding-bottom:\s*([^\s;]+)?;\s*padding-left:\s*([^\s;]+)?;/g, 
            (match, p1, p2 = '0', p3 = '0', p4 = p2) => `padding: ${p1} ${p2} ${p3} ${p4};`)
        .replace(/padding-top:\s*([^\s;]+);\s*padding-right:\s*([^\s;]+)?;\s*padding-bottom:\s*([^\s;]+)?;/g, 
            (match, p1, p2 = '0', p3 = p2) => `padding: ${p1} ${p2} ${p3};`)
        .replace(/padding-top:\s*([^\s;]+);\s*padding-bottom:\s*([^\s;]+);/g, 
            (match, p1, p2) => `padding: ${p1} 0 ${p2};`)
        .replace(/padding-left:\s*([^\s;]+);\s*padding-right:\s*([^\s;]+)?;/g, 
            (match, p1, p2 = p1) => `padding: 0 ${p1} ${p2} ${p1};`)
        .replace(/padding-left:\s*([^\s;]+);/g, 
            'padding-left: $1;')
        .replace(/padding-right:\s*([^\s;]+);/g, 
            'padding-right: $1;')

        // Combine margin properties
        .replace(/margin-top:\s*([^\s;]+);\s*margin-right:\s*([^\s;]+)?;\s*margin-bottom:\s*([^\s;]+)?;\s*margin-left:\s*([^\s;]+)?;/g, 
            (match, p1, p2 = '0', p3 = '0', p4 = p2) => `margin: ${p1} ${p2} ${p3} ${p4};`)
        .replace(/margin-top:\s*([^\s;]+);\s*margin-right:\s*([^\s;]+)?;\s*margin-bottom:\s*([^\s;]+)?;/g, 
            (match, p1, p2 = '0', p3 = p2) => `margin: ${p1} ${p2} ${p3};`)
        .replace(/margin-top:\s*([^\s;]+);\s*margin-bottom:\s*([^\s;]+);/g, 
            (match, p1, p2) => `margin: ${p1} 0 ${p2};`)
        .replace(/margin-left:\s*([^\s;]+);\s*margin-right:\s*([^\s;]+)?;/g, 
            (match, p1, p2 = p1) => `margin: 0 ${p1} ${p2} ${p1};`)
        .replace(/margin-left:\s*([^\s;]+);/g, 
            'margin-left: $1;')
        .replace(/margin-right:\s*([^\s;]+);/g, 
            'margin-right: $1;')

        // Combine background properties
        .replace(/background-color:\s*([^\s;]+);\s*background-image:\s*([^\s;]+)?;\s*background-position:\s*([^\s;]+)?;\s*background-repeat:\s*([^\s;]+)?;\s*background-size:\s*([^\s;]+)?;/g,
            (match, p1, p2 = 'none', p3 = '0 0', p4 = 'repeat', p5 = 'auto') => `background: ${p2} ${p1} ${p3} ${p4} ${p5};`)
        .replace(/background-color:\s*([^\s;]+);\s*background-image:\s*([^\s;]+)?;\s*background-position:\s*([^\s;]+)?;\s*background-repeat:\s*([^\s;]+)?;/g,
            (match, p1, p2 = 'none', p3 = '0 0', p4 = 'repeat') => `background: ${p2} ${p1} ${p3} ${p4};`)
        .replace(/background-color:\s*([^\s;]+);\s*background-image:\s*([^\s;]+)?;\s*background-position:\s*([^\s;]+)?;/g,
            (match, p1, p2 = 'none', p3 = '0 0') => `background: ${p2} ${p1} ${p3};`)
        .replace(/background-color:\s*([^\s;]+);\s*background-image:\s*([^\s;]+)?;/g,
            (match, p1, p2 = 'none') => `background: ${p2} ${p1};`)
        .replace(/background-color:\s*([^\s;]+);/g,
            'background-color: $1;')

        // Combine border properties
        .replace(/border-top-width:\s*([^\s;]+);\s*border-top-style:\s*([^\s;]+);\s*border-top-color:\s*([^\s;]+);\s*border-right-width:\s*([^\s;]+);\s*border-right-style:\s*([^\s;]+);\s*border-right-color:\s*([^\s;]+);\s*border-bottom-width:\s*([^\s;]+);\s*border-bottom-style:\s*([^\s;]+);\s*border-bottom-color:\s*([^\s;]+);\s*border-left-width:\s*([^\s;]+);\s*border-left-style:\s*([^\s;]+);\s*border-left-color:\s*([^\s;]+);/g,
            (match, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) => `border: ${p1} ${p2} ${p3} ${p4} ${p5} ${p6} ${p7} ${p8} ${p9} ${p10} ${p11} ${p12};`)
        .replace(/border-top-width:\s*([^\s;]+);\s*border-top-style:\s*([^\s;]+);\s*border-top-color:\s*([^\s;]+);\s*border-right-width:\s*([^\s;]+);\s*border-right-style:\s*([^\s;]+);\s*border-right-color:\s*([^\s;]+);\s*border-bottom-width:\s*([^\s;]+);\s*border-bottom-style:\s*([^\s;]+);\s*border-bottom-color:\s*([^\s;]+);\s*border-left-width:\s*([^\s;]+);\s*border-left-style:\s*([^\s;]+);\s*border-left-color:\s*([^\s;]+);/g,
            (match, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) => `border: ${p1} ${p2} ${p3} ${p4} ${p5} ${p6} ${p7} ${p8} ${p9} ${p10} ${p11} ${p12};`)
        .replace(/border-width:\s*([^\s;]+);\s*border-style:\s*([^\s;]+);\s*border-color:\s*([^\s;]+);/g,
            'border: $1 $2 $3;')

        // Combine font properties
        .replace(/font-style:\s*([^\s;]+);\s*font-variant:\s*([^\s;]+)?;\s*font-weight:\s*([^\s;]+);\s*font-size:\s*([^\s;]+);\s*line-height:\s*([^\s;]+);\s*font-family:\s*([^\s;]+)?;/g,
            (match, p1, p2 = 'normal', p3, p4, p5, p6 = 'serif') => `font: ${p1} ${p2} ${p3} ${p4} ${p5} ${p6};`)
        .replace(/font-style:\s*([^\s;]+);\s*font-weight:\s*([^\s;]+);\s*font-size:\s*([^\s;]+);\s*line-height:\s*([^\s;]+);\s*font-family:\s*([^\s;]+)?;/g,
            (match, p1, p2, p3, p4, p5 = 'serif') => `font: ${p1} ${p2} ${p3} ${p4} ${p5};`)
        .replace(/font-style:\s*([^\s;]+);\s*font-weight:\s*([^\s;]+);\s*font-size:\s*([^\s;]+);\s*line-height:\s*([^\s;]+);/g,
            (match, p1, p2, p3, p4) => `font: ${p1} ${p2} ${p3} ${p4};`)
        .replace(/font-style:\s*([^\s;]+);\s*font-weight:\s*([^\s;]+);\s*font-size:\s*([^\s;]+);/g,
            (match, p1, p2, p3) => `font: ${p1} ${p2} ${p3};`)
        .replace(/font-style:\s*([^\s;]+);\s*font-weight:\s*([^\s;]+);/g,
            (match, p1, p2) => `font: ${p1} ${p2};`)
        .replace(/font-size:\s*([^\s;]+);\s*line-height:\s*([^\s;]+);\s*font-family:\s*([^\s;]+)?;/g,
            (match, p1, p2, p3 = 'serif') => `font: ${p1} ${p2} ${p3};`)
        .replace(/font-size:\s*([^\s;]+);\s*line-height:\s*([^\s;]+);/g,
            (match, p1, p2) => `font: ${p1} ${p2};`)
        .replace(/font-size:\s*([^\s;]+);\s*font-family:\s*([^\s;]+)?;/g,
            (match, p1, p2 = 'serif') => `font: ${p1} ${p2};`)
        .replace(/font-size:\s*([^\s;]+);/g,
            'font-size: $1;')

        // Combine border-radius properties
        .replace(/border-top-left-radius:\s*([^\s;]+);\s*border-top-right-radius:\s*([^\s;]+)?;\s*border-bottom-right-radius:\s*([^\s;]+)?;\s*border-bottom-left-radius:\s*([^\s;]+)?;/g,
            (match, p1, p2 = p1, p3 = p1, p4 = p2) => `border-radius: ${p1} ${p2} ${p3} ${p4};`)
        .replace(/border-top-left-radius:\s*([^\s;]+);\s*border-top-right-radius:\s*([^\s;]+)?;\s*border-bottom-right-radius:\s*([^\s;]+)?;/g,
            (match, p1, p2 = p1, p3 = p2) => `border-radius: ${p1} ${p2} ${p3};`)
        .replace(/border-top-left-radius:\s*([^\s;]+);\s*border-bottom-right-radius:\s*([^\s;]+);/g,
            (match, p1, p2) => `border-radius: ${p1} 0 ${p2};`)
        .replace(/border-top-left-radius:\s*([^\s;]+);/g,
            'border-top-left-radius: $1;')
        .replace(/border-top-right-radius:\s*([^\s;]+);/g,
            'border-top-right-radius: $1;')
        .replace(/border-bottom-right-radius:\s*([^\s;]+);/g,
            'border-bottom-right-radius: $1;')
        .replace(/border-bottom-left-radius:\s*([^\s;]+);/g,
            'border-bottom-left-radius: $1;')

        // Combine display properties
        .replace(/display:\s*inline;\s*display:\s*block;\s*display:\s*inline-block;/g,
            'display: inline-block;')
        .replace(/display:\s*inline;\s*display:\s*block;/g,
            'display: block;')
        .replace(/display:\s*inline-block;\s*display:\s*block;/g,
            'display: block;')
        .replace(/display:\s*block;\s*display:\s*inline-block;/g,
            'display: inline-block;')
        .replace(/display:\s*([^\s;]+);/g,
            'display: $1;');
}

