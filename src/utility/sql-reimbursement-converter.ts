import { SqlReimbursement } from "../dto/sql-reimbursement.dto";
import { reImbursement } from "../model/reimbursement";


export function convertSqlReimbursement(reimburse: SqlReimbursement) {
    return new reimburse ( reImbursement.reimbursementid, reImbursement.author, reImbursement.amount, reImbursement.dateSubmitted, reImbursement.dateResolved, reImbursement.description, reImbursement.resolver, reImbursement.status, reImbursement.type);
}