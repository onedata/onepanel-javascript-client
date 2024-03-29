/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$PANEL_HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.4
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
    define(['ApiClient', 'model/AutoStorageImportInfo', 'model/AutoStorageImportStats', 'model/Error', 'model/ManualStorageImportExample'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AutoStorageImportInfo'), require('../model/AutoStorageImportStats'), require('../model/Error'), require('../model/ManualStorageImportExample'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.StorageImportApi = factory(root.Onepanel.ApiClient, root.Onepanel.AutoStorageImportInfo, root.Onepanel.AutoStorageImportStats, root.Onepanel.Error, root.Onepanel.ManualStorageImportExample);
  }
}(this, function(ApiClient, AutoStorageImportInfo, AutoStorageImportStats, Error, ManualStorageImportExample) {
  'use strict';

  /**
   * StorageImport service.
   * @module api/StorageImportApi
   * @version 21.02.4
   */

  /**
   * Constructs a new StorageImportApi. 
   * @alias module:api/StorageImportApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the forceStartAutoStorageImportScan operation.
     * @callback module:api/StorageImportApi~forceStartAutoStorageImportScanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Force start auto storage import scan
     * Forcefully starts scan of auto storage import mechanism in given space.
     * @param {String} id The Id of a space.
     * @param {module:api/StorageImportApi~forceStartAutoStorageImportScanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.forceStartAutoStorageImportScan = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling forceStartAutoStorageImportScan");
      }


      var pathParams = {
        'id': id
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
        '/provider/spaces/{id}/storage-import/auto/force-start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the forceStopAutoStorageImportScan operation.
     * @callback module:api/StorageImportApi~forceStopAutoStorageImportScanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Force stop auto storage import scan
     * Forcefully stops current scan of auto storage import mechanism in given space.
     * @param {String} id The Id of a space.
     * @param {module:api/StorageImportApi~forceStopAutoStorageImportScanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.forceStopAutoStorageImportScan = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling forceStopAutoStorageImportScan");
      }


      var pathParams = {
        'id': id
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
        '/provider/spaces/{id}/storage-import/auto/force-stop', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutoStorageImportInfo operation.
     * @callback module:api/StorageImportApi~getAutoStorageImportInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AutoStorageImportInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about auto storage import scan
     * Returns information about current or last finished auto storage import scan.
     * @param {String} id The Id of a space for which storage import stats should be returned.
     * @param {module:api/StorageImportApi~getAutoStorageImportInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AutoStorageImportInfo}
     */
    this.getAutoStorageImportInfo = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAutoStorageImportInfo");
      }


      var pathParams = {
        'id': id
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
      var returnType = AutoStorageImportInfo;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/storage-import/auto/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutoStorageImportStats operation.
     * @callback module:api/StorageImportApi~getAutoStorageImportStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AutoStorageImportStats} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statistics of auto storage import mechanism
     * Returns requested statistics of auto storage import mechanism for given space on this provider. 
     * @param {String} id The Id of a space for which storage import stats should be returned.
     * @param {module:model/String} period Predefined time period for which the statistics should be fetched.
     * @param {String} metrics Specify which statistic metrics should be returned - strings delimited with comma. Accepted values are: &#x60;queueLength&#x60;, &#x60;createdFiles&#x60;, &#x60;modifiedFiles&#x60;, &#x60;deletedFiles&#x60; 
     * @param {module:api/StorageImportApi~getAutoStorageImportStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AutoStorageImportStats}
     */
    this.getAutoStorageImportStats = function(id, period, metrics, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAutoStorageImportStats");
      }

      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling getAutoStorageImportStats");
      }

      // verify the required parameter 'metrics' is set
      if (metrics === undefined || metrics === null) {
        throw new Error("Missing the required parameter 'metrics' when calling getAutoStorageImportStats");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'period': period,
        'metrics': metrics
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AutoStorageImportStats;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/storage-import/auto/stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getManualStorageImportExample operation.
     * @callback module:api/StorageImportApi~getManualStorageImportExampleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManualStorageImportExample} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get manual storage import example
     * Returns example &#x60;curl&#x60; command that can be executed to manually import (register) file from storage.  The command is filled with correct host of the Oneprovider, space and storage ids. In order to execute the command, user must set 3 variables:  * &#x60;TOKEN&#x60; - Onedata access token.  * &#x60;STORAGE_FILE_ID&#x60; - Identifier of the file on storage, relevant for given storage backend:    * path on POSIX-compatible or canonical object storages, e.g. /dir/file.txt,    * URL on HTTP based storages, e.g. https://www.example.org/data/21/run123.tar.  * &#x60;DESTINATION_PATH&#x60; - An absolute path in space where file should be created.  For more info please read: https://onedata.org/#/home/api/stable/oneprovider?anchor&#x3D;tag/File-registration 
     * @param {String} id The Id of a space for which the example command should be generated.
     * @param {module:api/StorageImportApi~getManualStorageImportExampleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManualStorageImportExample}
     */
    this.getManualStorageImportExample = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getManualStorageImportExample");
      }


      var pathParams = {
        'id': id
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
      var returnType = ManualStorageImportExample;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/storage-import/manual/example', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
