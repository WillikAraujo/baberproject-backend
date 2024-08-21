const database = require('../models')

class UsuarioService{

    async buscarTodosUsuarios(dto){
        const users = await database.User.findAll()
        return users
    }

}

module.exports = UsuarioService