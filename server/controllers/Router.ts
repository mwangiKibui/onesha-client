
import { Router } from 'express'

/**
 *  Handle all requests
 *
 * @class ParentRouter
 */
export abstract class ParentRouter {

    /**
     *  Instance of express router object
     *
     * @protected
     * @type {Router}
     * @memberof ParentRouter
     */
    public router: Router

    constructor() {
        this.router = Router({ caseSensitive: true, strict: true })
    }

    /**
     *  Listen for incoming requests
     *
     * @protected
     * @memberof ParentRouter
     */
    protected abstract routeHandler(): void

    /**
     *  Reject unhandled routes
     *
     * @protected
     * @memberof ParentRouter
     */
    protected abstract rejectHandler(): void
}