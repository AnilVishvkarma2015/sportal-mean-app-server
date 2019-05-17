const db = require('../shared/dataSource');
const Leave = db.Leave;

async function getAll() {
    return await Leave.find();
}

async function getByRegNo(regNo) {
    return await Leave.find({ regNo: regNo });
}

async function getById(id) {
    return await Leave.findById(id);
}

async function create(leaveParam) {
    const notice = new Leave(leaveParam);

    await notice.save();
}

async function update(id, leaveParam) {
    const leave = await Leave.findById(id);

    if (!leave) throw 'Leave not applied';

    Object.assign(leave, leaveParam);

    await leave.save();
}

async function _delete(id) {
    await Leave.findByIdAndRemove(id);
}

module.exports = {
    getAll,
    getById,
    getByRegNo,
    create,
    update,
    delete: _delete
};
