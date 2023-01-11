import express, { Express } from "express";
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();

const blogsRouter = require('./blogs/blogs.router');
const commentsRouter = require('./comments/comments.router');

const app: Express = express();
const version = "/api/v1";

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(`${version}/blogs`, blogsRouter);
app.use(`${version}/comments`, commentsRouter);

module.exports = app;