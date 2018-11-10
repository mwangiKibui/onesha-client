"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("../abstracts/Controller");
const Offer_1 = require("../models/Offer");
/**
 * Create, update, delete and retrieve offers by creatives.
 *
 * @export
 * @class Offers
 * @extends {Controller}
 */
class Offers extends Controller_1.Controller {
    constructor(request, response) {
        super(request, response);
    }
    /**
     * Interface to update existing offers previously created by creatives
     *
     * @returns {Promise<Response>}
     * @memberof Offers
     */
    async findOneAndUpdate() {
        throw new Error('Method not implemented.');
    }
    /**
     * Find and retrieve all offers available.
     *
     * These are the offers previously created by creatives.
     *
     * @returns {Promise<Response>}
     * @memberof Offers
     */
    async findAllEntries() {
        const offers = await Offer_1.default.aggregate();
        return this.response.status(200).json(offers);
    }
    /**
     * Add a new offer. Require creatives to be registered and accounts verified.
     *
     * This is a protected resource.
     *
     * @returns {Promise<Response>}
     * @memberof Offers
     */
    async addNewEntry() {
        throw new Error('Method not implemented.');
    }
    /**
     * Find matching offer, probably from search
     *
     * @returns {Promise<Response>}
     * @memberof Offers
     */
    async findOneEntry() {
        const search = new RegExp(this.request.params.s);
        const match = await Offer_1.default.aggregate([
            {
                $match: {
                    title: { $regex: search, $options: 'xi' },
                },
            },
        ]);
        return this.response.status(200).json(match);
    }
}
exports.Offers = Offers;
