import { ClientUser } from '../models/user.model';
import dataMock from '../utils/dataMock.json';

const users: Array<ClientUser> = dataMock.users as unknown as Array<ClientUser>;

class UserService {

    private data: ClientUser[];

    constructor() {
        this.data = users;
    }

    getUsers(): ClientUser[] {
        return this.data;
    }

    getUser(id: string): ClientUser {
        const user = this.data.find((user: ClientUser) => user.id === id);
        if (user) {
            return user;
        }
        throw new Error('User not found');
    }
}

export default new UserService();