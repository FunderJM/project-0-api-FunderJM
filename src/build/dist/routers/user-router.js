"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var state_1 = require("../state");
var auth_middleware_1 = require("../middleware/auth.middleware");
/**
 * User router will handle all requests starting with
 *  /users
 */
exports.userRouter = express_1.default.Router();
/**
 * find all users
 * endpoint: /users
 */
exports.userRouter.get('', [
    auth_middleware_1.authMiddleware(['Emperor']),
    function (req, res) {
        console.log('retreiving all users');
        res.json(state_1.users);
    }
]);
/**
 * find user by id
 * endpoint: /users/:id
 */
exports.userRouter.get('/:id', function (req, res) {
    var id = +req.params.id;
    console.log("retreiving user with id: " + id);
    var user = state_1.users.find(function (u) { return u.userId === id; });
    if (user) {
        res.json(user);
    }
    else {
        res.sendStatus(404);
    }
});
exports.userRouter.post('', function (req, res) {
    console.log("creating user", req.body);
    var user = req.body;
    user.userId = Math.floor(Math.random() * 10000000);
    state_1.users.push(user);
    res.status(201);
    res.send(user);
});
exports.userRouter.patch('', function (req, res) {
    var body = req.body; // destructuring
    console.log("updating user", body);
    var user = state_1.users.find(function (u) {
        // console.log(`u = `, u);
        return u.userId === body.userId;
    });
    if (!user) {
        res.sendStatus(404);
    }
    else {
        for (var field in user) {
            if (body[field] !== undefined) {
                user[field] = body[field];
            }
        }
        res.json(user);
    }
});
exports.userRouter.post('/login', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    var user = state_1.users.find(function (u) { return u.username === username && u.password === password; });
    if (user) {
        // attach the user data to the session object
        req.session.user = user;
        res.send("Welcome " + username);
    }
    else {
        res.sendStatus(401);
    }
});
//# sourceMappingURL=user-router.js.map