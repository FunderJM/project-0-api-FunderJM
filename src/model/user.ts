import { Role } from "./roles";

export class User {
  userId: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;

  constructor(userId = 0, username = '', password = '', firstname = '', lastname = '', email = '', role: Role = undefined) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.role = role;
  }
}