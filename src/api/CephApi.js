/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$PANEL_HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 21.02.0-alpha15
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
    define(['ApiClient', 'model/BlockDevices', 'model/CephCluster', 'model/CephGlobalParams', 'model/CephManager', 'model/CephManagers', 'model/CephMonitor', 'model/CephMonitors', 'model/CephOsd', 'model/CephOsds', 'model/CephPool', 'model/CephPoolUsage', 'model/CephPools', 'model/CephStatus', 'model/CephUsage', 'model/DataUsage', 'model/Error', 'model/TaskId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BlockDevices'), require('../model/CephCluster'), require('../model/CephGlobalParams'), require('../model/CephManager'), require('../model/CephManagers'), require('../model/CephMonitor'), require('../model/CephMonitors'), require('../model/CephOsd'), require('../model/CephOsds'), require('../model/CephPool'), require('../model/CephPoolUsage'), require('../model/CephPools'), require('../model/CephStatus'), require('../model/CephUsage'), require('../model/DataUsage'), require('../model/Error'), require('../model/TaskId'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.CephApi = factory(root.Onepanel.ApiClient, root.Onepanel.BlockDevices, root.Onepanel.CephCluster, root.Onepanel.CephGlobalParams, root.Onepanel.CephManager, root.Onepanel.CephManagers, root.Onepanel.CephMonitor, root.Onepanel.CephMonitors, root.Onepanel.CephOsd, root.Onepanel.CephOsds, root.Onepanel.CephPool, root.Onepanel.CephPoolUsage, root.Onepanel.CephPools, root.Onepanel.CephStatus, root.Onepanel.CephUsage, root.Onepanel.DataUsage, root.Onepanel.Error, root.Onepanel.TaskId);
  }
}(this, function(ApiClient, BlockDevices, CephCluster, CephGlobalParams, CephManager, CephManagers, CephMonitor, CephMonitors, CephOsd, CephOsds, CephPool, CephPoolUsage, CephPools, CephStatus, CephUsage, DataUsage, Error, TaskId) {
  'use strict';

  /**
   * Ceph service.
   * @module api/CephApi
   * @version 21.02.0-alpha15
   */

  /**
   * Constructs a new CephApi. 
   * @alias module:api/CephApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCephManagers operation.
     * @callback module:api/CephApi~addCephManagersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add managers to ceph cluster
     * Deploys Ceph manager services on given hosts.
     * @param {module:model/CephManagers} cephManagers Object with a list of Ceph manager configurations.
     * @param {module:api/CephApi~addCephManagersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskId}
     */
    this.addCephManagers = function(cephManagers, callback) {
      var postBody = cephManagers;

      // verify the required parameter 'cephManagers' is set
      if (cephManagers === undefined || cephManagers === null) {
        throw new Error("Missing the required parameter 'cephManagers' when calling addCephManagers");
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
      var returnType = TaskId;

      return this.apiClient.callApi(
        '/provider/ceph/managers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCephMonitors operation.
     * @callback module:api/CephApi~addCephMonitorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add monitors to Ceph cluster
     * Deploys Ceph monitor services on given hosts.
     * @param {module:model/CephMonitors} cephMonitors List of Ceph monitor specifications.
     * @param {module:api/CephApi~addCephMonitorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskId}
     */
    this.addCephMonitors = function(cephMonitors, callback) {
      var postBody = cephMonitors;

      // verify the required parameter 'cephMonitors' is set
      if (cephMonitors === undefined || cephMonitors === null) {
        throw new Error("Missing the required parameter 'cephMonitors' when calling addCephMonitors");
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
      var returnType = TaskId;

      return this.apiClient.callApi(
        '/provider/ceph/monitors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCephOsds operation.
     * @callback module:api/CephApi~addCephOsdsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add OSDs to Ceph cluster
     * Deploys Ceph OSD services in the cluster.
     * @param {module:model/CephOsds} cephOsds List of OSD specifications.
     * @param {module:api/CephApi~addCephOsdsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskId}
     */
    this.addCephOsds = function(cephOsds, callback) {
      var postBody = cephOsds;

      // verify the required parameter 'cephOsds' is set
      if (cephOsds === undefined || cephOsds === null) {
        throw new Error("Missing the required parameter 'cephOsds' when calling addCephOsds");
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
      var returnType = TaskId;

      return this.apiClient.callApi(
        '/provider/ceph/osds', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configureCeph operation.
     * @callback module:api/CephApi~configureCephCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configure Ceph cluster
     * Configures Ceph services. Any services and pools specified in the request are deployed. This request IS NOT idempotent.
     * @param {module:model/CephCluster} cephCluster The Ceph cluster specification.
     * @param {module:api/CephApi~configureCephCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskId}
     */
    this.configureCeph = function(cephCluster, callback) {
      var postBody = cephCluster;

      // verify the required parameter 'cephCluster' is set
      if (cephCluster === undefined || cephCluster === null) {
        throw new Error("Missing the required parameter 'cephCluster' when calling configureCeph");
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
      var contentTypes = ['application/json', 'application/x-yaml'];
      var accepts = [];
      var returnType = TaskId;

      return this.apiClient.callApi(
        '/provider/ceph', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBlockDevices operation.
     * @callback module:api/CephApi~getBlockDevicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlockDevices} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block devices for Ceph OSD
     * Lists block devices available at given host. This list can be used to choose device to be formatted for use by Ceph Blockdevice OSD.
     * @param {String} host Host for which block devices should be returned.
     * @param {module:api/CephApi~getBlockDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlockDevices}
     */
    this.getBlockDevices = function(host, callback) {
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling getBlockDevices");
      }


      var pathParams = {
      };
      var queryParams = {
        'host': host
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BlockDevices;

      return this.apiClient.callApi(
        '/provider/ceph/preflight/block_devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephManager operation.
     * @callback module:api/CephApi~getCephManagerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephManager} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Ceph manager
     * Returns Ceph manager configuration.
     * @param {String} id Id of the Ceph manager to be described.
     * @param {module:api/CephApi~getCephManagerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephManager}
     */
    this.getCephManager = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCephManager");
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
      var returnType = CephManager;

      return this.apiClient.callApi(
        '/provider/ceph/managers/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephManagers operation.
     * @callback module:api/CephApi~getCephManagersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephManagers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Ceph managers
     * Returns object with a list of Ceph manager instances.
     * @param {module:api/CephApi~getCephManagersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephManagers}
     */
    this.getCephManagers = function(callback) {
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
      var returnType = CephManagers;

      return this.apiClient.callApi(
        '/provider/ceph/managers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephMonitor operation.
     * @callback module:api/CephApi~getCephMonitorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephMonitor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Ceph monitor
     * Returns details of a Ceph monitor instance.
     * @param {String} id Id of the Ceph monitor to describe.
     * @param {module:api/CephApi~getCephMonitorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephMonitor}
     */
    this.getCephMonitor = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCephMonitor");
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
      var returnType = CephMonitor;

      return this.apiClient.callApi(
        '/provider/ceph/monitors/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephMonitors operation.
     * @callback module:api/CephApi~getCephMonitorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephMonitors} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Ceph monitors
     * Returns object with a list of Ceph monitor instances.
     * @param {module:api/CephApi~getCephMonitorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephMonitors}
     */
    this.getCephMonitors = function(callback) {
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
      var returnType = CephMonitors;

      return this.apiClient.callApi(
        '/provider/ceph/monitors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephOsd operation.
     * @callback module:api/CephApi~getCephOsdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephOsd} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Ceph OSD
     * Returns details of a Ceph OSD instance.
     * @param {String} id Id of the Ceph OSD to describe.
     * @param {module:api/CephApi~getCephOsdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephOsd}
     */
    this.getCephOsd = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCephOsd");
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
      var returnType = CephOsd;

      return this.apiClient.callApi(
        '/provider/ceph/osds/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephOsdUsage operation.
     * @callback module:api/CephApi~getCephOsdUsageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get storage space usage details for specific OSD
     * Returns storage space usage statistics of given Ceph OSD.
     * @param {String} id The id of the OSD for usage check.
     * @param {module:api/CephApi~getCephOsdUsageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataUsage}
     */
    this.getCephOsdUsage = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCephOsdUsage");
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
      var returnType = DataUsage;

      return this.apiClient.callApi(
        '/provider/ceph/osds/{id}/usage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephOsds operation.
     * @callback module:api/CephApi~getCephOsdsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephOsds} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Ceph OSDs list
     * Return list of Ceph OSD configurations. 
     * @param {module:api/CephApi~getCephOsdsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephOsds}
     */
    this.getCephOsds = function(callback) {
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
      var returnType = CephOsds;

      return this.apiClient.callApi(
        '/provider/ceph/osds', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephParams operation.
     * @callback module:api/CephApi~getCephParamsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephGlobalParams} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get global Ceph params
     * Returns settings global for the Ceph cluster.
     * @param {module:api/CephApi~getCephParamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephGlobalParams}
     */
    this.getCephParams = function(callback) {
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
      var returnType = CephGlobalParams;

      return this.apiClient.callApi(
        '/provider/ceph', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephPool operation.
     * @callback module:api/CephApi~getCephPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephPool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of a Ceph pool
     * Returns object describng single Ceph pool specified by name.
     * @param {String} name The name of the pool to describe.
     * @param {module:api/CephApi~getCephPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephPool}
     */
    this.getCephPool = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getCephPool");
      }


      var pathParams = {
        'name': name
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
      var returnType = CephPool;

      return this.apiClient.callApi(
        '/provider/ceph/pools/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephPoolUsage operation.
     * @callback module:api/CephApi~getCephPoolUsageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephPoolUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get storage space usage details for specific pool
     * Returns storage space usage statistics of given Ceph pool.
     * @param {String} name The name of the pool for usage check.
     * @param {module:api/CephApi~getCephPoolUsageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephPoolUsage}
     */
    this.getCephPoolUsage = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getCephPoolUsage");
      }


      var pathParams = {
        'name': name
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
      var returnType = CephPoolUsage;

      return this.apiClient.callApi(
        '/provider/ceph/pools/{name}/usage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephPools operation.
     * @callback module:api/CephApi~getCephPoolsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephPools} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Ceph pools
     * Returns object containing list of Ceph pool details.
     * @param {module:api/CephApi~getCephPoolsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephPools}
     */
    this.getCephPools = function(callback) {
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
      var returnType = CephPools;

      return this.apiClient.callApi(
        '/provider/ceph/pools', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephStatus operation.
     * @callback module:api/CephApi~getCephStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Ceph cluster health
     * Returns Ceph cluster health.
     * @param {module:api/CephApi~getCephStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephStatus}
     */
    this.getCephStatus = function(callback) {
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
      var returnType = CephStatus;

      return this.apiClient.callApi(
        '/provider/ceph/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCephUsage operation.
     * @callback module:api/CephApi~getCephUsageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CephUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Ceph storage space usage.
     * Returns summary of storage space usage in the Ceph cluster.
     * @param {module:api/CephApi~getCephUsageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CephUsage}
     */
    this.getCephUsage = function(callback) {
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
      var returnType = CephUsage;

      return this.apiClient.callApi(
        '/provider/ceph/usage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyCephPool operation.
     * @callback module:api/CephApi~modifyCephPoolCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify pool params
     * Modifies the pool redundancy settings.
     * @param {String} name The name of the pool to describe.
     * @param {module:model/CephPool} poolModifyRequest 
     * @param {module:api/CephApi~modifyCephPoolCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.modifyCephPool = function(name, poolModifyRequest, callback) {
      var postBody = poolModifyRequest;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling modifyCephPool");
      }

      // verify the required parameter 'poolModifyRequest' is set
      if (poolModifyRequest === undefined || poolModifyRequest === null) {
        throw new Error("Missing the required parameter 'poolModifyRequest' when calling modifyCephPool");
      }


      var pathParams = {
        'name': name
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
        '/provider/ceph/pools/{name}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
