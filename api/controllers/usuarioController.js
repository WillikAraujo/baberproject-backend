const UsuarioService = require('../services/usuarioService')

const usuarioService = new UsuarioService()

class UsuarioController{
    static async buscarTodosUsuarios(req, res){
        const user = await usuarioService.buscarTodosUsuarios()
        res.status(200).json(user)
    }

    static async cadastrarUsuario(req, res){
        const { firstName, lastName, phoneNumber, password, role } = req.body
        
        try {
            await usuarioService.cadastrarUsuario({ firstName, lastName, phoneNumber, password, role })
            res.status(200).send({message: "Usuário criado com sucesso!"})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    static async buscarUsuarioPorId(req, res){
        const { id } = req.params
        try {
            const user = await usuarioService.buscarUsuarioPorId(id)
            res.status(200).send(user).json()
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    static async editarUsuario(req, res){
        const { id } = req.params
        const { firstName, lastName, phoneNumber, password, role } = req.body

        try {
            await usuarioService.editarUsuario({ id, firstName, lastName, phoneNumber, password, role})
            res.status(200).send({message: "Usuário alterado com sucesso"})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
    
    static async excluirUsuario(req, res){
        const { id } = req.params

        try {
            await usuarioService.excluirUsuario(id)
            res.status(200).send({message: "Usuário deletado com sucesso"})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}



module.exports = UsuarioController