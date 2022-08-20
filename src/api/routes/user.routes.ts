import express from 'express';
import userService from '../services/user.service';

const router = express.Router();

router.get('/users/me', (_req, res) => {
    res.send(userService.getUser("it-drixit-1"));
});

router.get('/users', (_req, res) => {
    res.send(userService.getUsers());
});

export default router;

