
import { Request, Response, NextFunction } from 'express';
import { extractCookie } from '../utils/cookies';

/**
 * Check the body of incoming request and ensure expected parameters are supplie
 *
 * @export
 * @param {Request} req incoming request object
 * @param {Response} res outgoing response object
 * @param {NextFunction} next express next function to pass handler to calling function
 * @returns {Response | void}
 */
export function checkUserParams(req: Request, res: Response, next: NextFunction): void | Response {
    if (!(req.body.username && req.body.password)) {
        return res.status(400).json({ error: 'Requires username and password' });
    }
    if (extractCookie(req.headers.cookie, 'onsh-ssid')) {
        return res.status(200).json({ message: 'Already logged in' });
    }
    return next();
}
