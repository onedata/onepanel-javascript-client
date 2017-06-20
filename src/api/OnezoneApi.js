/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://www.onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  Onepanel supports only HTTP basic authentication, i.e. using `username` and `password`, which were set when creating users.  Onepanel users can have 2 roles:   * **admin** - Onepanel administrator, there can be multiple administrators     and all have equal rights in terms of Onedata deployment management,   * **regular** - this role allows manual creation of user accounts, using     which users can login to Onezone service using HTTP Basic authentication     without OpenID. This role makes sense only on Onepanel which manages     Onezone deployment.  The first user account which is created in Onepanel is always an `admin` account.  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Create new user** ```bash curl -X POST -k -vvv -H \"content-type: application/json\" \\ -d '{\"username\": \"admin\", \"password\": \"Password1\", \"userRole\": \"admin\"}' \\ https://172.17.0.6:9443/api/v3/onepanel/users ```  **Add storage resource to provider** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 3.0.0-rc15
 * Contact: info@onedata.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/ManagerHosts', 'model/ServiceDatabases', 'model/ServiceError', 'model/ServiceHosts', 'model/ServiceStatus', 'model/ServiceStatusHost', 'model/ZoneConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/ManagerHosts'), require('../model/ServiceDatabases'), require('../model/ServiceError'), require('../model/ServiceHosts'), require('../model/ServiceStatus'), require('../model/ServiceStatusHost'), require('../model/ZoneConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.OnezoneApi = factory(root.Onepanel.ApiClient, root.Onepanel.Error, root.Onepanel.ManagerHosts, root.Onepanel.ServiceDatabases, root.Onepanel.ServiceError, root.Onepanel.ServiceHosts, root.Onepanel.ServiceStatus, root.Onepanel.ServiceStatusHost, root.Onepanel.ZoneConfiguration);
  }
}(this, function(ApiClient, Error, ManagerHosts, ServiceDatabases, ServiceError, ServiceHosts, ServiceStatus, ServiceStatusHost, ZoneConfiguration) {
  'use strict';

  /**
   * Onezone service.
   * @module api/OnezoneApi
   * @version 3.0.0-rc15
   */

  /**
   * Constructs a new OnezoneApi. 
   * @alias module:api/OnezoneApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addZoneDatabases operation.
     * @callback module:api/OnezoneApi~addZoneDatabasesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add zone databases
     * Deploys a database service on provided hosts.
     * @param {module:model/ServiceDatabases} serviceHosts The service hosts configuration where databases should be deployed. 
     * @param {module:api/OnezoneApi~addZoneDatabasesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addZoneDatabases = function(serviceHosts, callback) {
      var postBody = serviceHosts;

      // verify the required parameter 'serviceHosts' is set
      if (serviceHosts === undefined || serviceHosts === null) {
        throw new Error("Missing the required parameter 'serviceHosts' when calling addZoneDatabases");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/databases', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addZoneManagers operation.
     * @callback module:api/OnezoneApi~addZoneManagersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add zone cluster managers
     * Deploys a cluster manager service on provided hosts.
     * @param {module:model/ManagerHosts} managerHosts The hosts specification where cluster managers should be deployed. 
     * @param {module:api/OnezoneApi~addZoneManagersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addZoneManagers = function(managerHosts, callback) {
      var postBody = managerHosts;

      // verify the required parameter 'managerHosts' is set
      if (managerHosts === undefined || managerHosts === null) {
        throw new Error("Missing the required parameter 'managerHosts' when calling addZoneManagers");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/managers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addZoneWorkers operation.
     * @callback module:api/OnezoneApi~addZoneWorkersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add zone cluster workers
     * Deploys a cluster worker service on provided hosts.
     * @param {module:model/ServiceHosts} serviceHosts The hosts specification where the workers should be deployed.
     * @param {module:api/OnezoneApi~addZoneWorkersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addZoneWorkers = function(serviceHosts, callback) {
      var postBody = serviceHosts;

      // verify the required parameter 'serviceHosts' is set
      if (serviceHosts === undefined || serviceHosts === null) {
        throw new Error("Missing the required parameter 'serviceHosts' when calling addZoneWorkers");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/workers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configureZone operation.
     * @callback module:api/OnezoneApi~configureZoneCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configure zone deployment
     * Configures and starts zone services, such as database, cluster manager and cluster worker. This request can be executed by unauthorized usersas long as there are no  admin users in the system. 
     * @param {module:model/ZoneConfiguration} zoneConfiguration The zone configuration description.
     * @param {module:api/OnezoneApi~configureZoneCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.configureZone = function(zoneConfiguration, callback) {
      var postBody = zoneConfiguration;

      // verify the required parameter 'zoneConfiguration' is set
      if (zoneConfiguration === undefined || zoneConfiguration === null) {
        throw new Error("Missing the required parameter 'zoneConfiguration' when calling configureZone");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json', 'application/x-yaml'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/configuration', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneConfiguration operation.
     * @callback module:api/OnezoneApi~getZoneConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ZoneConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get zone cluster configuration
     * Returns the zone cluster configuration.
     * @param {module:api/OnezoneApi~getZoneConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ZoneConfiguration}
     */
    this.getZoneConfiguration = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ZoneConfiguration;

      return this.apiClient.callApi(
        '/zone/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneDatabaseStatus operation.
     * @callback module:api/OnezoneApi~getZoneDatabaseStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatusHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get zone database status
     * Returns status of database service on the selected host.
     * @param {String} host The name of a host for which database service status should be returned. 
     * @param {module:api/OnezoneApi~getZoneDatabaseStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatusHost}
     */
    this.getZoneDatabaseStatus = function(host, callback) {
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling getZoneDatabaseStatus");
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ServiceStatusHost;

      return this.apiClient.callApi(
        '/zone/databases/{host}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneDatabasesStatus operation.
     * @callback module:api/OnezoneApi~getZoneDatabasesStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get zone databases status
     * Returns status of database service on each host where it has been deployed. 
     * @param {module:api/OnezoneApi~getZoneDatabasesStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatus}
     */
    this.getZoneDatabasesStatus = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ServiceStatus;

      return this.apiClient.callApi(
        '/zone/databases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneManagerStatus operation.
     * @callback module:api/OnezoneApi~getZoneManagerStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatusHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get zone cluster manager status
     * Returns status of cluster manager service on the selected host.
     * @param {String} host The name of a host for which cluster manager service status should be  returned. 
     * @param {module:api/OnezoneApi~getZoneManagerStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatusHost}
     */
    this.getZoneManagerStatus = function(host, callback) {
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling getZoneManagerStatus");
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ServiceStatusHost;

      return this.apiClient.callApi(
        '/zone/managers/{host}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneManagersStatus operation.
     * @callback module:api/OnezoneApi~getZoneManagersStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get zone cluster managers status
     * Returns status of cluster manager service on each host where it has been  eployed. 
     * @param {module:api/OnezoneApi~getZoneManagersStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatus}
     */
    this.getZoneManagersStatus = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ServiceStatus;

      return this.apiClient.callApi(
        '/zone/managers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneNagiosReport operation.
     * @callback module:api/OnezoneApi~getZoneNagiosReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get zone nagios report
     * Returns the zone nagios report.
     * @param {module:api/OnezoneApi~getZoneNagiosReportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getZoneNagiosReport = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['text/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/nagios', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneWorkerStatus operation.
     * @callback module:api/OnezoneApi~getZoneWorkerStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatusHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get zone cluster worker status
     * Returns status of cluster worker service on the selected host.
     * @param {String} host The name of a host for which cluster worker service status should be returned. 
     * @param {module:api/OnezoneApi~getZoneWorkerStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatusHost}
     */
    this.getZoneWorkerStatus = function(host, callback) {
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling getZoneWorkerStatus");
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ServiceStatusHost;

      return this.apiClient.callApi(
        '/zone/workers/{host}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoneWorkersStatus operation.
     * @callback module:api/OnezoneApi~getZoneWorkersStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get zone cluster workers status
     * Returns status of cluster worker service on each host where it has been deployed. 
     * @param {module:api/OnezoneApi~getZoneWorkersStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceStatus}
     */
    this.getZoneWorkersStatus = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ServiceStatus;

      return this.apiClient.callApi(
        '/zone/workers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopZoneDatabases operation.
     * @callback module:api/OnezoneApi~startStopZoneDatabasesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop zone databases
     * Starts or stops database service on all hosts in the local deployment. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the database service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OnezoneApi~startStopZoneDatabasesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopZoneDatabases = function(opts, callback) {
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/databases', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopZoneDatabasesHost operation.
     * @callback module:api/OnezoneApi~startStopZoneDatabasesHostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop zone database
     * Starts or stops database service on the selected hosts in the local  deployment. 
     * @param {String} host The name of a host for which database service status should be changed. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the database service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OnezoneApi~startStopZoneDatabasesHostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopZoneDatabasesHost = function(host, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling startStopZoneDatabasesHost");
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/databases/{host}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopZoneManager operation.
     * @callback module:api/OnezoneApi~startStopZoneManagerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop zone cluster manager
     * Starts or stops cluster manager service on the selected hosts in the local  deployment. 
     * @param {String} host The name of a host for which cluster manager service status should be  changed. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the cluster manager service. The service  will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OnezoneApi~startStopZoneManagerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopZoneManager = function(host, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling startStopZoneManager");
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/managers/{host}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopZoneManagers operation.
     * @callback module:api/OnezoneApi~startStopZoneManagersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop zone cluster managers
     * Starts or stops cluster manager service on all hosts in the local deployment. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the cluster manager service. The service  will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OnezoneApi~startStopZoneManagersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopZoneManagers = function(opts, callback) {
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/managers', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopZoneWorker operation.
     * @callback module:api/OnezoneApi~startStopZoneWorkerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop zone cluster worker
     * Starts or stops cluster worker service on the selected hosts in the local  deployment. 
     * @param {String} host The name of a host for which cluster worker service status should be  changed. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OnezoneApi~startStopZoneWorkerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopZoneWorker = function(host, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'host' is set
      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling startStopZoneWorker");
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/workers/{host}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopZoneWorkers operation.
     * @callback module:api/OnezoneApi~startStopZoneWorkersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop zone cluster workers
     * Starts or stops cluster worker service on all hosts in the local deployment. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the cluster worker service. The service  will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OnezoneApi~startStopZoneWorkersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.startStopZoneWorkers = function(opts, callback) {
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/zone/workers', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
