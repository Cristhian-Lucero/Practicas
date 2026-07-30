interface RunOpcions {
    base: number,
    limit: number,
    showTable: boolean
}
export class ServerApp {
    static async run(opcions:RunOpcions) {
        console.log('Server Runnig...')
    }
}