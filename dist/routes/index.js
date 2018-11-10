"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Router_1 = require("../abstracts/Router");
/**
 *  Handle all requests
 *
 * @class RouterInstance
 */
class RouterInstance extends Router_1.AbstractRouter {
    /**
     * Creates an instance of RouterInstance.
     * @memberof RouterInstance
     */
    constructor() {
        super();
        this.router = express_1.Router({ caseSensitive: true, strict: true });
        this.routeHandler();
        this.rejectHandler();
    }
    /**
     *  Listen for incoming requests
     *
     * @private
     * @memberof RouterInstance
     */
    routeHandler() {
        this.router.get('/', (req, res) => {
            res.status(302).json({ message: 'welcome to api server' });
        });
        this.router.use(/data/, require('./data-routes'));
        this.router.use(/authenticate/, require('./auth-routes'));
    }
    /**
     *  Reject unhandled routes
     *
     * @private
     * @memberof RouterInstance
     */
    rejectHandler() {
        this.router.get('*', (req, res) => {
            // res.status(404).render('.... 404 page .....')
        });
        this.router.post('*', (req, res) => {
            res.status(404).json({ error: 'unhandled post route' });
        });
        this.router.put('*', (req, res) => {
            res.status(404).json({ error: 'unhandled put route' });
        });
        this.router.patch('*', (req, res) => {
            res.status(404).json({ error: 'unhandled patch route' });
        });
        this.router.delete('*', (req, res) => {
            res.status(404).json({ error: 'unhandled delete route' });
        });
    }
}
module.exports = new RouterInstance().route();
