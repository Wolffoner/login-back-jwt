import express from 'express';
import userService from '../services/user.service';

const router = express.Router();

router.get('/users/me', async (_req, res) => {
    try {
        res.send(await userService.getUser("it-drixit-1"));
    } catch (error: any) {
        res.status(404).send({ error: error.message });
    }
});

router.get('/users', (_req, res) => {
    res.send(userService.getUsers());
});

// router.post('/users/new', async (_req, res) => {
//     try {
//         res.send(await userService.createUser());
//     } catch (error: any) {
//         res.status(500).send({ error: error.message });
//     }
// });

export default router;

