import { PoolClient } from "pg";
import { connectionPool } from "./index.dao";


export async function findAllRequestByStatusId(status: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const queryString = `SELECT * FROM project0.reimbursement as re
        INNER JOIN project0.reimbursementstatus as sta ON (re.status = sta.statusid)
        WHERE re.status = $1 ORDER BY re.datesubmitted ASC;`;
        const result = await client.query(queryString, [status]);
        const restat = result.rows[0];
        return restat;
    }
}