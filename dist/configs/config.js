"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
/**
 * MySQL configuration string
 *
 * @export
 * @returns {string}
 */
function mysqlConfig() {
    return `mysql://${process.env.MYSQL_USERNAME}:${process.env.MYSQL_PASSOWRD}@${process.env.MYSQL_HOST}:3306/${process.env.MYSQL_DATABASE}?connectionLimit=10&dateStrings=true`;
    // return process.env.MYSQL_LOCAL_CONFIG;
}
exports.mysqlConfig = mysqlConfig;
/**
 * MongoDB configuration string
 *
 * @export
 * @returns {string}
 */
function mongoConfig() {
    return `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:27017/${process.env.MONGO_DATABASE}`;
}
exports.mongoConfig = mongoConfig;
exports.SMS_USERNAME = process.env.SMS_USERNAME;
exports.SMS_API_KEY = process.env.SMS_API_KEY;
