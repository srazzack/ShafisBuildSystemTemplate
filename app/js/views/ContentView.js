/**
*
* views/ContentView.js
*
* renders the Content in the main content area
*
**/

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var ContentView = Backbone.View.extend({
    el: '#pad_wrapper',
    tagName: 'div',
    //template: _.template($('#navItemTemplate').html()),

    render: function() {
        console.log('rendering content view');
    },

    initialize: function() {
        this.render();
        //this.listenTo(this.collection, 'change', this.render);
    }
});

module.exports = ContentView;