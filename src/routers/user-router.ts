import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { findByUsernameAndPassword, allUsers, findByUserId } from '../daos/user.dao';

export const userRouter = express.Router();

userRouter.get('', [
    authMiddleware(['Finance Manager']),
    async (req, res) => {
        const result = await allUsers();
        res.json(result.rows);
    }
]);

userRouter.get('/:id', authMiddleware(['Finance Manager']), async (req, res) => {
    const id: number = +req.params.id;
    console.log(id);
    const employee = await findByUserId(id);
    if (employee) {
        res.status(200).json(employee);
    } else {
        res.sendStatus(404);
        console.log(`t5`);
    }
});

userRouter.post('/login', async (req, res) => {
    if (req.body) {
        const username = req.body.username;
        const password = req.body.password;
        const attempt = await findByUsernameAndPassword(username, password);
        console.log(attempt);
        if (attempt) {
            req.session.user = attempt;
            res.json(attempt);
        } else {
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(400);
    }
});
