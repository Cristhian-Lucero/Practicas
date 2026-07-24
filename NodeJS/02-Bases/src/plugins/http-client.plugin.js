const axios = require('axios') // Axios es una librería de cliente HTTP basada en promesas para el navegador y node.js
const httClientPlugin = {
  get: async (url) => {
    const { data } = await axios.get(url)
    return data
    // const response = await fetch(url)
    // return await response.json()
  },
  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url, body) => {},
}
module.exports = {
  http: httClientPlugin,
}
