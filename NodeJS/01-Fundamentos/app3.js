const fs = require('fs')
const content = fs.readFileSync('README.md', 'utf-8')
const wordCount = content.split(' ').length
const reactWordCount = content.split('React')
console.log('Palabras: ', wordCount)
console.log('Palabras: ', reactWordCount)
