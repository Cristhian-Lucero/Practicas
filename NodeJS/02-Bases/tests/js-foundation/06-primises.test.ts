import { getPokemonById } from "../../src/js-foundation/06-promises";
describe("js-foundation/06-promises", ()=> {
    test("should return a pokemon", async()=>{
        const pokemonId = 1
        const pokemonName = await getPokemonById(pokemonId)
        expect(pokemonName).toBe('bulbasaur')
    })
    test("should return an error does pokemon not exist", async()=>{
        const pokemonId = 1000000
        try {
            await getPokemonById(pokemonId)
            expect(true).toBeFalsy()
        } catch (error) {
            expect(error).toBe(`Pokemon not exist with id ${pokemonId}`)
        }
    })
})