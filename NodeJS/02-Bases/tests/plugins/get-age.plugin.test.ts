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
    test('should return 0 years', ()=>{
        // usamos spyOn para espiar la función getFullYear y devolver un valor fijo 
        // (basicamente le decimos que queremos que devuelva un valor fijo para que no dependa de la fecha actual)
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995)
        const birthdate = '1985-10-21'
        const age = getAge(birthdate)
        expect(age).toBe(0)
    })
})