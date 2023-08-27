import { Router } from 'express';

/**
 * Defines the router for users resouces
 * @route api/users
 * @access Public/Private
 * @type {Router}
 * @returns {Router}
 */

type ControllerProp = {

}

const router: Router = require('express').Router({ mergeParams: true });



module.exports = router;
