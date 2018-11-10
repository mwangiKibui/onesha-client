"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Users = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});
exports.default = mongoose_1.model('Users', Users);
