import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { findByUsernameAndPassword } from '../daos/user.dao';

export const userRouter = express.Router();

userRouter.get('', [
    authMiddleware(['Finance Manager']),
    (req, res) => {
        res.json(`SELECT * FROM project0.employee`);
    }
]);

userRouter.get('/:id', (req, res) => {
    const id: number = +req.params.userId;
    const employee = req.params.find(u => u.userId === id);
    if (employee) {
        res.status(200).json(employee);
    } else {
        res.sendStatus(404);
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
