import { SqlReimbursement } from '../src/dto/sql-reimbursement.dto';
import { ReImbursement } from '../src/model/reimbursement';



export function convertSqlReimbursement(reimburse: SqlReimbursement) {
    return new ReImbursement ( reimburse.reimbursementId, reimburse.author, reimburse.amount, reimburse.dateSubmitted, reimburse.dateResolved, reimburse.description, reimburse.resolver, reimburse.status, reimburse.type);
}