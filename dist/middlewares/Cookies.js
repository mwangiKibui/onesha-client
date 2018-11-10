"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if cookie exists and returns all cookies, or cookie value if cookie name is passed
 *
 * @export
 * @param {(string | Array<string>)} cookieString cookie string from client
 * @param {string} cookieName cookie name to retrieve
 * @returns {string | object}
 */
function extractCookie(cookieString, cookieName) {
    // @ts-ignore
    const c = decodeURIComponent(cookieString);
    const e = {};
    let d;
    if (c.indexOf(';') !== -1) {
        d = c.split(';');
    }
    else {
        d = c;
    }
    if (typeof d === 'string') {
        e[d.split('=')[0]] = d.split('=')[1];
    }
    else {
        d.map((p) => (e[p.split('=')[0]] = p.split('=')[1]));
    }
    if (typeof cookieName !== 'undefined') {
        return e[cookieName];
    }
    return e;
}
exports.extractCookie = extractCookie;
