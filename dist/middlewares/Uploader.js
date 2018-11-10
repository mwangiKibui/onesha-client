"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const crypto_1 = require("crypto");
const fs_1 = require("fs");
const path = require("path");
/**
 * Handle file uploads, including documents and images
 *
 * @export uploader
 */
exports.uploader = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            try {
                fs_1.mkdirSync(path.join(__dirname, '..', '..', 'uploads'));
                // tslint:disable-next-line:no-empty
            }
            catch (_a) { }
            cb(null, path.join(__dirname, '..', '..', 'uploads'));
        },
        filename: (req, file, cb) => {
            const customFileName = crypto_1.randomBytes(18).toString('hex');
            const fileExtension = file.originalname.split('.')[1];
            cb(null, customFileName + '.' + fileExtension);
        },
    }),
});
