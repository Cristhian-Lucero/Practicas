// Patron adaptador para tener la libreria en un solo lugar por si queremos cambiarla
const getAgeLibrary = require('get-age') // libreria para calcular edad
const getAge = (birthday) => {
  if (!birthday) throw new Error('Se requiere fecha de nacimiento')
  return getAgeLibrary(birthday)
}
module.exports = {
  getAge,
}
