const database = require('../models')

class UsuarioService{

    async buscarTodosUsuarios(dto){
        const users = await database.User.findAll()
        return users
    }

    async cadastrarUsuario(dto){
        const user = await database.User.findOne({
            where:{
                phoneNumber: dto.phoneNumber
            }
        })

        if(user) throw new Error("Telefone já existe!")

        const userCreated = database.User.create({
            firstName: dto.firstName,
            lastName: dto.lastName,            
            phoneNumber: dto.phoneNumber,
            password: dto.password,
            role: dto.role
        })

        return userCreated
    }

    async buscarUsuarioPorId(id){
        const user = await database.User.findOne({
            where:{
                id: id
            }
        })

        if (!user) throw new Error("Usuário não encontrado!")
        
        return user
    }

    async editarUsuario(dto){
        const user = await this.buscarUsuarioPorId(dto.id)

        if (!user) throw new Error("Usuário não encontrado!")

        user.firstName = dto.firstName
        user.lastName = dto.lastName
        user.phoneNumber = dto.phoneNumber
        user.password = dto.password
        user.role = dto.role

        await user.save()
    }

    async excluirUsuario(id){
        const user = await this.buscarUsuarioPorId(id)
        if (!user) throw new Error("Usuário não encontrado!")
        await user.destroy()
    }

}

module.exports = UsuarioService