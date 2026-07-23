const { getID } = require('../plugins/get-id') // libreria para generar IDs (uuid)
const { getAge } = require('../plugins/get-age')

const buildPerson = ({ name, birthdate }) => {
  return {
    id: getID(),
    name,
    birthdate,
    age: getAge(birthdate),
  }
}
const obj = { name: 'Jhon', birthdate: '2001-03-12' }
const jhon = buildPerson(obj)
console.log(jhon)
