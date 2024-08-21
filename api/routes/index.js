const bodyParser = require('body-parser')
const usuario = require('./usuarioRoute')

module.exports = app =>{
    app.use(
        bodyParser.json(),
        usuario
    )
}