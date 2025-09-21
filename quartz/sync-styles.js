import { appendFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Lire le contenu du fichier source
const source = join(__dirname, '../content/.obsidian/snippets/index.css');
const dest = join(__dirname, '../quartz/styles/custom.scss');
const cssContent = readFileSync(source, 'utf8');

// L'ajouter au fichier destination
appendFileSync(dest, '\n\n/* CSS synchronisé depuis Obsidian */\n');
appendFileSync(dest, cssContent);

console.log('Styles synchronisés !');