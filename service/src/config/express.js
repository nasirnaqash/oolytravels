const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet");
const compress = require("compression");
const cors = require("cors");
const morgan = require("morgan");
const methodOverride = require("method-override");

const { ErrorHandler, ConvertError, NotFound } = require("../middleware/error");
const { logs, morganConfig } = require("./env-vars");

/**
 * Instantiate Express Framwork
 * @public
 */
const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs, morganConfig));

// Mount BodyParser middleware will append body of request to req.body
app.use(bodyParser.json({ limit: "10kb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10kb" }));

// Gzip Compression
app.use(compress());

// Lets you use HTTP verbs such as PUT or DELETE
// In places where the client doesn't support it
app.use(methodOverride());

// Static assets directory setup
app.use(express.static(path.join(__dirname, "../public")));

// Secure apps by setting various HTTP headers
app.use(helmet());

// Enable CORS - Cross Origin Resource Sharing
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

// Mounting api routing
app.use("/api", require("../api/routes"));

// If error is not an instanceOf APIError, convert it.
app.use(ConvertError);

// Catch 404 and forward to error handler
app.use(NotFound);

// Error handler, send stacktrace only during development
app.use(ErrorHandler);

module.exports = app;
