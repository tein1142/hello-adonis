import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
    public async createUser(ctx: HttpContextContract) {
        try {
            let body = ctx.request.all()
            const createUser = await User.create({ fname: body.fname, lname: body.lname, email: body.email })
            // ctx.response.status(201).send(createUser)
            const allUsers = await User.all()
            return ctx.response.status(200).send(allUsers)
        } catch (error) {
            return ctx.response.status(500).send(error)
        }
    }

    public async getAllUser(ctx: HttpContextContract) {
        try {
            const allUsers = await User.all()
            return ctx.response.status(200).send(allUsers)
        } catch (error) {
            return ctx.response.status(500).send(error)
        }
    }
}
