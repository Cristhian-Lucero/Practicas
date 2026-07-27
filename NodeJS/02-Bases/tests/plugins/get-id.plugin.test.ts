import { getUUID } from "../../src/plugins";

describe("getID",()=>{
    test('shoud return ID', ()=>{
        const id = getUUID()
        expect(typeof id).toBe('string')
        expect(id.length).toBe(36)
    })
})