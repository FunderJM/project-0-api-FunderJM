import { SqlStatus } from '../dto/sql-status.dto';
import { ReimbursementStatus } from '../../model/reimbursementstatus';


export function convertSqlStatus(status: SqlStatus) {
    return new ReimbursementStatus(status.statusId, status.status);
}