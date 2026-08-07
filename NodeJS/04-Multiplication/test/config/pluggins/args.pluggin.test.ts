
const runCommand = async(args: string[]) =>{
    
    process.argv = [...process.argv, ...args]
    /**
     * Usamos import() para importar el módulo de forma dinámica, lo que nos permite cargar el módulo en tiempo 
     * de ejecución y obtener la instancia actualizada de yarg con los argumentos proporcionados.
     * De otro modo daría error al intentar importar el módulo de forma estática, ya que los argumentos de línea 
     * de comandos se procesan en el momento de la importación y no se actualizarían con los nuevos argumentos 
     * proporcionados.
     */
    const {yarg} = await import('../../../src/config/pluggins/args.pluggin')
    return yarg
}
describe('test args.pluggin.ts',() => {
    const originalArgv = process.argv
    beforeEach(() => {
        process.argv = originalArgv
        jest.resetModules()
    })
    test('should return default values', async () => {
        const argv = await runCommand(['-b','5'])
        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs'
        }))
    })
    test('should return config with custom values', async () => {
        const argv = await runCommand(['-b','2','-l','40','-s','-n','test','-d','test'])
        expect(argv).toEqual(expect.objectContaining({
            b: 2,
            l: 40,
            s: true,
            n: 'test',
            d: 'test'
        }))
    })
})