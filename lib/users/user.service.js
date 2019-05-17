const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const log = require('log4js').getLogger('application');
const db = require('../shared/dataSource');
const User = db.User;

async function authenticate({ regNo, password }) {
    const user = await User.findOne({ regNo });
   
    if (user && user.isActive === false) {
        let message = "You account has been blocked.";
        return { message: message };
    }

    const secret = config.get('authenticationSecret');
    const tokenTimeout = config.get('tokenExpireInTime');
    if (user && bcrypt.compareSync(password, user.password)) {
        const { password, ...userWithoutPassword } = user.toObject();
        const token = jwt.sign({ sub: user.id }, secret, { expiresIn: tokenTimeout });
        return {
            ...userWithoutPassword,
            token
        };
    }
}

async function getAll() {
    return await User.find().select('-password');
}

async function getById(id) {
    return await User.findById(id).select('-password');
}

async function getByRegNo(regNo) {
    return await User.find({ regNo: regNo });
}

async function getByResetToken(resetToken) {
    return await User.findOne({ resetToken: resetToken })
}

async function create(userParam) {
    // validate
    if (await User.findOne({ regNo: userParam.regNo })) {
        throw 'Registration Number "' + userParam.regNo + '" is already taken';
    }

    if (await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
        log.warn('Email "' + userParam.email + '" is already taken')
        throw 'Email "' + userParam.email + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.password = bcrypt.hashSync(userParam.password, 10);
    }

    if (userParam.changePassword) {
        userParam.password = bcrypt.hashSync(userParam.changePassword, 10);
    }

    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}

module.exports = {
    authenticate,
    getAll,
    getById,
    getByRegNo,
    getByResetToken,
    create,
    update,
    delete: _delete
};
