"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./model/user");
var spaceship_1 = require("./model/spaceship");
var role_1 = require("./model/role");
exports.users = [
    new user_1.User(1, 'BigE', 'Gold', 'The Emporer', 'Ofmankind', 'BigE@empire.com', 'Emperor'),
    new user_1.User(2, 'TheLion', 'pass', 'Lion', 'Eljohnson', 'Lion@Dang.com', 'Primarch'),
    new user_1.User(3, 'Shahram', 'pass', 'Shahram'),
    new user_1.User(4, 'Pj', 'pass', 'Pj'),
    new user_1.User(5, 'Danae', 'pass', 'Danae'),
    new user_1.User(6, 'Fred', 'pass', 'Fred'),
];
exports.spaceships = [
    new spaceship_1.Spaceship(1, 2, 'Enterprise', 5000, 5000, 'its a ship'),
    new spaceship_1.Spaceship(2, 2, 'Tesla', 5000, 5000, 'its a ship'),
    new spaceship_1.Spaceship(3, 2, 'SS Minow', 5000, 5000, 'its a ship'),
    new spaceship_1.Spaceship(4, 2, 'X-Wing', 5000, 5000, 'its a ship'),
    new spaceship_1.Spaceship(5, 4, 'Salmon Catcher', 5000, 5000, 'its a ship'),
    new spaceship_1.Spaceship(6, 6, 'Serrenity', 5000, 5000, 'its a ship'),
    new spaceship_1.Spaceship(7, 3, 'Yes', 5000, 5000, 'its a ship'),
];
exports.roles = [
    new role_1.role(1, 'Emperor'),
    new role_1.role(2, 'Primarch'),
    new role_1.role(3, 'First Captain')
];
//# sourceMappingURL=state.js.map