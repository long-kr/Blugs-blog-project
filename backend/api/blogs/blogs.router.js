"use strict";
/**
 * Defines the router for blogs resources.
 *
 * @type {Router}
 */
const router = require('express').Router({ mergeParams: true });
const controller = require('./blogs.controller');
router.route("/")
    .get(controller.list);
module.exports = router;
