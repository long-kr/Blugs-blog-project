import { Router } from "express";
/**
 * Defines the router for blogs resources.
 *
 * @type {Router}
 */

type ControllerProp = {
    list: () => void,
    create: () => void,
};

const router: Router = require('express').Router({ mergeParams: true });
const controller: ControllerProp = require('./blogs.controller');

router.route("/")
    .get(controller.list)
    .post(controller.create)

module.exports = router;