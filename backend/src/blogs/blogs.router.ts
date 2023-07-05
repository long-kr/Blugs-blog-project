import { Router } from 'express';
require('dotenv').config();
console.log(require('dotenv').config());
/**
 * Defines the router for blogs resources.
 *
 * @type {Router}
 */

type ControllerProp = {
  list: () => void;
  create: () => void;
  read: () => void;
};

const router: Router = require('express').Router({ mergeParams: true });
const controller: ControllerProp = require('./blogs.controller');

router.route('/').get(controller.list).post(controller.create);
router.route('/:blogId([0-9]+)').get(controller.read);

module.exports = router;
