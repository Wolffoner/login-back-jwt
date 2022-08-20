import "dotenv/config";
import { ServerUser } from "../models/interfaces.ts/user.interface";
import userService from "./user.service";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Token } from "../models/interfaces.ts/token.interface";
class AuthService {

    constructor() {
    }

    createToken(email: string): Token {
        const token = jwt.sign({ email }, process.env.JWT_SECRET || "secret", { expiresIn: '1h' });
        return { jwt: token };
    }

    verifyToken(token: string): JwtPayload {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "secret");
        return decodedToken as JwtPayload;
    }

    async setToken(user: ServerUser): Promise<Token> {
        try {
            if (!user?.email || !user?.password) {
                throw new Error("Email and password are required");
            }
            const serverUser: ServerUser = await userService.getUserWithPassword(user.email);
            if (serverUser.password !== user.password) {
                throw new Error("Login unsuccessful");
            }
            return this.createToken(serverUser.email);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

}

export default new AuthService();