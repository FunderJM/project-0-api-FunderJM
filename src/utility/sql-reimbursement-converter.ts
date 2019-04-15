import { SqlReimbursement } from "../dto/sql-reimbursement.dto";
import { reimbursement } from "../model/reimbursement";


export function convertSqlReimbursement(reimburse: SqlReimbursement) {
    return new reimburse ( reimbursement.reimbursementId, reimbursement.author, reimbursement.amount, reimbursement.dateSubmitted, reimbursement.description, reimbursement.resolver, reimbursement.status, reimbursement.type);
}