"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../abstracts/Router");
/**
 * Handles user authentication
 *
 * @class AuthRoutes
 * @extends {AbstractRouter}
 */
class AuthRoutes extends Router_1.AbstractRouter {
    /**
     * Creates an instance of AuthRoutes.
     * @memberof AuthRoutes
     */
    constructor() {
        super();
        this.routeHandler();
        this.rejectHandler();
    }
    /**
     * Handles authentication requests and forwards to relevant controllers
     *
     * @protected
     * @memberof AuthRoutes
     */
    routeHandler() {
        this.router.post('/signup', (req, res) => {
            //
        });
    }
    /**
     * Unhandled route requests to authentication will be rejected automatically
     *
     * @protected
     * @memberof AuthRoutes
     */
    rejectHandler() {
        this.router.post('*', (req, res) => {
            res.status(500).json({ error: 'Internal server error' });
        });
        this.router.get('*', (req, res) => {
            res.status(500).json({ error: 'Unauthorized' });
        });
    }
}
module.exports = new AuthRoutes().route();
