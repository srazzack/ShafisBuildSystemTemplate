/**
*
* routers/AppRouter.js
*
* main router for the application, controls routing and tracks history
*
**/

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('lodash');

var Config = require('../modules/Config');
var config = {};
var Nav = {};

var defaultRoute = 'auth';
var Router = {};
var userGroup = '';

var clientId = '';
var apiKey = '';
var scopes = ''; // 'email'
var gapi = window.gapi;
var userEmail = '';

function authInitialized(userEmail) {
    $('#userText').html('<i><span class="fa fa-user"><i>');
    $('#logoutText a').html('Logout ' + userEmail);
    defaultRoute = '';
    initialize();
}

function checkAuth() {
    // check to see if authorized email has been saved, else go about normal authorization
    if (sessionStorage.email) {
        if (sessionStorage.email.indexOf('@') !== -1) {
            authInitialized(sessionStorage.email);
            userGroup = '';
        } else if (sessionStorage.email.indexOf('@') !== -1) {
            authInitialized(sessionStorage.email);
            userGroup = '';
        }
    } else {
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
    }
}

function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        // we're authorized so make an api call to get user email
        gapi.client.load('plus', 'v1', function() {
            var request = gapi.client.plus.people.get({userId: 'me'});
            request.execute(function(resp) {
                userEmail = resp.emails[0].value;
                if (userEmail.indexOf('@g') !== -1) {
                    sessionStorage.email = userEmail;
                    authInitialized(userEmail);
                } else if (userEmail.indexOf('@') !== -1) {
                    sessionStorage.email = userEmail;
                    authInitialized(userEmail);
                } else {
                    $('#msgText').html('');
                    $('#loginButton').click(function() {
                        forceLogout('');
                    });
                }
            });
        });
    } else {
        $('#msgText').empty().append('<button class="btn btn-primary" id="loginButton">Authorize</button>');
        $('#loginButton').click(function() {
            displayPopup();
        });
    }
}

function displayPopup() {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
    return false;
}

function forceLogout(url) {
    console.log('forcing logout');
    var accessToken = gapi.auth.getToken().access_token;
    var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' + accessToken;
    $.ajax({
        type: 'GET',
        url: revokeUrl,
        async: true,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function() {
            window.location.href = (url === '') ? config.getRedirect() : url;
        },
        error: function(e) {
            console.log(e);
        }
    });
    gapi.auth.signOut();
}

        Router = Backbone.Router.extend({
            routes: {
                '': defaultRoute,
                logout:'logout'
            },
            auth: function() {
                displayPopup();
            },

            logout: function() {
                sessionStorage.email = '';
                forceLogout('');
            },

            reRoute: function() {
                console.log('to other');
            }
        });

        Backbone.history.start();
    }

module.exports = Router;