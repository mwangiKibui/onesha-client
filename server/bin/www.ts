#!/usr/bin/env node

import * as bodyParser from "body-parser";
import * as express from "express";
import { createServer, Server } from "http";
import * as path from "path";

/**
 * Server class, configs and route handler
 *
 * @export
 * @class AppServer
 */
export class OneshaServer {
  /**
   * Instance of express application object
   *
   * @private
   * @type {express.Application}
   * @memberof AppServer
   */
  private app: express.Application;

  /**
   * Instance of http server object
   *
   * @private
   * @type {Server}
   * @memberof AppServer
   */
  private server: Server;

  /**
   * Port number for application to listen to
   *
   * @private
   * @type {(number | string)}
   * @memberof AppServer
   */
  private port: number | string;

  constructor() {
    this.port = process.env.PORT || 5000;
    this.app = express();
    this.server = createServer(this.app);
    this.configs();
    this.routes();
  }

  /**
   * Start server instance
   *
   * @memberof AppServer
   */
  public async start() {
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
  private configs() {
    this.app.use(express.static(path.join(__dirname, "..", "..", "public")));
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    // setting up the view engine
    this.app.engine("html", require("ejs").renderFile);
    this.app.set("view engine", "ejs");
  }

  /**
   * Server router handler
   *
   * @private
   * @memberof AppServer
   */
  private routes() {
    this.app.use("/", require("../routes/view-routes"));
  }

  /**
   * Normalize port to ensure a number is passed
   *
   * @private
   * @param {(string | number)} port
   * @returns
   * @memberof AppServer
   */
  private normalizePort(port: string | number) {
    if (typeof port === "function") {
      throw new TypeError("Argument of type function can't used as port");
    } else if (typeof port === "string") {
      return Number.isNaN(parseInt(port)) ? process.exit(1) : parseInt(port);
    } else if (typeof port === "undefined") {
      throw new Error("Expected parameter port number but found none");
    } else if (typeof port === "object") {
      throw new TypeError("Argument of type object can't be used as port");
    } else if (isNaN(port)) {
      return 4000;
    }
    return port;
  }
}
