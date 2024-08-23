const { Router } = require('express')
const UsuarioController = require('../controllers/usuarioController')

const router = Router()

router
    .get('/usuarios', UsuarioController.buscarTodosUsuarios)
    .get('/usuario/:id', UsuarioController.buscarUsuarioPorId)
    .post('/usuarios', UsuarioController.cadastrarUsuario)
    .put('/usuario/:id', UsuarioController.editarUsuario)
    .delete('/usuario/:id', UsuarioController.excluirUsuario)


module.exports = router