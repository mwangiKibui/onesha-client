"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../abstracts/Router");
/**
 *  Handle all requests
 *
 * @class ViewRouter
 */
class ViewRouter extends Router_1.AbstractRouter {
    constructor() {
        super();
        this.routeHandler();
        this.rejectHandler();
    }
    /**
     *  Listen for incoming requests
     *
     * @private
     * @memberof ViewRouter
     */
    routeHandler() {
        this.router.get('/', (req, res) => {
            // render home page
        });
    }
    /**
     *  Reject unhandled routes
     *
     * @private
     * @memberof ViewRouter
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
module.exports = new ViewRouter().route();
