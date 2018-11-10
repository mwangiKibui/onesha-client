"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const querystring = require("querystring");
const config_1 = require("../configs/config");
exports.default = (dest, msg) => {
    return new Promise((resolve, reject) => {
        const postData = querystring.stringify({
            username: config_1.SMS_USERNAME,
            to: dest,
            message: msg,
        });
        const postOptions = {
            host: 'api.africastalking.com',
            path: '/version1/messaging',
            method: 'POST',
            rejectUnauthorized: false,
            requestCert: false,
            agent: false,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postData.length,
                'Accept': 'application/json',
                'apikey': config_1.SMS_API_KEY,
            },
        };
        const req = https.request(postOptions, async (res) => {
            res.setEncoding('utf8');
            const data = await (() => {
                return new Promise((r) => {
                    res.on('data', (response) => r(response));
                });
            })();
            let jsObject;
            let recipients;
            try {
                jsObject = JSON.parse(data.toString());
                recipients = jsObject.SMSMessageData.Recipients;
                if (Number(recipients[0].statusCode) >= 400) {
                    return reject({ message: 'client-error' });
                }
                else if (Number(recipients[0].statusCode) <= 226) {
                    return resolve({ message: 'success' });
                }
                else {
                    return reject({ message: jsObject.SMSMessageData.Message });
                }
            }
            catch (e) {
                return reject({ message: data });
            }
        });
        req.write(postData);
        req.on('error', (err) => reject({ message: err }));
        req.end();
    });
};
