import Route from '@ioc:Adonis/Core/Route'
import UserController from 'App/Controllers/Http/UsersController'

export default function userRoute() {
    Route.group(() => {
        Route.post('/create-user', new UserController().createUser).as('user.create')
        Route.get('/get-all-user', new UserController().getAllUser)
    })
}