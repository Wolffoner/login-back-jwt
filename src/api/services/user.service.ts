import { User } from '../models/schemas/user.schemas';
import { ClientUser, ServerUser } from '../models/user.model';
class UserService {

    constructor() {
    }

    async getUsers(): Promise<ClientUser[]> {
        try {
            const user = await User.findOne({}, { _id: 0, __v: 0, password: 0 });
            return user?.toJSON() as ClientUser[];
        } catch (error) {
            throw new Error("Error user not found");
        }
    }

    async getUser(id: string): Promise<ClientUser> {
        try {
            const user = await User.findOne({ id }, { _id: 0, __v: 0, password: 0 });
            return user?.toJSON() as ClientUser;
        } catch (error) {
            throw new Error("Error user not found");
        }
    }

    async createUser(serverUser: ServerUser): Promise<ClientUser> {
        const user = new User({
            ...serverUser
        })
        try {
            await user.save();
            return user.toJSON() as ClientUser;
        } catch (error) {
            throw new Error("Error user creation");
        }
    }
}

export default new UserService();