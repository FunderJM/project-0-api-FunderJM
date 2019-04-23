import { SqlRole } from '../../dto/sql-role.dto';
import { Role } from '../../model/roles';

export function convertSqlRole( role: SqlRole) {
    return new Role(role.roleid, role.sysrole);
}