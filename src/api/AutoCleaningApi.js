/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.0-alpha6
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
    define(['ApiClient', 'model/Error', 'model/InlineResponse202', 'model/SpaceAutoCleaningConfiguration', 'model/SpaceAutoCleaningReport', 'model/SpaceAutoCleaningReports', 'model/SpaceAutoCleaningStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/InlineResponse202'), require('../model/SpaceAutoCleaningConfiguration'), require('../model/SpaceAutoCleaningReport'), require('../model/SpaceAutoCleaningReports'), require('../model/SpaceAutoCleaningStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.AutoCleaningApi = factory(root.Onepanel.ApiClient, root.Onepanel.Error, root.Onepanel.InlineResponse202, root.Onepanel.SpaceAutoCleaningConfiguration, root.Onepanel.SpaceAutoCleaningReport, root.Onepanel.SpaceAutoCleaningReports, root.Onepanel.SpaceAutoCleaningStatus);
  }
}(this, function(ApiClient, Error, InlineResponse202, SpaceAutoCleaningConfiguration, SpaceAutoCleaningReport, SpaceAutoCleaningReports, SpaceAutoCleaningStatus) {
  'use strict';

  /**
   * AutoCleaning service.
   * @module api/AutoCleaningApi
   * @version 21.02.0-alpha6
   */

  /**
   * Constructs a new AutoCleaningApi. 
   * @alias module:api/AutoCleaningApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelAutoCleaning operation.
     * @callback module:api/AutoCleaningApi~cancelAutoCleaningCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel space auto-cleaning
     * Cancel current run of auto-cleaning mechanism for given space.
     * @param {String} id The Id of a space.
     * @param {module:api/AutoCleaningApi~cancelAutoCleaningCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.cancelAutoCleaning = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelAutoCleaning");
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
        '/provider/spaces/{id}/auto-cleaning/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configureSpaceAutoCleaning operation.
     * @callback module:api/AutoCleaningApi~configureSpaceAutoCleaningCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configure space auto-cleaning mechanism
     * Configures space auto-cleaning mechanism in the space. 
     * @param {String} id The Id of a space.
     * @param {module:model/SpaceAutoCleaningConfiguration} spaceAutoCleaningConfiguration New configuration of space auto-cleaning mechanism. 
     * @param {module:api/AutoCleaningApi~configureSpaceAutoCleaningCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.configureSpaceAutoCleaning = function(id, spaceAutoCleaningConfiguration, callback) {
      var postBody = spaceAutoCleaningConfiguration;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling configureSpaceAutoCleaning");
      }

      // verify the required parameter 'spaceAutoCleaningConfiguration' is set
      if (spaceAutoCleaningConfiguration === undefined || spaceAutoCleaningConfiguration === null) {
        throw new Error("Missing the required parameter 'spaceAutoCleaningConfiguration' when calling configureSpaceAutoCleaning");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/auto-cleaning/configuration', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderSpaceAutoCleaningReport operation.
     * @callback module:api/AutoCleaningApi~getProviderSpaceAutoCleaningReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceAutoCleaningReport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the report from a space auto-cleaning run
     * Returns the details of a specific auto-cleaning run. 
     * @param {String} id The Id of a space.
     * @param {String} reportId The Id of an auto-cleaning report.
     * @param {module:api/AutoCleaningApi~getProviderSpaceAutoCleaningReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpaceAutoCleaningReport}
     */
    this.getProviderSpaceAutoCleaningReport = function(id, reportId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProviderSpaceAutoCleaningReport");
      }

      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling getProviderSpaceAutoCleaningReport");
      }


      var pathParams = {
        'id': id,
        'report_id': reportId
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
      var returnType = SpaceAutoCleaningReport;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/auto-cleaning/reports/{report_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderSpaceAutoCleaningReports operation.
     * @callback module:api/AutoCleaningApi~getProviderSpaceAutoCleaningReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceAutoCleaningReports} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Ids of of the space auto-cleaning reports
     * Returns the list of Ids of space auto-cleaning reports. The list is sorted descending by start time of an auto-cleaning run (the newest report is first). 
     * @param {String} id The Id of a space.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Allows to skip N first report Ids. (default to 0)
     * @param {Number} opts.limit Allows to limit the number of returned report Ids up to N last reports. By default, all report Ids will be returned. 
     * @param {String} opts.index Allows to list the report Ids starting from the specific report. 
     * @param {module:api/AutoCleaningApi~getProviderSpaceAutoCleaningReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpaceAutoCleaningReports}
     */
    this.getProviderSpaceAutoCleaningReports = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProviderSpaceAutoCleaningReports");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'index': opts['index']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SpaceAutoCleaningReports;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/auto-cleaning/reports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderSpaceAutoCleaningStatus operation.
     * @callback module:api/AutoCleaningApi~getProviderSpaceAutoCleaningStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceAutoCleaningStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status of space auto-cleaning mechanism
     * Returns status of current process of auto-cleaning for the space. 
     * @param {String} id The Id of a space.
     * @param {module:api/AutoCleaningApi~getProviderSpaceAutoCleaningStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpaceAutoCleaningStatus}
     */
    this.getProviderSpaceAutoCleaningStatus = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProviderSpaceAutoCleaningStatus");
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
      var returnType = SpaceAutoCleaningStatus;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/auto-cleaning/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSpaceAutoCleaningConfiguration operation.
     * @callback module:api/AutoCleaningApi~getSpaceAutoCleaningConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceAutoCleaningConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get space auto-cleaning configuration
     * Returns configuration of auto-cleaning mechanism in the space specified by space Id in the path. 
     * @param {String} id The Id of a space of which auto-cleaning configuration should be returned.
     * @param {module:api/AutoCleaningApi~getSpaceAutoCleaningConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpaceAutoCleaningConfiguration}
     */
    this.getSpaceAutoCleaningConfiguration = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSpaceAutoCleaningConfiguration");
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
      var returnType = SpaceAutoCleaningConfiguration;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/auto-cleaning/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the triggerAutoCleaning operation.
     * @callback module:api/AutoCleaningApi~triggerAutoCleaningCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse202} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trigger space auto-cleaning
     * Trigger one run of auto-cleaning mechanism for given space.
     * @param {String} id The Id of a space.
     * @param {module:api/AutoCleaningApi~triggerAutoCleaningCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse202}
     */
    this.triggerAutoCleaning = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling triggerAutoCleaning");
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
      var returnType = InlineResponse202;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/auto-cleaning/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
