import { CreateTable } from '../../../src/domain/use-cases/create-table.use-case';
import { Options } from '../../../src/domain/use-cases/save-file.use-case';

describe('create-table.use-case',()=>{
    test('should create table with default values', ()=>{
        const createTable = new CreateTable()
        const tabla = createTable.execute({base:2})
        const rows = tabla.split('\n').length

        expect(createTable).toBeInstanceOf(CreateTable)
        expect(tabla).toContain('2 x 1 = 2')
        expect(rows).toBe(10)
    })
    test('should create table with custom values', () => {
        const Options = {
            base: 3,
            limit: 20
        }
        const tabla = new CreateTable().execute(Options)
        const rows = tabla.split('\n').length
        expect(tabla).toContain('3 x 15 = 45')
        expect(rows).toBe(Options.limit)
    })
})