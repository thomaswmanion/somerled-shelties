'use strict';

var express = require('express');
var controller = require('./dogs.controller');

var router = express.Router();

router.get('/descriptions', controller.descriptions);

module.exports = router;