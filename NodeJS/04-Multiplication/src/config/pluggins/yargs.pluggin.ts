import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
// Yargs es un paquete de Node.js que permite crear aplicaciones de línea de comandos con facilidad.
//  Proporciona una forma sencilla de definir opciones, argumentos y comandos para tu aplicación.
export const yarg = yargs(hideBin(process.argv))
.option('b',{ // option es un método de Yargs que se utiliza para definir una opción de línea de comandos.
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base'
})
.option('l',{
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
})
.option('s',{
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
})
.check((arg)=>{ 
    // check es un método de Yargs que se utiliza para validar los argumentos y opciones proporcionados por el usuario.
    // el argumento arg es un objeto que contiene los argumentos y opciones proporcionados por el usuario,
    if (arg.b < 1) throw 'Error: La base debe ser mayor a 0'
    return true
})
.parseSync()