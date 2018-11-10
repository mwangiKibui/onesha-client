"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/**
 *  Handle all requests
 *
 * @class AbstractRouter
 */
class AbstractRouter {
    /**
     * Creates an instance of AbstractRouter.
     * @memberof AbstractRouter
     */
    constructor() {
        this.router = express_1.Router({ caseSensitive: true, strict: true });
    }
    /**
     * Returns instance of express router to expose to module exports
     *
     * @returns {Router}
     * @memberof AbstractRouter
     */
    route() {
        return this.router;
    }
}
exports.AbstractRouter = AbstractRouter;
