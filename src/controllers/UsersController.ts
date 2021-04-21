import { Request, Response} from 'express'
import { UsersServices } from '../services/UsersServices'


class UsersController{
    async create(req: Request, res: Response): Promise<Response>{
        const { email } = req.body;

        const usersServices = new UsersServices();

        const user = await usersServices.create(email);

        return res.json(user);
    }
}

export { UsersController }