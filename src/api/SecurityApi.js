/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$PANEL_HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.0-rc1
 * Contact: info@onedata.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EmergencyPassphraseChangeRequest', 'model/EmergencyPassphraseStatus', 'model/Error', 'model/WebCert', 'model/WebCertModifyRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EmergencyPassphraseChangeRequest'), require('../model/EmergencyPassphraseStatus'), require('../model/Error'), require('../model/WebCert'), require('../model/WebCertModifyRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.SecurityApi = factory(root.Onepanel.ApiClient, root.Onepanel.EmergencyPassphraseChangeRequest, root.Onepanel.EmergencyPassphraseStatus, root.Onepanel.Error, root.Onepanel.WebCert, root.Onepanel.WebCertModifyRequest);
  }
}(this, function(ApiClient, EmergencyPassphraseChangeRequest, EmergencyPassphraseStatus, Error, WebCert, WebCertModifyRequest) {
  'use strict';

  /**
   * Security service.
   * @module api/SecurityApi
   * @version 21.02.0-rc1
   */

  /**
   * Constructs a new SecurityApi. 
   * @alias module:api/SecurityApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getEmergencyPassphraseStatus operation.
     * @callback module:api/SecurityApi~getEmergencyPassphraseStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmergencyPassphraseStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get emergency passphrase status
     * Returns information whether emergency passphrase is set.
     * @param {module:api/SecurityApi~getEmergencyPassphraseStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmergencyPassphraseStatus}
     */
    this.getEmergencyPassphraseStatus = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EmergencyPassphraseStatus;

      return this.apiClient.callApi(
        '/emergency_passphrase', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebCert operation.
     * @callback module:api/SecurityApi~getWebCertCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebCert} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about SSL certificates configuration and status
     * Returns information about SSL certificate status and renewal configuration. 
     * @param {module:api/SecurityApi~getWebCertCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebCert}
     */
    this.getWebCert = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = WebCert;

      return this.apiClient.callApi(
        '/web_cert', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyWebCert operation.
     * @callback module:api/SecurityApi~modifyWebCertCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify SSL certificate configuration
     * Modifies configuration regarding certificate management. Allows enabling or disabling certificate autorenewal using Let&#39;s Encrypt service. 
     * @param {module:model/WebCertModifyRequest} webCertModifyRequest New values for certificate management configuration. 
     * @param {module:api/SecurityApi~modifyWebCertCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.modifyWebCert = function(webCertModifyRequest, callback) {
      var postBody = webCertModifyRequest;

      // verify the required parameter 'webCertModifyRequest' is set
      if (webCertModifyRequest === undefined || webCertModifyRequest === null) {
        throw new Error("Missing the required parameter 'webCertModifyRequest' when calling modifyWebCert");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/web_cert', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setEmergencyPassphrase operation.
     * @callback module:api/SecurityApi~setEmergencyPassphraseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set emergency passphrase
     * Sets passphrase which can be used to access the Onepanel REST API and emergency Onepanel GUI. May be invoked without credentials when no passphrase is set. 
     * @param {module:model/EmergencyPassphraseChangeRequest} emergencyPassphrase 
     * @param {module:api/SecurityApi~setEmergencyPassphraseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setEmergencyPassphrase = function(emergencyPassphrase, callback) {
      var postBody = emergencyPassphrase;

      // verify the required parameter 'emergencyPassphrase' is set
      if (emergencyPassphrase === undefined || emergencyPassphrase === null) {
        throw new Error("Missing the required parameter 'emergencyPassphrase' when calling setEmergencyPassphrase");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/emergency_passphrase', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
