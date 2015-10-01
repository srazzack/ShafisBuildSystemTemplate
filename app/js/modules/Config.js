'use strict';


function Config() {

    /*********************
    *
    *       PRIVATE
    *
    **********************/
    var apiServer = '';
    var redirect = '';
    var endpoint = '';
    

    /*********************
    *
    *       PUBLIC
    *
    **********************/
    var getServer = function() {
        return apiServer;
    };

    var getRedirect = function() {
        return redirect;
    };

    var getEndpoint = function() {
        return endpoint;
    };

    var getApiEndpoint = function(api) {
        var endpoints = {
            gls: '',
            cohorts: '',
            tests: endpoint
        };

        //TODO: error checking here
        return endpoints[api];
    };

    var getProxyUri = function(proxy) {
        //TODO memoization to add proxy
        var proxies = {
            data: 'php/get_data.php'
        };

        //TODO: error checking here
        return proxies[proxy];
    };

    /*********************
    *
    *      INTERFACE
    *
    **********************/
    return {
        getServer: getServer,
        getRedirect: getRedirect,
        getEndpoint: getEndpoint,
        getApiEndpoint: getApiEndpoint,
        getProxyUri: getProxyUri
    };
}

module.exports = Config;