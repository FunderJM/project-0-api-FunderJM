import { User } from "./model/user";
import { role } from "./model/role";

export let users: User[] = [
  new User(1, 'BigE', 'Gold', 'The Emporer', 'Ofmankind', 'BigE@empire.com', 1),
  new User(2, 'TheLion', 'pass', 'Lion', 'Eljohnson', 'Lion@Dang.com', 2),
  new User(3, 'Shahram', 'pass', 'Shahram'),
  new User(4, 'Pj', 'pass', 'Pj'),
  new User(5, 'Danae', 'pass', 'Danae'),
  new User(6, 'Fred', 'pass', 'Fred'),
];

export let roles: role[] =[
  new role(1, 'Emperor'),
  new role(2, 'Primarch'),
  new role(3, 'First Captain')
]