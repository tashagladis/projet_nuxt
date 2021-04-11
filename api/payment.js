const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const stripe = require('stripe')('SECRET_KEY'); // Add your Secret Key Here

const app = express();

// This will make our form data much more useful
app.use(bodyParser.urlencoded({ extended: true }));

// This will set express to render our views folder, then to render the files as normal html
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, './views')));

module.exports = {
    path: "api/payment",
    handler:app 
}
