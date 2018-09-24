
import { Router, Request, Response } from 'express';

/**
 *  Handle all requests
 *
 * @class RouterInstance
 */
class RouterInstance {

    /**
     *  Instance of express router object
     *
     * @private
     * @type {Router}
     * @memberof RouterInstance
     */
    public router: Router;

    public constructor() {
        this.router = Router({ caseSensitive: true, strict: true });
        this.routeHandler();
        this.rejectHandler();
    }

    /**
     *  Listen for incoming requests
     *
     * @private
     * @memberof RouterInstance
     */
    private routeHandler() {
        this.router.get('/', (req: Request, res: Response) => {
            // render home page
            // res.render('......')
        });
    }

    /**
     *  Reject unhandled routes
     *
     * @private
     * @memberof RouterInstance
     */
    private rejectHandler() {
        this.router.get('*', (req: Request, res: Response) => {
            // res.status(404).render('.... 404 page .....')
        });

        this.router.post('*', (req: Request, res: Response) => {
            res.status(404).json({ error: 'unhandled post route' });
        });

        this.router.put('*', (req: Request, res: Response) => {
            res.status(404).json({ error: 'unhandled put route' });
        });

        this.router.patch('*', (req: Request, res: Response) => {
            res.status(404).json({ error: 'unhandled patch route' });
        });

        this.router.delete('*', (req: Request, res: Response) => {
            res.status(404).json({ error: 'unhandled delete route' });
        });
    }
}

module.exports = new RouterInstance().router;
