import { SaveFile, Options } from '../../../src/domain/use-cases/save-file.use-case';
import * as fs from 'fs';

describe('src/domain/use-cases/save-file.use-case',() => {
    const Options = {
        fileContent: 'custom content',
        fileDestination:`custom-outputs/file-destination`,
        fileName:`custom-table-name`
    }
    afterAll(() => {
        // limpiar aoutputs despues de cada prueba
        const outputsFolder = 'outputs'
        const customOutputsFolder = 'custom-outputs'
        const existOutputs = fs.existsSync(outputsFolder)
        const existCustomOutputs = fs.existsSync(customOutputsFolder)
        if (existOutputs) fs.rmSync(outputsFolder, {recursive: true})
        if (existCustomOutputs) fs.rmSync(customOutputsFolder, {recursive: true})
    })
    
    test('should saveFile create SaveFile with default value',() => {
        const filePath = 'outputs/table.txt'
        const saveFile = new SaveFile()
        const Options = {
            fileContent: 'test content',
        }
        const result = saveFile.execute(Options)
        expect(result).toBe(true)

        const checkFile = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, {encoding:'utf-8'})
        expect(checkFile).toBe(true)
        expect(fileContent).toBe(Options.fileContent)
    })
    test('should saveFile create SaveFile with custom value',() => {
        const saveFile = new SaveFile()
        const filePath = `${Options.fileDestination}/${Options.fileName}.txt`
        const result = saveFile.execute(Options)
        expect(result).toBe(true)

        const checkFile = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, {encoding:'utf-8'})
        expect(checkFile).toBe(true)
        expect(fileContent).toBe(Options.fileContent)
    })
    test('should return false if directory could not be created', () => {
        const saveFile = new SaveFile()
        // mockImplementation: Sobreescribe la funcionalidad de mkdirSync con esa funcion de error
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('This is a custom error message from testing')}
        )
        const result = saveFile.execute(Options)
        expect(result).toBe(false)
        // reiniciamos la funcionalidad del spy para que no interfiera en otros tests
        mkdirSpy.mockRestore()
    })
    test('should return false if file could not be created', () => {
        const saveFile = new SaveFile()
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('This is a custom writing error message from testing')}
        )

        const result = saveFile.execute({fileContent: 'hola'})
        expect(result).toBe(false)
        writeFileSpy.mockRestore()
    })
})