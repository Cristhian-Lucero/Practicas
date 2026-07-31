import { SaveFile } from "../../../src/domain/use-cases/save-file.use-case"
import * as fs from 'fs';

describe('src/domain/use-cases/save-file.use-case',() => {
    test('should saveFile create SaveFile with default value',() => {
        const saveFile = new SaveFile()
        const Options = {
            fileContent: 'test content',
        }
        const result = saveFile.execute(Options)
        expect(result).toBe(true)
        const checkFile = fs.existsSync('outputs/table.txt')
    })
    
})