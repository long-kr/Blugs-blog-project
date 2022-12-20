"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan = require('morgan');
const blogsRouter = require('./blogs/blogs.router');
require("dotenv").config();
const app = (0, express_1.default)();
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use("/blogs", blogsRouter);
module.exports = app;
