/**
*
* scripts/main.js
*
* This is the starting point for your application.
* Take a look at http://browserify.org/ for more info
*
**/

'use strict';

// libs
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
// modules
var AppRouter = require('./routers/AppRouter');

// app object
var app = window.app || {};

window.initMain = function() {
    var router = new AppRouter();
    // //router.authorize();
    // app.router = router.getRouter();
};