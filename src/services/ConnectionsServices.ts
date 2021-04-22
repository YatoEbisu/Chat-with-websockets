import { Repository, TreeChildren, getCustomRepository } from 'typeorm';
import { Connection } from '../entities/Connection';
import { ConnectionRepository } from '../repositories/ConnectionsRepository';

interface IConnectionCreate{
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;

}
class ConnectionsServices {
    private connectiondRepository: Repository<Connection>
    constructor(){
        this.connectiondRepository = getCustomRepository(ConnectionRepository);
    }
    async create({socket_id, user_id, admin_id, id}: IConnectionCreate ){
        const connection = this.connectiondRepository.create({
            id,
            socket_id,
            admin_id,
            user_id
        });

        await this.connectiondRepository.save(connection);

        return connection;
    }
    async findByUserId(user_id: string){
        const connetion = await this.connectiondRepository.findOne({
            user_id
        });

        return connetion;
    }
}

export { ConnectionsServices }