import express from 'express';
import { findAllRequestByUserId, createNewRequest } from '../daos/reimbursement.dao';
export const reimbursementRouter = express.Router();

reimbursementRouter.get(`/reimbursements/author/userId/:userId`, async (req, res) => {
    const id: number = +req.params.userid;
    const employeerequest = await findAllRequestByUserId(id);
    if (employeerequest) {
        res.status(200).json(employeerequest);
    } else {
        res.sendStatus(404);
    }
});

reimbursementRouter.get(`/reimbursements/status/:statusId`, async (req, res) => {
    const id: number = +req.params.statusid;
    const employeerequest = await findAllRequestByUserId(id);
    if (employeerequest) {
        res.status(200).json(employeerequest);
    } else {
        res.sendStatus(404);
    }
});

reimbursementRouter.post(`/reimbursements`, async (req, res) => {
    const reimburseId = req.body.userId;
    const reimburseAmount = req.body.amount;
    const todaysDate = req.body.datesubmitted;
    const reimburseDescr = req.body.description;
    const reimburseType = req.body.type;
    const employeereimburse = await createNewRequest(reimburseId, reimburseAmount, todaysDate, reimburseDescr, reimburseType);
    if (employeereimburse) {
        res.status(200).json(employeereimburse);
    } else {
        res.sendStatus(404);
    }
});