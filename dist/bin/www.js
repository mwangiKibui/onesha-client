#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const http_1 = require("http");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const config_1 = require("../configs/config");
/**
 * Server class, configs and route handler
 *
 * @export
 * @class AppServer
 */
class OneshaServer {
    constructor() {
        this.port = process.env.PORT || 5000;
        this.app = express();
        this.server = http_1.createServer(this.app);
        this.configs();
        this.routes();
    }
    /**
     * Start server instance
     *
     * @memberof AppServer
     */
    async start() {
        const port = this.normalizePort(this.port);
        this.server.listen(port, () => {
            console.log(`Server process: ${process.pid} listening on port: ${port}`);
        });
    }
    /**
     * Top level server configs
     *
     * @private
     * @memberof AppServer
     */
    configs() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cors({ origin: true, credentials: true, preflightContinue: true }));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use((req, res, next) => {
            res.setHeader('X-Frame-Options', 'SAMEORIGIN'); // disable viewing in iframe
            next();
        });
        mongoose
            .connect(config_1.mongoConfig(), { useNewUrlParser: true })
            .catch((e) => e);
    }
    /**
     * Server router handler
     *
     * @privates
     * @memberof AppServer
     */
    routes() {
        // handle production view requests
        // route all traffic to index.html for client-side rendering using Vue
        if (process.env.NODE_ENV !== 'production') {
            // static assets folder
            this.app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));
            // handle single page application
            this.app.get(/.*/, (req, res) => res.sendFile(path.resolve(__dirname, '..', '..', 'public/index.html')));
        }
        // handle api requests and forward to router instance
        this.app.use('/api', require('../routes'));
    }
    /**
     * Normalize port to ensure a number is passed
     *
     * @private
     * @param {(string | number)} port
     * @returns
     * @memberof AppServer
     */
    normalizePort(port) {
        if (typeof port !== 'string' && typeof port !== 'number') {
            throw new TypeError(`Argument of type ${typeof port} cannot be used as port!`);
        }
        return Number(port);
    }
}
exports.OneshaServer = OneshaServer;
