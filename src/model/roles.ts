export class Role {
    roleId: number;
    emprole: string;


    constructor(roleId = 0,
    role = '') {
        this.roleId = roleId;
        this.emprole = emprole;
    }
}