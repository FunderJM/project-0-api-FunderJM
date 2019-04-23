export class Role {
    roleId: number;
    emprole: string;


    constructor(roleId = 0,
    emprole = '') {
        this.roleId = roleId;
        this.emprole = emprole;
    }
}