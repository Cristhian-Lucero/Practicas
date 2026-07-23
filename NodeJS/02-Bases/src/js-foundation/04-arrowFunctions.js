const users = [
  {
    id: 1,
    name: 'Jhon Dude',
  },
  {
    id: 2,
    name: 'Jane Dude',
  },
]

const getUserByID = (ID) => {
  const usuario = users.find((user) => user.id === ID)
  if (!usuario) throw new Error(`NO EXISTE usuario con ID:${ID}`)
  console.log(usuario)
}

module.exports = {
  getUserByID,
}
