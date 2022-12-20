"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the router for comments resources.
 *
 * @type {Router}
 */
const router = require('express').Router({ mergeParams: true });
const controller = require('./comments.controller');
router.route("/")
    .get(controller.list);
module.exports = router;
