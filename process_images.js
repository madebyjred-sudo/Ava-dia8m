import fs from 'fs';
import path from 'path';

const sourceDir = '/Users/juan/Downloads/dia de la mujer 2';
const targetDir = path.join(process.cwd(), 'public', 'products');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'));

let products = [];
let idCounter = 1;

files.forEach((file) => {
    if (file === 'este no.png') return;

    // Name structure looks like: "$25 3 rosas decoradas (.png" or "$30 1girasol decorado (es solo un girasol, no le cambies el papel).png"

    // Extract price (number after $)
    const priceMatch = file.match(/\$(\d+)/);
    const price = priceMatch ? parseInt(priceMatch[1], 10) : 0;

    // Extract name (everything after the price part and before extension or parentheses)
    // Let's remove the price and extension first
    let nameRaw = file.replace(/^\$\d+\s*/, '').replace(/\.[^/.]+$/, '');

    // Clean up parenthesis notes
    nameRaw = nameRaw.replace(/\s*\(.*?\)/g, '').trim();

    // Sometimes there's a loose '(' at the end like in "$25 3 rosas decoradas (.png"
    nameRaw = nameRaw.replace(/\s*\($/, '').trim();

    // Capitalize first letter
    const name = nameRaw.charAt(0).toUpperCase() + nameRaw.slice(1);

    const newFileName = `product-${idCounter}.png`;

    // Copy file
    fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, newFileName));

    // Add to products array
    products.push({
        id: idCounter,
        name: name,
        category: "Colección Día de la Mujer",
        description: "", // Since we removed description, we can leave this empty or remove it from the type
        flowers: [name], // Use the name as the main composition since it describes the flowers
        price: price,
        image: `/products/${newFileName}`
    });

    idCounter++;
});

// Sort by price ascending
products.sort((a, b) => a.price - b.price);

console.log(JSON.stringify(products, null, 2));
