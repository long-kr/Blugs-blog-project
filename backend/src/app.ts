import express, { Express } from "express";
const morgan = require('morgan');
const blogsRouter = require('./blogs/blogs.router');

require("dotenv").config();


const app: Express = express();

app.use(morgan('dev'));
app.use(express.json());

app.use("/blogs", blogsRouter);

module.exports = app;