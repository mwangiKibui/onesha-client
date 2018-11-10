"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("../abstracts/Controller");
const Template_1 = require("../models/Template");
/**
 * Create, update, delete and retrieve Templates by creatives.
 *
 * @export
 * @class Templates
 * @extends {Controller}
 */
class Templates extends Controller_1.Controller {
    constructor(request, response) {
        super(request, response);
    }
    /**
     * Interface to update existing Templates previously created by creatives
     *
     * @returns {Promise<Response>}
     * @memberof Templates
     */
    async findOneAndUpdate() {
        throw new Error('Method not implemented.');
    }
    /**
     * Find and retrieve all Templates available.
     *
     * These are the Templates previously created by creatives.
     *
     * @returns {Promise<Response>}
     * @memberof Templates
     */
    async findAllEntries() {
        const templates = await Template_1.default.aggregate();
        return this.response.status(200).json(templates);
    }
    /**
     * Add a new Template. Require creatives to be registered and accounts verified.
     *
     * This is a protected resource.
     *
     * @returns {Promise<Response>}
     * @memberof Templates
     */
    async addNewEntry() {
        throw new Error('Method not implemented.');
    }
    /**
     * Find matching Template, probably from search
     *
     * @returns {Promise<Response>}
     * @memberof Templates
     */
    async findOneEntry() {
        const criteria = new RegExp(this.request.params.s);
        const match = await Template_1.default.aggregate([
            {
                $match: {
                    title: { $regex: criteria, $options: 'xi' },
                },
            },
        ]);
        return this.response.status(200).json(match);
    }
}
exports.Templates = Templates;
