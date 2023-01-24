"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_json_1 = __importDefault(require("../utils/posts.json"));
/**
 * CRUD functions
 */
function list(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.json({ data: posts_json_1.default });
    });
}
function read(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).json({ data: res.locals.blog });
    });
}
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const now = new Date();
        const newPost = Object.assign(Object.assign({}, req.body.data), { id: posts_json_1.default.length + 1, created: now, updated: now });
        posts_json_1.default.push(newPost);
        console.log(newPost);
        res.status(201).json({ data: newPost });
    });
}
/**
 * Validation functions
 */
function blogExist(req, res, next) {
    const { blogId } = req.params;
    const foundBlog = posts_json_1.default.find((post) => post.id === Number(blogId));
    if (foundBlog) {
        res.locals.blog = foundBlog;
        return next();
    }
    next({
        status: 404,
        message: `Blog id is not found: ${blogId}`,
    });
}
function bodyDataHas(propertyName) {
    return (req, res, next) => {
        const { data = {} } = req.body;
        if (data[propertyName]) {
            return next();
        }
        next({
            status: 400,
            message: `Body must include a "${propertyName}"`,
        });
    };
}
function propertiesIsValid(req, res, next) {
    const { data = {} } = req.body;
    const { userId, title, body, } = data;
    if (typeof userId !== "number" ||
        typeof title !== "string" ||
        typeof body !== "string") {
        return next({
            status: 400,
            message: `Value of properties must be valid`,
        });
    }
    next();
}
module.exports = {
    list: list,
    read: [blogExist, read],
    create: [
        bodyDataHas("userId"),
        bodyDataHas("title"),
        bodyDataHas("body"),
        create,
    ],
};
