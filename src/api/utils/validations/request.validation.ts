import { Request } from "express";

export const validationRequest = (req: Request) => {
    const authorization = req.get('Authorization');
    let token = '';
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        token = authorization.substring(7);
    }
    return token;
}