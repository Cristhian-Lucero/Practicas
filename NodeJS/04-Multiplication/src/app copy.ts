import fs from 'fs'

let Tabla = ''
const base = 5
const Title = `
===================================
          Tabla del ${base}
===================================
`
for (let index = 0; index < 11; index++) {
    Tabla += `${base} x ${index} = ${base*index} \n`
}
Tabla = Title + Tabla
const outputPath = `outputs`
fs.mkdirSync(outputPath, { recursive: true })
console.log(Tabla)
fs.writeFileSync(`${outputPath}/Tabla-${base}.txt`,Tabla)