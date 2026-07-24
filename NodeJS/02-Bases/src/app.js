/*
05 - Factory function
const { buildMakePerson } = require('./js-foundation/05-factory')
const { getAge, getID } = require('./plugins')
const makePerson = buildMakePerson({ getAge, getID })
const obj = { name: 'Jhon', birthdate: '2001-03-12' }
const jhon = makePerson(obj)
console.log({ jhon })
*/
const { getPokemonById } = require('./js-foundation/06-promise')
getPokemonById(1).then((pokemon) => console.log(pokemon))
