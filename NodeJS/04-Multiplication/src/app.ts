import { yarg } from "./config/pluggins/args.pluggin.js";
import { ServerApp } from "./presentation/server-app.js";
// El "npm run dev" da muchos mensajes por problemas de versiones con respecto a la guia
//console.log(process.argv)
//console.log(yarg.b)
(async ()=>{
 await main()
})()

async function main() {
    const { b:base, l:limit, s:showTable, d:destination, n:name} = yarg
    ServerApp.run({ base, limit, showTable, destination, name})
}