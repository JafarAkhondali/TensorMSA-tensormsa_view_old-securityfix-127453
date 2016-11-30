require('es6-promise').polyfill();
require('isomorphic-fetch');
 
import EnvConstants from './../constants/EnvConstants';

export default class Api{
    get (url, params) {
        console.log(EnvConstants.getApiServerUrl() + url + params);
        return fetch(
            EnvConstants.getApiServerUrl() + url + params,
            {
                method: 'GET',
                mode: "cors",
                headers: new Headers({
                    'Accept': 'application/json'
                })
            }
        ).then(function(response) {
            return response.json();
        }).then(function(json) {
            return json;
        }).catch(function(e) {
            console.log("An Error has occurred" + e);
        });
    };

    post(url, params) {
        console.log(EnvConstants.getApiServerUrl());
        return fetch(
            EnvConstants.getApiServerUrl() + url,
            {
                method: 'POST',
                mode: "cors",
                body: JSON.stringify(params),
                headers: new Headers({
                    'Accept': 'application/json'
                })
            }             
        ).then(function(response) {
            return response.json();
        }).then(function(json) {
            return json;
        }).catch(function(e) {
            console.log("An Error has occurred :" +e);
        });
        };

    put(url, params) {
        console.log(EnvConstants.getApiServerUrl());
        return fetch(
            EnvConstants.getApiServerUrl() + url,
            {
                method: 'PUT',
                mode: "cors",
                body: JSON.stringify(params),
                headers: new Headers({
                    'Accept': 'application/json'
                })
            }
        ).then(function(response) {
            return response.json();
        }).then(function(json) {
            return json;
        }).catch(function() {
            console.log("An Error has occurred");
        });
    };

    delete  (url, params) {
        console.log(EnvConstants.getApiServerUrl());
        return fetch(
            EnvConstants.getApiServerUrl() + url,
            {
                method: 'DELETE',
                mode: "cors",
                body: JSON.stringify(params),
                headers: new Headers({
                    'Accept': 'application/json'
                })
            }
        ).then(function(response) {
            return response.json();
        }).then(function(json) {
            return json;
        }).catch(function() {
            console.log("An Error has occurred");
        });
    };

    getJson  (url, params) {
        return fetch(
            url,
            {
                method: 'POST',
                mode: "cors",
                body: JSON.stringify(params),
                headers: new Headers({
                    'Accept': 'application/json'
                })
            }
        ).then(function(response) {
            return response.json();
        }).then(function(json) {
            return json;
        }).catch(function(e) {
            console.log("An Error has occurred :" +e);
        });
    };
}
