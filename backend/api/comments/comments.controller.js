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
const comments_json_1 = __importDefault(require("../utils/comments.json"));
/**
 * Get function for list comments
 */
function list(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.json({ data: comments_json_1.default });
    });
}
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const now = new Date();
        const newComment = Object.assign(Object.assign({}, req.body.data), { id: comments_json_1.default.length + 1, createdAt: now, updatedAt: now });
        comments_json_1.default.push(newComment);
        res.status(201).json(newComment);
    });
}
module.exports = {
    list: list,
    create: create,
};
