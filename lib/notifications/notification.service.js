const db = require('../shared/dataSource');
const Notification = db.Notification;

async function getAll() {
    return await Notification.find();
}

async function getById(id) {
    return await Notification.findById(id);
}

async function create(noticeParam) {
    const notice = new Notification(noticeParam);

    await notice.save();
}

async function update(id, noticeParam) {
    const notice = await Notification.findById(id);

    if (!notice) throw 'User not found';

    Object.assign(notice, noticeParam);

    await notice.save();
}

async function _delete(id) {
    await Notification.findByIdAndRemove(id);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
