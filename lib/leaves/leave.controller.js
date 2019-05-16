const express = require('express');
const router = express.Router();
const leaveService = require('./leave.service');

function create(req, res, next) {
    leaveService.create(req.body)
        .then(() => {
            res.json({});
        })
        .catch(err => next(err));
}

function getAll(req, res, next) {
    leaveService.getAll()
        .then(leaves => res.json(leaves))
        .catch(err => next(err));
}

function getById(req, res, next) {
    leaveService.getById(req.params.id)
        .then(leave => leave ? res.json(leave) : res.sendStatus(404))
        .catch(err => next(err));
}

function getByRegNo(req, res, next) {
    leaveService.getByRegNo(req.params.regNo)
        .then(leave => leave ? res.json(leave) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    leaveService.update(req.params.id, req.body)
        .then(() => {
            res.json({});
        })
        .catch(err => next(err));
}

function _delete(req, res, next) {
    leaveService.delete(req.params.id)
        .then(() => {
            res.json({});
        })
        .catch(err => next(err));
}

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);
router.get('/getByRegNo/:regNo', getByRegNo);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;