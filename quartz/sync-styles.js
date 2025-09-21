const fs = require('fs');
const path = require('path');

// Copier le CSS d'Obsidian vers Quartz
const source = '../content/.obsidian/snippets/index.css';
const dest = 'static/styles/custom.css';

fs.appendFileSync(source, dest);
console.log('Styles synchronisés !');