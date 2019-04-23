import { SqlReimbursement } from '../../dto/sql-reimbursement.dto';
import { reImbursement } from '../../model/reimbursement';


export function convertSqlReimbursement(reimburse: SqlReimbursement) {
    return new reImbursement ( reimburse.reimbursementId, reimburse.author, reimburse.amount, reimburse.dateSubmitted, reimburse.dateResolved, reimburse.description, reimburse.resolver, reimburse.status, reimburse.type);
}