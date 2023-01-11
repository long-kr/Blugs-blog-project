import { Router } from "express";
/**
 * Defines the router for comments resources.
 *
 * @type {Router}
 */
const router: Router = require('express').Router({ mergeParams: true });
const controller: { list: () => void } = require('./comments.controller');

router.route("/")
    .get(controller.list);

module.exports = router;