const express = require('express');
const router = express.Router();
const noticeService = require('./notification.service');

function create(req, res, next) {
    noticeService.create(req.body)
        .then(() => {
            res.json({});
        })
        .catch(err => next(err));
}

function getAll(req, res, next) {
    noticeService.getAll()
        .then(notices => res.json(notices))
        .catch(err => next(err));
}

function getById(req, res, next) {
    noticeService.getById(req.params.id)
        .then(notice => notice ? res.json(notice) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    noticeService.update(req.params.id, req.body)
        .then(() => {
            res.json({});
        })
        .catch(err => next(err));
}

function _delete(req, res, next) {
    noticeService.delete(req.params.id)
        .then(() => {
            res.json({});
        })
        .catch(err => next(err));
}

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;