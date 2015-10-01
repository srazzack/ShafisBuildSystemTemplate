'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('lodash');

var Conf = require('../modules/Config');
var config = new Conf();

var NotesModel = Backbone.Model.extend({
    defaults: { a: 1 },
    idAttribute: 'id'
});

var s = new Settings;
s.fetch();

localStorage.notes = JSON.Stringify()

var NotesCollection = Backbone.Collection.extend({
    localStorage: new Store("Settings"),
    model: GameModel
});

module.exports = GamesCollection;