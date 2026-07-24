const buildMakePerson = ({ getID, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getID(),
      name,
      birthdate,
      age: getAge(birthdate),
    }
  }
}

module.exports = {
  buildMakePerson,
}
