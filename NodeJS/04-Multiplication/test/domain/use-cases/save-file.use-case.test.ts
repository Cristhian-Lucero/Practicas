import { SaveFile } from "../../../src/domain/use-cases/save-file.use-case"
import * as fs from 'fs';

describe('src/domain/use-cases/save-file.use-case',() => {
    afterEach(() => {
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
        const Options = {
            fileContent: 'custom content',
            fileDestination:`custom-outputs/file-destination`,
            fileName:`custom-table-name`
        }
        const filePath = `${Options.fileDestination}/${Options.fileName}.txt`
        const result = saveFile.execute(Options)
        expect(result).toBe(true)

        const checkFile = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, {encoding:'utf-8'})
        expect(checkFile).toBe(true)
        expect(fileContent).toBe(Options.fileContent)
    })
    
})