const fs = require('fs') // Importa el modulo de fyle system que permite leer y escribir archivos
const data = fs.readFileSync('README.md', 'utf-8') // Lee el archivo de manera sincrona
const newData = data.replace(/React/gi, 'Angular') // Reemplaza todas las ocurrencias de NodeJS por Angular
fs.writeFileSync('README-ANGULAR.md', newData) // Crea un archivo nuevo con el contenido modificado
