import { SqlStatus } from '../src/dto/sql-status.dto';
import { ReimbursementStatus } from '../src/model/reimbursementstatus';



export function convertSqlStatus(status: SqlStatus) {
    return new ReimbursementStatus(status.statusId, status.status);
}