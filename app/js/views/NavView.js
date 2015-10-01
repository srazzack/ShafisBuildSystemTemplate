/**
*
* views/NavView.js
*
* renders the Nav in the sidebar, listens for changes to to NavCollection
*
**/

'use strict';

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
Backbone.$ = $;

var NavView = Backbone.View.extend({
    collection: collection,
    el: '#dashboard-menu',
    template: _.template($('#gameSelectTemplate').html()),

    events: {
        //'click .game':'displayCurrentGame'
    },

    render: function() {
        this.$el.html(this.template({items: this.collection.toJSON()}));
    },

    initialize: function() {
        this.render();
    },
});

module.exports = NavView;