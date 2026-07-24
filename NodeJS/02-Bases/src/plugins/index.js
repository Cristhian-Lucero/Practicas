const { getAge } = require('./get-age.plugin')
const { getID } = require('./get-id.plugin')
const { http } = require('./http-client.plugin')
const buildLogger = require('./logger.pluggin')
module.exports = {
  http,
  getAge,
  getID,
  buildLogger,
}
