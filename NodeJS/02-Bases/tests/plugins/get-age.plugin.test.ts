import { getAge } from "../../src/plugins";

describe('getAge', ()=>{
    test('should return the age of person', ()=>{
        const birthdate = '1985-10-21'
        const age = getAge(birthdate)
        expect(typeof age).toBe('number')
    })
    test('should return current age', ()=>{
        const birthdate = '1985-10-21'
        const age = getAge(birthdate)
        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculateAge)
    })
})