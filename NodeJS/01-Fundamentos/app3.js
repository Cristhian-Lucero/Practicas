const fs = require('fs')
const content = fs.readFileSync('README.md', 'utf-8')
// Match cuenta la cantidad de react, gi significa que no importa si es mayúscula o minúscula y que busque todas las coincidencias
const reactWordCount = content.match(/react/gi).length
console.log('Palabras React: ', reactWordCount)
