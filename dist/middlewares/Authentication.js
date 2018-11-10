"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cookies_1 = require("./Cookies");
/**
 * Secure access to company data, to only authenticated requests
 *
 * Use cookie authentication or headers if cookies are missing
 * during sign in, cookies sent to the client are expected to be sent as a payload on all subsequent requests
 *
 * A fallback to header authentication will be used when no cookies are found in a request,
 * Missing cookies and authentication headers will cause a reject to the incoming request
 *
 * @export
 * @param {Request} req incoming request object
 * @param {Response} res outgoing response object
 * @param {NextFunction} next application level next function, to pass execution when expected criteria is met
 * @returns {(Promise<void | Response>)}
 */
async function secureClient(req, res, next) {
    let authvalue = Cookies_1.extractCookie(req.headers.cookie, 'ons-ssid');
    if (!authvalue) {
        // incoming authentication header value is expected to be in the form
        // {'ons-ssid': 'Authenticate header-value-as-read-from-cookies'}
        // header 'ons-ssid' might be missing therefore handle this error before it occurs
        try {
            authvalue = req.headers['ons-ssid'].toString().split(' ')[1];
            // tslint:disable-next-line:no-empty
        }
        catch (_a) { }
    }
    if (authvalue) {
        return next();
    }
    return res.status(500).json({ error: 'missing-cookie-and-authentication-headers' });
}
exports.secureClient = secureClient;
/**
 * Secure access to data and path that requires merchants to be authenticated.
 *
 * Use cookie authentication or headers if cookies are missing
 * during sign in, cookies sent to the client are expected to be sent as a payload on all subsequent requests.
 *
 *
 * A fallback to header authentication will be used when no cookies are found in a request,
 * missing cookies and authentication headers will cause a reject to the incoming request
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {(Promise<void | Response>)}
 */
async function secureCreative(req, res, next) {
    let authvalue = Cookies_1.extractCookie(req.headers.cookie, 'ons-ssid');
    if (!authvalue) {
        // incoming authentication header value is expected to be in the form
        // {'ons-ssid': 'Authenticate header-value-as-read-from-cookies'}
        // header 'ons-ssid' might be missing therefore handle this error before it occurs
        try {
            authvalue = req.headers['ons-ssid'].toString().split(' ')[1];
            // tslint:disable-next-line:no-empty
        }
        catch (_a) { }
    }
    if (authvalue) {
        return next();
    }
    return res.status(500).json({ error: 'missing-cookie-and-authentication-headers' });
}
exports.secureCreative = secureCreative;
