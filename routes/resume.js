/**
 * API Entry point
 * Created by Ricardo Jiménez Hernández
 * 12/08/19.
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/resume');

router.get('/', controller.getResume);

module.exports = router;