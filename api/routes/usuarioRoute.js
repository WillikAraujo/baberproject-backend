const { Router } = require('express')
const UsuarioController = require('../controllers/usuarioController')

const router = Router()

router
    .get('/usuarios', UsuarioController.buscarTodosUsuarios)


module.exports = router