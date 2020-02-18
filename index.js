// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const viewEngine = require('express-json-views');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.engine('json', viewEngine({
    helpers: require('./views/helpers')
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'json');


/**
 * Routes Definitions
 */

const data = {
    "name": "Hello World",
    "date": Date.now()
}

app.get("/", (req, res) => {
    res.status(200).render('index', {
        data: data
    });
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

module.exports = app;