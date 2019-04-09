"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userId, username, password, firstname, lastname, email, role) {
        if (userId === void 0) { userId = 0; }
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (firstname === void 0) { firstname = ''; }
        if (lastname === void 0) { lastname = ''; }
        if (email === void 0) { email = ''; }
        if (role === void 0) { role = 'associate'; }
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.role = role;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map