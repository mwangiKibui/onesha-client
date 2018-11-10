"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("nodemailer");
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
/**
 * Email sending and retrival handler
 *
 * @export
 * @class Email
 */
class Email {
    /**
     * Creates a new instance to deliver email(s) to specified email address(es)
     * @param {string[]} recipients receiver email address(es) to send email to
     * @param {(string | Buffer)} message message to deliver in html format
     * @param {string} subject subject of the email to send e.g `Your request has been processed`
     * @param {string} fromtext name to embed in `from` field e.g `Holiday invitation`
     * @param {string} tocustomname name to embed in `to` field e.g `Valued client`
     * @memberof Email
     */
    constructor(recipients, message, subject, fromtext, tocustomname) {
        this.recipients = recipients;
        this.message = message;
        this.subject = subject;
        this.fromtext = fromtext;
        this.tocustomname = tocustomname;
    }
    /**
     * Construct transport to send emails
     *
     * @returns {Promise<void>}
     * @memberof Email
     */
    async constructTransport() {
        this.transport = nodemailer_1.createTransport({
            pool: true,
            host: process.env.APP_EMAIL_HOST,
            port: 25,
            secure: false,
            auth: {
                user: process.env.APP_EMAIL_ADDRESS,
                pass: process.env.APP_EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
    }
    /**
     * Execute send to send email to passed email addresses
     *
     * @returns {Promise<string[]>}
     * @memberof Email
     */
    async send() {
        var e_1, _a;
        await this.constructTransport();
        const mailstatus = [];
        try {
            for (var _b = __asyncValues(this.recipients), _c; _c = await _b.next(), !_c.done;) {
                const mail = _c.value;
                const response = await this.transport.sendMail({
                    html: this.message,
                    to: `${this.tocustomname} <${mail}>`,
                    from: `${this.fromtext} <${process.env.APP_EMAIL_ADDRESS}>`,
                    subject: this.subject,
                    replyTo: process.env.APP_EMAIL_ADDRESS,
                });
                mailstatus.push(response);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return mailstatus;
    }
}
exports.Email = Email;
