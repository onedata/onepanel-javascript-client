/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is grouped into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in `X-Auth-Token` or `Authorization: Bearer` header. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H \"X-Auth-Token: $TOKEN\" [...] curl -H \"Authorization: Bearer $TOKEN\" [...] curl -H \"Macaroon: $TOKEN\" [...]   # DEPRECATED ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 20.02.9
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
    define(['ApiClient', 'model/ClusterIps', 'model/Error', 'model/ManagerHosts', 'model/ModifyClusterIps', 'model/ProviderConfiguration', 'model/ProviderConfigurationDetails', 'model/ServiceDatabases', 'model/ServiceHosts', 'model/ServiceStatus', 'model/ServiceStatusHost', 'model/TaskId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClusterIps'), require('../model/Error'), require('../model/ManagerHosts'), require('../model/ModifyClusterIps'), require('../model/ProviderConfiguration'), require('../model/ProviderConfigurationDetails'), require('../model/ServiceDatabases'), require('../model/ServiceHosts'), require('../model/ServiceStatus'), require('../model/ServiceStatusHost'), require('../model/TaskId'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.OneproviderClusterApi = factory(root.Onepanel.ApiClient, root.Onepanel.ClusterIps, root.Onepanel.Error, root.Onepanel.ManagerHosts, root.Onepanel.ModifyClusterIps, root.Onepanel.ProviderConfiguration, root.Onepanel.ProviderConfigurationDetails, root.Onepanel.ServiceDatabases, root.Onepanel.ServiceHosts, root.Onepanel.ServiceStatus, root.Onepanel.ServiceStatusHost, root.Onepanel.TaskId);
  }
}(this, function(ApiClient, ClusterIps, Error, ManagerHosts, ModifyClusterIps, ProviderConfiguration, ProviderConfigurationDetails, ServiceDatabases, ServiceHosts, ServiceStatus, ServiceStatusHost, TaskId) {
  'use strict';

  /**
   * OneproviderCluster service.
   * @module api/OneproviderClusterApi
   * @version 20.02.9
   */

  /**
   * Constructs a new OneproviderClusterApi. 
   * @alias module:api/OneproviderClusterApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addProviderDatabases operation.
     * @callback module:api/OneproviderClusterApi~addProviderDatabasesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy provider databases
     * Deploys a database service on provided hosts.
     * @param {module:model/ServiceDatabases} serviceHosts The service hosts configuration where databases should be deployed. 
     * @param {module:api/OneproviderClusterApi~addProviderDatabasesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskId}
     */
    this.addProviderDatabases = function(serviceHosts, callback) {
      var postBody = serviceHosts;

      // verify the required parameter 'serviceHosts' is set
      if (serviceHosts === undefined || serviceHosts === null) {
        throw new Error("Missing the required parameter 'serviceHosts' when calling addProviderDatabases");
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
        '/provider/databases', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addProviderManagers operation.
     * @callback module:api/OneproviderClusterApi~addProviderManagersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add provider cluster managers
     * Deploys a cluster manager service on provided hosts.
     * @param {module:model/ManagerHosts} managerHosts The cluster manager service hosts configuration.
     * @param {module:api/OneproviderClusterApi~addProviderManagersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskId}
     */
    this.addProviderManagers = function(managerHosts, callback) {
      var postBody = managerHosts;

      // verify the required parameter 'managerHosts' is set
      if (managerHosts === undefined || managerHosts === null) {
        throw new Error("Missing the required parameter 'managerHosts' when calling addProviderManagers");
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
        '/provider/managers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addProviderWorkers operation.
     * @callback module:api/OneproviderClusterApi~addProviderWorkersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add provider cluster workers
     * Deploys cluster worker services on provided hosts.
     * @param {module:model/ServiceHosts} serviceHosts The service hosts configuration where workers should be deployed. 
     * @param {module:api/OneproviderClusterApi~addProviderWorkersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskId}
     */
    this.addProviderWorkers = function(serviceHosts, callback) {
      var postBody = serviceHosts;

      // verify the required parameter 'serviceHosts' is set
      if (serviceHosts === undefined || serviceHosts === null) {
        throw new Error("Missing the required parameter 'serviceHosts' when calling addProviderWorkers");
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
        '/provider/workers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configureProvider operation.
     * @callback module:api/OneproviderClusterApi~configureProviderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configure provider deployment
     * Configures and starts provider services, such as database, cluster manager and cluster worker. Depending on the configuration, sets up provider storage and registers in the zone. This request can be executed unauthorized as long as there are no admin users. 
     * @param {module:model/ProviderConfiguration} providerConfiguration The provider configuration description.
     * @param {module:api/OneproviderClusterApi~configureProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskId}
     */
    this.configureProvider = function(providerConfiguration, callback) {
      var postBody = providerConfiguration;

      // verify the required parameter 'providerConfiguration' is set
      if (providerConfiguration === undefined || providerConfiguration === null) {
        throw new Error("Missing the required parameter 'providerConfiguration' when calling configureProvider");
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
        '/provider/configuration', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderClusterIps operation.
     * @callback module:api/OneproviderClusterApi~getProviderClusterIpsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterIps} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster nodes IPs
     * Returns IPs of nodes in provider cluster.
     * @param {module:api/OneproviderClusterApi~getProviderClusterIpsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClusterIps}
     */
    this.getProviderClusterIps = function(callback) {
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
      var returnType = ClusterIps;

      return this.apiClient.callApi(
        '/provider/cluster_ips', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderConfiguration operation.
     * @callback module:api/OneproviderClusterApi~getProviderConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProviderConfigurationDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster configuration
     * Returns the provider cluster configuration.
     * @param {module:api/OneproviderClusterApi~getProviderConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProviderConfigurationDetails}
     */
    this.getProviderConfiguration = function(callback) {
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
      var returnType = ProviderConfigurationDetails;

      return this.apiClient.callApi(
        '/provider/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderDatabaseStatus operation.
     * @callback module:api/OneproviderClusterApi~getProviderDatabaseStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatusHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider database status
     * Returns status of database service on the selected host.
     * @param {String} host The name of a host for which database service status should be returned. 
     * @param {module:api/OneproviderClusterApi~getProviderDatabaseStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatusHost}
     */
    this.getProviderDatabaseStatus = function(host, callback) {
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling getProviderDatabaseStatus");
      }


      var pathParams = {
        'host': host
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
      var returnType = ServiceStatusHost;

      return this.apiClient.callApi(
        '/provider/databases/{host}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderDatabasesStatus operation.
     * @callback module:api/OneproviderClusterApi~getProviderDatabasesStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider databases status
     * Returns status of database service on each host where it has been deployed. 
     * @param {module:api/OneproviderClusterApi~getProviderDatabasesStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatus}
     */
    this.getProviderDatabasesStatus = function(callback) {
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
      var returnType = ServiceStatus;

      return this.apiClient.callApi(
        '/provider/databases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderManagerStatus operation.
     * @callback module:api/OneproviderClusterApi~getProviderManagerStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatusHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster manager status
     * Returns status of cluster manager service on the selected host.
     * @param {String} host The name of a host for which cluster manager service status should be returned. 
     * @param {module:api/OneproviderClusterApi~getProviderManagerStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatusHost}
     */
    this.getProviderManagerStatus = function(host, callback) {
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling getProviderManagerStatus");
      }


      var pathParams = {
        'host': host
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
      var returnType = ServiceStatusHost;

      return this.apiClient.callApi(
        '/provider/managers/{host}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderManagersStatus operation.
     * @callback module:api/OneproviderClusterApi~getProviderManagersStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster managers status
     * Returns status of cluster manager service on each host where it has been deployed. 
     * @param {module:api/OneproviderClusterApi~getProviderManagersStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatus}
     */
    this.getProviderManagersStatus = function(callback) {
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
      var returnType = ServiceStatus;

      return this.apiClient.callApi(
        '/provider/managers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderNagiosReport operation.
     * @callback module:api/OneproviderClusterApi~getProviderNagiosReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider nagios report
     * Returns the provider nagios report.
     * @param {module:api/OneproviderClusterApi~getProviderNagiosReportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getProviderNagiosReport = function(callback) {
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
      var accepts = ['text/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/nagios', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderWorkerStatus operation.
     * @callback module:api/OneproviderClusterApi~getProviderWorkerStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatusHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster worker status
     * Returns status of cluster worker service on the selected host.
     * @param {String} host The name of a host for which cluster worker service status should be returned. 
     * @param {module:api/OneproviderClusterApi~getProviderWorkerStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatusHost}
     */
    this.getProviderWorkerStatus = function(host, callback) {
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling getProviderWorkerStatus");
      }


      var pathParams = {
        'host': host
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
      var returnType = ServiceStatusHost;

      return this.apiClient.callApi(
        '/provider/workers/{host}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderWorkersStatus operation.
     * @callback module:api/OneproviderClusterApi~getProviderWorkersStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster workers status
     * Returns status of cluster worker service on each host where it has been deployed. 
     * @param {module:api/OneproviderClusterApi~getProviderWorkersStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatus}
     */
    this.getProviderWorkersStatus = function(callback) {
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
      var returnType = ServiceStatus;

      return this.apiClient.callApi(
        '/provider/workers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyProviderClusterIps operation.
     * @callback module:api/OneproviderClusterApi~modifyProviderClusterIpsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set external IPs of nodes in application config
     * Informs cluster nodes about external IPs which can be used to access them by other providers. 
     * @param {module:model/ModifyClusterIps} clusterIps The provider configuration description.
     * @param {module:api/OneproviderClusterApi~modifyProviderClusterIpsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.modifyProviderClusterIps = function(clusterIps, callback) {
      var postBody = clusterIps;

      // verify the required parameter 'clusterIps' is set
      if (clusterIps === undefined || clusterIps === null) {
        throw new Error("Missing the required parameter 'clusterIps' when calling modifyProviderClusterIps");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/cluster_ips', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopProviderDatabase operation.
     * @callback module:api/OneproviderClusterApi~startStopProviderDatabaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop provider database
     * Starts or stops database service on the selected hosts in the local deployment. 
     * @param {String} host The name of a host for which database service status should be changed. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the database service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OneproviderClusterApi~startStopProviderDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopProviderDatabase = function(host, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling startStopProviderDatabase");
      }


      var pathParams = {
        'host': host
      };
      var queryParams = {
        'started': opts['started']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/databases/{host}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopProviderDatabases operation.
     * @callback module:api/OneproviderClusterApi~startStopProviderDatabasesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop provider databases
     * Starts or stops database service on all hosts in the local deployment. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the database service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OneproviderClusterApi~startStopProviderDatabasesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopProviderDatabases = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'started': opts['started']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/databases', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopProviderManager operation.
     * @callback module:api/OneproviderClusterApi~startStopProviderManagerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop provider cluster manager
     * Starts or stops cluster manager service on the selected hosts in the local deployment. 
     * @param {String} host The name of a host for which cluster manager service status should be changed. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OneproviderClusterApi~startStopProviderManagerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopProviderManager = function(host, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling startStopProviderManager");
      }


      var pathParams = {
        'host': host
      };
      var queryParams = {
        'started': opts['started']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/managers/{host}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopProviderManagers operation.
     * @callback module:api/OneproviderClusterApi~startStopProviderManagersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop provider cluster managers
     * Starts or stops cluster manager service on all hosts in the local deployment. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OneproviderClusterApi~startStopProviderManagersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopProviderManagers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'started': opts['started']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/managers', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopProviderWorker operation.
     * @callback module:api/OneproviderClusterApi~startStopProviderWorkerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop provider cluster worker
     * Starts or stops cluster worker service on the selected host in the local deployment. 
     * @param {String} host The name of a host for which cluster worker service status should be changed. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OneproviderClusterApi~startStopProviderWorkerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopProviderWorker = function(host, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling startStopProviderWorker");
      }


      var pathParams = {
        'host': host
      };
      var queryParams = {
        'started': opts['started']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/workers/{host}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopProviderWorkers operation.
     * @callback module:api/OneproviderClusterApi~startStopProviderWorkersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop provider cluster workers
     * Starts or stops cluster worker service on all hosts in the local deployment. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OneproviderClusterApi~startStopProviderWorkersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopProviderWorkers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'started': opts['started']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key1', 'api_key2', 'basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/workers', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
