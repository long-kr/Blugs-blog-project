"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const blogsRouter = require("./blogs/blogs.router");
const commentsRouter = require("./comments/comments.router");
const usersRouter = require("./users/users.router");
const notFound = require("./errors/notFound");
const errorsHandler = require("./errors/errorsHandler");
const app = (0, express_1.default)();
const bodyParser = require("body-parser");
const version = "api/v1";
// Set the maximum request body size limit
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(express_1.default.json());
app.use(`/${version}/blogs`, blogsRouter);
app.use(`/${version}/comments`, commentsRouter);
app.use(`/${version}/users`, usersRouter);
app.use(notFound);
app.use(errorsHandler);
module.exports = app;
