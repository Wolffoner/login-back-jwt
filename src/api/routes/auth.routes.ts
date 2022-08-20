import express, { Request, Response } from "express";
import authService from "../services/auth.service";

const router = express.Router();

router.post('/authenticate', async (req: Request, res: Response) => {
    try {
        res.send(await authService.setToken(req.body));
    } catch (error: any) {
        res.status(500).send({ error: error.message });
    }
});

export default router;