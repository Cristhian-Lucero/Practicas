import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe('httpClientPlugin', ()=>{
    test('should return a string', async()=>{
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1')
        expect(data).toEqual({
            "userId": expect.any(Number),
            "id": expect.any(Number),
            "title": expect.any(String),
            "completed": expect.any(Boolean)
        })
    })
    test('should have POST, PUT and DELETE methods',  ()=>{
        expect(typeof httpClientPlugin.delete).toBe('function')
        expect(typeof httpClientPlugin.post).toBe('function')
        expect(typeof httpClientPlugin.put).toBe('function')
    })
})