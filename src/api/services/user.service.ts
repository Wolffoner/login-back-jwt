import { User } from '../models/schemas/user.schema';
import { ClientUser, ServerUser } from '../models/interfaces.ts/user.interface';
import authService from './auth.service';
import { Token } from '../models/interfaces.ts/token.interface';
class UserService {

    constructor() {
    }

    async getUsers(token: Token): Promise<ClientUser[]> {
        try {
            authService.verifyToken(token.jwt);
            const users = await User.find({}, { _id: 0, __v: 0, password: 0 });
            return users as ClientUser[];
        } catch (error) {
            throw new Error("Error user not found");
        }
    }

    async getUser(token: Token): Promise<ClientUser> {
        try {
            const { email } = authService.verifyToken(token.jwt);
            const user = await User.findOne({ email }, { _id: 0, __v: 0, password: 0 });
            return user?.toJSON() as ClientUser;
        } catch (error) {
            throw new Error("Error user not found");
        }
    }

    async getUserWithPassword(email: string): Promise<ServerUser> {
        try {
            const user = await User.findOne({ email }, { _id: 0, __v: 0 });
            return user?.toJSON() as ServerUser;
        } catch (error) {
            throw new Error("Error user not found");
        }
    }

    async createUser(serverUser: ServerUser): Promise<Token> {
        const user = new User({
            ...serverUser
        })
        try {
            await user.save();
            return authService.createToken(serverUser.email);
        } catch (error) {
            throw new Error("Error user creation");
        }
    }
}

export default new UserService();