/**
 * API Entry point
 * Created by Ricardo Jiménez Hernández
 * 12/08/19.
 */

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>
    res.status(200).send(`Current Time ${new Date().toString()}`)
);

module.exports = router;