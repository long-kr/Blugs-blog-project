import express, { Express } from "express";
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const blogsRouter = require("./blogs/blogs.router");
const commentsRouter = require("./comments/comments.router");
const usersRouter = require("./users/users.router");
const notFound = require("./errors/notFound");
const errorsHandler = require("./errors/errorsHandler");

const app: Express = express();
const version: string = "api/v1";

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(`/${version}/blogs`, blogsRouter);
app.use(`/${version}/comments`, commentsRouter);
app.use(`/${version}/users`, usersRouter);

app.use(notFound);
app.use(errorsHandler);

module.exports = app;
