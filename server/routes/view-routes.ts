
import { Request, Response } from 'express'
import { ParentRouter } from '../controllers/Router'

/**
 *  Handle all requests
 *
 * @class ViewRouter
 */
class ViewRouter extends ParentRouter {

    public constructor() {
        super()
        this.routeHandler()
        this.rejectHandler()
    }

    /**
     *  Listen for incoming requests
     *
     * @private
     * @memberof ViewRouter
     */
    protected routeHandler() {
        this.router.get('/', (req: Request, res: Response) => {
            // render home page
            res.render('pages/index')
        })
    }

    /**
     *  Reject unhandled routes
     *
     * @private
     * @memberof ViewRouter
     */
    protected rejectHandler() {
        this.router.get('*', (req: Request, res: Response) => {
            // res.status(404).render('.... 404 page .....')
        })

        this.router.post('*', (req: Request, res: Response) => {
            res.status(404).json({ error: 'unhandled post route' })
        })

        this.router.put('*', (req: Request, res: Response) => {
            res.status(404).json({ error: 'unhandled put route' })
        })

        this.router.patch('*', (req: Request, res: Response) => {
            res.status(404).json({ error: 'unhandled patch route' })
        })

        this.router.delete('*', (req: Request, res: Response) => {
            res.status(404).json({ error: 'unhandled delete route' })
        })
    }
}

module.exports = new ViewRouter().router