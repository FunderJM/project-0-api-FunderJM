import { PoolClient } from 'pg';
import { connectionPool } from './index.dao';
import { convertSqlUser } from '../../utility/sql-user-converter';
import { convertSqlRole } from '../../utility/sql-role-converter';


export async function findByUsernameAndPassword(username: string, password: string) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const queryString = `SELECT * FROM project0.employee as us
            INNER JOIN project0.sysrole as ro ON  (us.emprole = ro.roleid)
            WHERE username = $1 AND emppassword = $2;`;
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


export async function findByUserId(userid: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const queryString = `SELECT * FROM project0.employee
        WHERE userid = $1;`;
        const result = await client.query(queryString, [userid]);
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

export async function allUsers() {
    let client: PoolClient;
    console.log(`test1`);
    try {
        client = await connectionPool.connect();
        const queryString = `SELECT firstname, lastname, email FROM project0.employee;`;
        const result = await client.query(queryString);
        return result;
    } catch (err) {
        console.log(err);
        console.log(`test2`);
        return undefined;
    } finally {
        client && client.release();
    }
}

export async function updateUser (userId: number, username: string, password: string, firstname: string, lastname: string, email: string, emprole: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        if (username !== null) {
            const query = `UPDATE TABLE project0.employee (username)
            VALUE ($2) WHERE employee.userid = $1;`;
            const result = await client.query(query, [userId, username]);
            return result;
        }
        if (password !== null) {
            const query = `UPDATE TABLE project0.employee (password)
            VALUE ($2) WHERE employee.userid = $1;`;
            const result = await client.query(query, [userId, password]);
            return result;
        }
        if (firstname !== null) {
            const query = `UPDATE TABLE project0.employee (firstname)
            VALUE ($2) WHERE employee.userid = $1;`;
            const result = await client.query(query, [userId, firstname]);
            return result;
        }
        if (lastname !== null) {
            const query = `UPDATE TABLE project0.employee (lastname)
            VALUE ($2) WHERE employee.userid = $1;`;
            const result = await client.query(query, [userId, lastname]);
            return result;
        }
        if (email !== null) {
            const query = `UPDATE TABLE project0.employee (email)
            VALUE ($2) WHERE employee.userid = $1;`;
            const result = await client.query(query, [userId, email]);
            return result;
        }
        if (emprole !== null) {
            const query = `UPDATE TABLE project0.employee (emprole)
            VALUE ($2) WHERE employee.userid = $1;`;
            const result = await client.query(query, [userId, emprole]);
            return result;
        }
        return userId;
    } catch (err) {
        console.log(err);
        console.log(`test2`);
        return undefined;
    } finally {
        client && client.release();
    }
}