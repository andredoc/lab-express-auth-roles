// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

// Register the location for handlebars partials here:
const path = require("path");
hbs.registerPartials(path.join(__dirname, 'views/partials'));   // Necesario para el SETup de partials. Nota: "Colocar / "

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

app.locals.siteTitle = `IronLearn`;

// Session config
require('./config/session.config')(app)

// Routes
require("./routes")(app)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
