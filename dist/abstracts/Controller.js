"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Abstract implementation of controller classes,
 *
 * Classes that implement this Controller class must implement methods defined,
 * each child controller must implement a getter, setter and a delete middleware
 *
 * @export
 * @class Controller
 */
class Controller {
    /**
     * Creates an instance of Controller.
     * @param {Request} request
     * @param {Response} response
     * @memberof Controller
     */
    constructor(request, response) {
        this.request = request;
        this.response = response;
        this.body = this.request.body;
    }
}
exports.Controller = Controller;
