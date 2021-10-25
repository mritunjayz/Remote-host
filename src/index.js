#!/usr/bin/env node
import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import initializeDb from "./db";
import middleware from "./middleware";
import api from "./api";
import config from "./config.json";
import "../vueserve.js";
let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan("dev"));

// 3rd party middleware
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  bodyParser.json({
    limit: config.bodyLimit
  })
);

// Handle any top-level exceptions uncaught in the app.
process.on("uncaughtException", function(err) {
  if (err.code === "EADDRINUSE") {
    // For now, do nothing when we are unable to start the http server.
    console.error("ERROR: server already running");
  } else {
    // We will crash the app when getting unknown top-level exceptions.
    console.error("uncaught exception", err);
    process.exit(1);
  }
});

process.on("unhandledRejection", r =>
  console.error("unhandled promise rejection", r)
);

// connect to db
initializeDb(db => {
  // internal middleware
  app.use(middleware({ config, db }));

  // api router
  app.use("/api", api({ config, db }));

  app.server.listen(config.port, () => {
    console.log("starting vue-app");
    //sh.exec("node vueserve.js");
  });
});

export default app;
