import fs from 'fs'
import { yarg } from './config/pluggins/yargs.pluggin.js'

let Tabla = ''
const { b:base, l:limit, s:showTable} = yarg
const Title = `
===================================
          Tabla del ${base}
===================================
`
for (let index = 0; index < limit+1; index++) {
    Tabla += `${base} x ${index} = ${base*index} \n`
}
Tabla = Title + Tabla
const outputPath = `outputs`
fs.mkdirSync(outputPath, { recursive: true })
if (showTable) console.log(Tabla)
fs.writeFileSync(`${outputPath}/Tabla-${base}.txt`,Tabla)
console.log('File created!')