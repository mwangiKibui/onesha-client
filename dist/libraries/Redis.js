"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
class Redis {
    /**
     * Return a redis client instance
     *
     * @static
     * @returns
     * @memberof Redis
     */
    static getClient() {
        new this();
        return Redis.client;
    }
    constructor() {
        Redis.client = redis_1.createClient();
    }
}
exports.default = Redis;
