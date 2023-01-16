import { Router } from "express";
/**
 * Defines the router for comments resources.
 *
 * @type {Router}
 */

type ControllerProps = {
  list: () => void;
  create: () => void;
};

const router: Router = require("express").Router({ mergeParams: true });
const controller: ControllerProps = require("./comments.controller");

router.route("/").get(controller.list).post(controller.create);

module.exports = router;
