import express, { Request, Response } from "express";
import userService from '../services/user.service';
import { validationRequest } from '../utils/validations/request.validation';

const router = express.Router();

router.get('/users/me', async (req: Request, res: Response) => {
    const token = validationRequest(req);
    try {
        res.send(await userService.getUser({ jwt: token }));
    } catch (error: any) {
        res.status(404).send({ error: error.message });
    }
});

router.get('/users', async (req: Request, res: Response) => {
    const token = validationRequest(req);
    try {
        res.send(await userService.getUsers({ jwt: token }));
    } catch (error: any) {
        res.status(404).send({ error: error.message });
    }
});

router.post('/users/new', async (req: Request, res: Response) => {
    try {
        res.send(await userService.createUser(req.body));
    } catch (error: any) {
        res.status(500).send({ error: error.message });
    }
});

export default router;

