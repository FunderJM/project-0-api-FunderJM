import { PoolClient } from "pg";
import { connectionPool } from "./index.dao";


export async function addNewRequest(reimbursementid: number, author: number, amount: number, dateSubmitted: number, description: string, resolver: number, status: number, type: number){
    let newReq: PoolClient;
    try {
        newReq = await connectionPool.connect();
        
    }
}