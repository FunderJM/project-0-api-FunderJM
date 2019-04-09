"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spaceship = /** @class */ (function () {
    function Spaceship(shipId, owner, name, weight, speed, description) {
        if (shipId === void 0) { shipId = 0; }
        if (owner === void 0) { owner = 0; }
        if (name === void 0) { name = ''; }
        if (weight === void 0) { weight = 0; }
        if (speed === void 0) { speed = 0; }
        if (description === void 0) { description = ''; }
        this.shipId = this.shipId;
        this.owner = this.owner;
        this.name = this.name;
        this.weight = this.weight;
        this.speed = this.speed;
        this.description = this.description;
    }
    return Spaceship;
}());
exports.Spaceship = Spaceship;
//# sourceMappingURL=spaceship.js.map