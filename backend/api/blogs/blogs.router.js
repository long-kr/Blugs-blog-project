"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router({ mergeParams: true });
const controller = require("./blogs.controller");
router.route("/").get(controller.list).post(controller.create);
module.exports = router;
