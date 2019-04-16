import { PoolClient } from 'pg';
import { connectionPool } from './index.dao';
import { convertSqlRole } from '../utility/sql-role-converter';
import { convertSqlUser } from '../utility/sql-user-converter';


export async function findByUsernameAndPassword(username: string, password: string) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const queryString = `SELECT * FROM project0.employee as us
            INNER JOIN project0.sysrole as ro ON  (us.emprole = ro.roleid)
            WHERE username = $1 AND emppassword = $2`;
        const result = await client.query(queryString, [username, password]);
        const user = result.rows[0];
        if (user) {
            const convertedUser = convertSqlUser(user);
            convertedUser.role = convertSqlRole(user);
            return convertedUser;
        } else {
            return undefined;
        }
    } catch (err) {
        console.log(err);
        return undefined;
    } finally {
        client && client.release();
    }
}