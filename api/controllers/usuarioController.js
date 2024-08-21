const UsuarioService = require('../services/usuarioService')

const usuarioService = new UsuarioService()

class UsuarioController{
    static async buscarTodosUsuarios(req, res){
        const usuarios = await usuarioService.buscarTodosUsuarios()
        res.status(200).json(usuarios)
    }

}


module.exports = UsuarioController