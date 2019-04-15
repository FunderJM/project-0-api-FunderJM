import { Role } from "../model/roles";

export class SqlUser {
  user_id = 0;
  username = '';
  user_password = '';
  firstname = '';
  lastname = '';
  email = '';
  role = Role;
}