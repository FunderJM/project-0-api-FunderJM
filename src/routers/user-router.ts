import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { User } from '../model/user';

export const userRouter = express.Router();

userRouter.get('', [
    authMiddleware(['']),
    (req, res) => {
        res.json(User);
    }
]);

userRouter.get('/:id', (req, res) => {
    const id: number = +req.params.userId;
    const employee = req.params.find(u => u.userId === id);
    if (employee) {
        res.json(employee);
    } else {
        res.sendStatus(404);
    }
});