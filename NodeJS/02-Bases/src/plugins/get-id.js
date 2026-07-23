const { v4: uuidv4 } = require('uuid') // libreria para generar IDs (uuid)
const getID = () => {
  return uuidv4()
}
module.exports = {
  getID,
}
