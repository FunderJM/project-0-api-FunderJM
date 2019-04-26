import { Role } from '../src/model/roles';
import { SqlRole } from '../src/dto/sql-role.dto';


export function convertSqlRole( role: SqlRole) {
    return new Role(role.roleid, role.sysrole);
}