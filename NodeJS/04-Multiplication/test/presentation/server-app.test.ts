import { ServerApp } from '../../src/presentation/server-app';
import { CreateTable } from '../../src/domain/use-cases/create-table.use-case';
import { SaveFile } from '../../src/domain/use-cases/save-file.use-case';
describe('test server-app', () => {
    const options = {
            base: 2,
            limit: 10,
            showTable: false,
            destination: 'test-destination',
            name: 'test-filename'
        }
    test('should create ServerApp instance', () => {
        const serverApp = new ServerApp()
        expect(serverApp).toBeInstanceOf(ServerApp)
        expect(typeof ServerApp.run).toBe('function')
    })
    test('should run ServerApp with options',() => {
        const logSpy = jest.spyOn(console,'log')
        // Estos spies son para verificar que los métodos de CreateTable y SaveFile se llamen correctamente
        const createTableSpy = jest.spyOn(CreateTable.prototype,'execute')
        const saveTableSpy = jest.spyOn(SaveFile.prototype,'execute')
        ServerApp.run(options)
        expect(logSpy).toHaveBeenCalledTimes(2)
        expect(logSpy).toHaveBeenCalledWith('Server Runnig...')
        expect(logSpy).toHaveBeenLastCalledWith('File created!')
        expect(createTableSpy).toHaveBeenCalledTimes(1)
        expect(createTableSpy).toHaveBeenCalledWith({
            base: options.base,
            limit: options.limit
        })
        expect(saveTableSpy).toHaveBeenCalledTimes(1)
        expect(saveTableSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileDestination: options.destination,
            fileName: options.name
        })
    })
    test('should run with custom values mocked',() => {
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2')
        const saveFileMock = jest.fn().mockReturnValue(true)
        const logMock = jest.fn()
        const logErrorMock = jest.fn()

        console.log = logMock
        console.error = logErrorMock
        CreateTable.prototype.execute = createMock
        SaveFile.prototype.execute = saveFileMock

        ServerApp.run(options)

        expect(logMock).toHaveBeenCalledWith('Server Runnig...')
        expect(createMock).toHaveBeenCalledWith({
            base: options.base,
            limit: options.limit
        })
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2',
            fileDestination: options.destination,
            fileName: options.name
        })
        expect(logMock).toHaveBeenCalledWith('File created!')
        expect(logErrorMock).not.toHaveBeenCalled()
    })
})