const express = require('express');

const getAllUsers = (req, res) => {
    res.status(500).json({
        status: "error, this enpoint is not yet implemented."
    });
};

const getUser = (req, res) => {
    res.status(500).json({
        status: "error, this enpoint is not yet implemented."
    });
};

const createUser = (req, res) => {
    res.status(500).json({
        status: "error, this enpoint is not yet implemented."
    });
};

const updateUser = (req, res) => {
    res.status(500).json({
        status: "error, this enpoint is not yet implemented."
    });
};

const deleteUser = (req, res) => {
    res.status(500).json({
        status: "error, this enpoint is not yet implemented."
    });
};

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);


module.exports = router;


