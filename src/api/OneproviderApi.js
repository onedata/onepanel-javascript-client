/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in one of `X-Auth-Token`, `Macaroon` or `Authorization: Bearer` headers. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H 'X-Auth-Token: $TOKEN' https://$HOST:9443/api/v3/onepanel/... curl -H 'Macaroon: $TOKEN' https://$HOST:9443/api/v3/onepanel/... curl -H 'Authorization: Bearer $TOKEN' https://$HOST:9443/api/v3/onepanel/... ```   ### Passphrase authentication  The token authentication dependes on the Onezone service. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the whole content of base64-encoded string in Basic authorization header, e.g. ```bash curl -H \"Authorization: Basic $(echo -n TheEmergencyPassphrase | base64)\" ```  The passphrase is set during deployment. It can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 19.02.0-beta1
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
    define(['ApiClient', 'model/ClusterIps', 'model/Error', 'model/ManagerHosts', 'model/ModifyClusterIps', 'model/OnezoneInfo', 'model/ProviderConfiguration', 'model/ProviderConfigurationDetails', 'model/ProviderDetails', 'model/ProviderModifyRequest', 'model/ProviderRegisterRequest', 'model/ProviderSpaces', 'model/ProviderStorages', 'model/ServiceDatabases', 'model/ServiceError', 'model/ServiceHosts', 'model/ServiceStatus', 'model/ServiceStatusHost', 'model/SpaceAutoCleaningConfiguration', 'model/SpaceAutoCleaningReport', 'model/SpaceAutoCleaningReports', 'model/SpaceAutoCleaningStatus', 'model/SpaceDetails', 'model/SpaceFilePopularityConfiguration', 'model/SpaceId', 'model/SpaceModifyRequest', 'model/SpaceSupportRequest', 'model/SpaceSyncStats', 'model/StorageCreateRequest', 'model/StorageDetails', 'model/StorageModifyRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClusterIps'), require('../model/Error'), require('../model/ManagerHosts'), require('../model/ModifyClusterIps'), require('../model/OnezoneInfo'), require('../model/ProviderConfiguration'), require('../model/ProviderConfigurationDetails'), require('../model/ProviderDetails'), require('../model/ProviderModifyRequest'), require('../model/ProviderRegisterRequest'), require('../model/ProviderSpaces'), require('../model/ProviderStorages'), require('../model/ServiceDatabases'), require('../model/ServiceError'), require('../model/ServiceHosts'), require('../model/ServiceStatus'), require('../model/ServiceStatusHost'), require('../model/SpaceAutoCleaningConfiguration'), require('../model/SpaceAutoCleaningReport'), require('../model/SpaceAutoCleaningReports'), require('../model/SpaceAutoCleaningStatus'), require('../model/SpaceDetails'), require('../model/SpaceFilePopularityConfiguration'), require('../model/SpaceId'), require('../model/SpaceModifyRequest'), require('../model/SpaceSupportRequest'), require('../model/SpaceSyncStats'), require('../model/StorageCreateRequest'), require('../model/StorageDetails'), require('../model/StorageModifyRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Onepanel) {
      root.Onepanel = {};
    }
    root.Onepanel.OneproviderApi = factory(root.Onepanel.ApiClient, root.Onepanel.ClusterIps, root.Onepanel.Error, root.Onepanel.ManagerHosts, root.Onepanel.ModifyClusterIps, root.Onepanel.OnezoneInfo, root.Onepanel.ProviderConfiguration, root.Onepanel.ProviderConfigurationDetails, root.Onepanel.ProviderDetails, root.Onepanel.ProviderModifyRequest, root.Onepanel.ProviderRegisterRequest, root.Onepanel.ProviderSpaces, root.Onepanel.ProviderStorages, root.Onepanel.ServiceDatabases, root.Onepanel.ServiceError, root.Onepanel.ServiceHosts, root.Onepanel.ServiceStatus, root.Onepanel.ServiceStatusHost, root.Onepanel.SpaceAutoCleaningConfiguration, root.Onepanel.SpaceAutoCleaningReport, root.Onepanel.SpaceAutoCleaningReports, root.Onepanel.SpaceAutoCleaningStatus, root.Onepanel.SpaceDetails, root.Onepanel.SpaceFilePopularityConfiguration, root.Onepanel.SpaceId, root.Onepanel.SpaceModifyRequest, root.Onepanel.SpaceSupportRequest, root.Onepanel.SpaceSyncStats, root.Onepanel.StorageCreateRequest, root.Onepanel.StorageDetails, root.Onepanel.StorageModifyRequest);
  }
}(this, function(ApiClient, ClusterIps, Error, ManagerHosts, ModifyClusterIps, OnezoneInfo, ProviderConfiguration, ProviderConfigurationDetails, ProviderDetails, ProviderModifyRequest, ProviderRegisterRequest, ProviderSpaces, ProviderStorages, ServiceDatabases, ServiceError, ServiceHosts, ServiceStatus, ServiceStatusHost, SpaceAutoCleaningConfiguration, SpaceAutoCleaningReport, SpaceAutoCleaningReports, SpaceAutoCleaningStatus, SpaceDetails, SpaceFilePopularityConfiguration, SpaceId, SpaceModifyRequest, SpaceSupportRequest, SpaceSyncStats, StorageCreateRequest, StorageDetails, StorageModifyRequest) {
  'use strict';

  /**
   * Oneprovider service.
   * @module api/OneproviderApi
   * @version 19.02.0-beta1
   */

  /**
   * Constructs a new OneproviderApi. 
   * @alias module:api/OneproviderApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addProvider operation.
     * @callback module:api/OneproviderApi~addProviderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register provider
     * Registers provider in the zone.
     * @param {module:model/ProviderRegisterRequest} providerRegisterRequest The new provider details.
     * @param {module:api/OneproviderApi~addProviderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addProvider = function(providerRegisterRequest, callback) {
      var postBody = providerRegisterRequest;

      // verify the required parameter 'providerRegisterRequest' is set
      if (providerRegisterRequest === undefined || providerRegisterRequest === null) {
        throw new Error("Missing the required parameter 'providerRegisterRequest' when calling addProvider");
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
        '/provider', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addProviderDatabases operation.
     * @callback module:api/OneproviderApi~addProviderDatabasesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy provider databases
     * Deploys a database service on provided hosts.
     * @param {module:model/ServiceDatabases} serviceHosts The service hosts configuration where databases should be deployed. 
     * @param {module:api/OneproviderApi~addProviderDatabasesCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/databases', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addProviderManagers operation.
     * @callback module:api/OneproviderApi~addProviderManagersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add provider cluster managers
     * Deploys a cluster manager service on provided hosts.
     * @param {module:model/ManagerHosts} managerHosts The cluster manager service hosts configuration.
     * @param {module:api/OneproviderApi~addProviderManagersCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/managers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addProviderWorkers operation.
     * @callback module:api/OneproviderApi~addProviderWorkersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add provider cluster workers
     * Deploys cluster worker services on provided hosts.
     * @param {module:model/ServiceHosts} serviceHosts The service hosts configuration where workers should be deployed. 
     * @param {module:api/OneproviderApi~addProviderWorkersCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/workers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addStorage operation.
     * @callback module:api/OneproviderApi~addStorageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add storage
     * Adds additional storage resources to the provider.
     * @param {module:model/StorageCreateRequest} storageCreateRequest The configuration details of storage resources to be added to the provider deployment. 
     * @param {module:api/OneproviderApi~addStorageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addStorage = function(storageCreateRequest, callback) {
      var postBody = storageCreateRequest;

      // verify the required parameter 'storageCreateRequest' is set
      if (storageCreateRequest === undefined || storageCreateRequest === null) {
        throw new Error("Missing the required parameter 'storageCreateRequest' when calling addStorage");
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
        '/provider/storages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configureFilePopularity operation.
     * @callback module:api/OneproviderApi~configureFilePopularityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configure file-popularity mechanism in the space.
     * Configures the file-popularity mechanism in the space. The mechanism is responsible for collecting file-popularity usage statistics per space support. Creates a view index which can be queried to fetch the least popular files. The view is sorted in an increasing order by the popularity function value. The popularity function is defined as  &#x60;&#x60;&#x60; P(lastOpenHour, avgOpenCountPerDay) &#x3D; w1 * lastOpenHour + w2 * min(avgOpenCountPerDay, MAX_AVG_OPEN_COUNT_PER_DAY) where: * lastOpenHour - parameter which is equal to timestamp (in hours since 01.01.1970) of last open operation on given file * w1 - weight of lastOpenHour parameter * avgOpenCountPerDay - parameter equal to moving average of number of open operations on given file per day. Value is calculated over last 30 days. * w2 - weight of avgOpenCountPerDay parameter * MAX_AVG_OPEN_COUNT_PER_DAY - upper boundary for avgOpenCountPerDay parameter &#x60;&#x60;&#x60; 
     * @param {String} id The Id of a space.
     * @param {module:model/SpaceFilePopularityConfiguration} spaceFilePopularityConfiguration Configuration of the file-popularity mechanism in the space.
     * @param {module:api/OneproviderApi~configureFilePopularityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.configureFilePopularity = function(id, spaceFilePopularityConfiguration, callback) {
      var postBody = spaceFilePopularityConfiguration;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling configureFilePopularity");
      }

      // verify the required parameter 'spaceFilePopularityConfiguration' is set
      if (spaceFilePopularityConfiguration === undefined || spaceFilePopularityConfiguration === null) {
        throw new Error("Missing the required parameter 'spaceFilePopularityConfiguration' when calling configureFilePopularity");
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

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/file-popularity/configuration', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configureProvider operation.
     * @callback module:api/OneproviderApi~configureProviderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configure provider deployment
     * Configures and starts provider services, such as database, cluster manager and cluster worker. Depending on the configuration, sets up provider storage and registers in the zone. This request can be executed unauthorized as long as there are no admin users. 
     * @param {module:model/ProviderConfiguration} providerConfiguration The provider configuration description.
     * @param {module:api/OneproviderApi~configureProviderCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
      var contentTypes = ['application/json', 'application/x-yaml'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/configuration', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configureSpaceAutoCleaning operation.
     * @callback module:api/OneproviderApi~configureSpaceAutoCleaningCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configure space auto-cleaning mechanism
     * Configures space auto-cleaning mechanism in the space. 
     * @param {String} id The Id of a space
     * @param {module:model/SpaceAutoCleaningConfiguration} spaceAutoCleaningConfiguration New configuration of space auto-cleaning mechanism. 
     * @param {module:api/OneproviderApi~configureSpaceAutoCleaningCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the getFilePopularityConfiguration operation.
     * @callback module:api/OneproviderApi~getFilePopularityConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceFilePopularityConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file-popularity configuration
     * Returns configuration of file-popularity mechanism in the space specified by space Id in the path. 
     * @param {String} id The Id of a space of which file-popularity configuration should be returned.
     * @param {module:api/OneproviderApi~getFilePopularityConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpaceFilePopularityConfiguration}
     */
    this.getFilePopularityConfiguration = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFilePopularityConfiguration");
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SpaceFilePopularityConfiguration;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/file-popularity/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOnezoneInfo operation.
     * @callback module:api/OneproviderApi~getOnezoneInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OnezoneInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Onezone information
     * Get information about a Onezone. Before registration this endpoint requires a registration token and returns information about the Onezone issuing the token. When provider is registered returns information about the Onezone at which the provider is registered. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Oneprovider registration token obtained from Onezone. Required if the Oneprovider is not registered.
     * @param {module:api/OneproviderApi~getOnezoneInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OnezoneInfo}
     */
    this.getOnezoneInfo = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'token': opts['token']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = OnezoneInfo;

      return this.apiClient.callApi(
        '/provider/onezone_info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProvider operation.
     * @callback module:api/OneproviderApi~getProviderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProviderDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider details
     * Returns the basic configuration information of the provider.
     * @param {module:api/OneproviderApi~getProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProviderDetails}
     */
    this.getProvider = function(callback) {
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
      var returnType = ProviderDetails;

      return this.apiClient.callApi(
        '/provider', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderClusterIps operation.
     * @callback module:api/OneproviderApi~getProviderClusterIpsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClusterIps} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster nodes IPs
     * Returns IPs of nodes in provider cluster
     * @param {module:api/OneproviderApi~getProviderClusterIpsCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~getProviderConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProviderConfigurationDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster configuration
     * Returns the provider cluster configuration.
     * @param {module:api/OneproviderApi~getProviderConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~getProviderDatabaseStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatusHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider database status
     * Returns status of database service on the selected host.
     * @param {String} host The name of a host for which database service status should be returned. 
     * @param {module:api/OneproviderApi~getProviderDatabaseStatusCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~getProviderDatabasesStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider databases status
     * Returns status of database service on each host where it has been deployed. 
     * @param {module:api/OneproviderApi~getProviderDatabasesStatusCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~getProviderManagerStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatusHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster manager status
     * Returns status of cluster manager service on the selected host.
     * @param {String} host The name of a host for which cluster manager service status should be returned. 
     * @param {module:api/OneproviderApi~getProviderManagerStatusCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~getProviderManagersStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster managers status
     * Returns status of cluster manager service on each host where it has been deployed. 
     * @param {module:api/OneproviderApi~getProviderManagersStatusCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~getProviderNagiosReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider nagios report
     * Returns the provider nagios report.
     * @param {module:api/OneproviderApi~getProviderNagiosReportCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the getProviderSpaceAutoCleaningReport operation.
     * @callback module:api/OneproviderApi~getProviderSpaceAutoCleaningReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceAutoCleaningReport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the report from a space auto-cleaning run
     * Returns the details of a specific auto-cleaning run. 
     * @param {String} id The Id of a space
     * @param {String} reportId The Id of an auto-cleaning report.
     * @param {module:api/OneproviderApi~getProviderSpaceAutoCleaningReportCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~getProviderSpaceAutoCleaningReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceAutoCleaningReports} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Ids of of the space auto-cleaning reports
     * Returns the list of Ids of space auto-cleaning reports. The list is sorted descending by start time of an auto-cleaning run (the newest report is first). 
     * @param {String} id The Id of a space
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Allows to skip N first report Ids. (default to 0)
     * @param {Number} opts.limit Allows to limit the number of returned report Ids up to N last reports. By default, all report Ids will be returned. 
     * @param {String} opts.index Allows to list the report Ids starting from the specific report. 
     * @param {module:api/OneproviderApi~getProviderSpaceAutoCleaningReportsCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~getProviderSpaceAutoCleaningStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceAutoCleaningStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status of space auto-cleaning mechanism
     * Returns status of current process of auto-cleaning for the space. 
     * @param {String} id The Id of a space
     * @param {module:api/OneproviderApi~getProviderSpaceAutoCleaningStatusCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the getProviderSpaceSyncStats operation.
     * @callback module:api/OneproviderApi~getProviderSpaceSyncStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceSyncStats} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statistics of storage synchronization
     * Returns requested statistics of storage synchronization for given space on this provider. 
     * @param {String} id The Id of a space for which sync stats should be returned.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.period Predefined time period for which the statistics should be fetched
     * @param {String} opts.metrics Specify which statistic metrics should be returned - strings delimited with comma
     * @param {module:api/OneproviderApi~getProviderSpaceSyncStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpaceSyncStats}
     */
    this.getProviderSpaceSyncStats = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProviderSpaceSyncStats");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'period': opts['period'],
        'metrics': opts['metrics']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SpaceSyncStats;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/sync', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderSpaces operation.
     * @callback module:api/OneproviderApi~getProviderSpacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProviderSpaces} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider spaces
     * Returns the list of spaces supported by the provider.
     * @param {module:api/OneproviderApi~getProviderSpacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProviderSpaces}
     */
    this.getProviderSpaces = function(callback) {
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
      var returnType = ProviderSpaces;

      return this.apiClient.callApi(
        '/provider/spaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProviderWorkerStatus operation.
     * @callback module:api/OneproviderApi~getProviderWorkerStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatusHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster worker status
     * Returns status of cluster worker service on the selected host.
     * @param {String} host The name of a host for which cluster worker service status should be returned. 
     * @param {module:api/OneproviderApi~getProviderWorkerStatusCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~getProviderWorkersStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get provider cluster workers status
     * Returns status of cluster worker service on each host where it has been deployed. 
     * @param {module:api/OneproviderApi~getProviderWorkersStatusCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the getSpaceAutoCleaningConfiguration operation.
     * @callback module:api/OneproviderApi~getSpaceAutoCleaningConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceAutoCleaningConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get space auto-cleaning configuration
     * Returns configuration of auto-cleaning mechanism in the space specified by space Id in the path. 
     * @param {String} id The Id of a space of which auto-cleaning configuration should be returned.
     * @param {module:api/OneproviderApi~getSpaceAutoCleaningConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the getSpaceDetails operation.
     * @callback module:api/OneproviderApi~getSpaceDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get space details
     * Returns details of space specified by space Id in the path. 
     * @param {String} id The Id of a space which details should be returned.
     * @param {module:api/OneproviderApi~getSpaceDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpaceDetails}
     */
    this.getSpaceDetails = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSpaceDetails");
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SpaceDetails;

      return this.apiClient.callApi(
        '/provider/spaces/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStorageDetails operation.
     * @callback module:api/OneproviderApi~getStorageDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StorageDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get storage details
     * Returns the details of the selected storage.
     * @param {String} id The Id of a storage resource, which details should be returned. 
     * @param {module:api/OneproviderApi~getStorageDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StorageDetails}
     */
    this.getStorageDetails = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getStorageDetails");
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = StorageDetails;

      return this.apiClient.callApi(
        '/provider/storages/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStorages operation.
     * @callback module:api/OneproviderApi~getStoragesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProviderStorages} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get storages
     * Returns the list of provider storage resources and their details.
     * @param {module:api/OneproviderApi~getStoragesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProviderStorages}
     */
    this.getStorages = function(callback) {
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
      var returnType = ProviderStorages;

      return this.apiClient.callApi(
        '/provider/storages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the invalidateLumaCache operation.
     * @callback module:api/OneproviderApi~invalidateLumaCacheCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invalidate LUMA cache
     * Invalidates LUMA cache in provider for given storage.
     * @param {String} id The Id of a storage resource, which details should be modified. 
     * @param {module:api/OneproviderApi~invalidateLumaCacheCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.invalidateLumaCache = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling invalidateLumaCache");
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

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/storages/{id}/invalidate_luma', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyProvider operation.
     * @callback module:api/OneproviderApi~modifyProviderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify provider details
     * Modifies basic provider details in the zone.
     * @param {module:model/ProviderModifyRequest} providerModifyRequest New values for provider configuration parameters which should be changed. 
     * @param {module:api/OneproviderApi~modifyProviderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.modifyProvider = function(providerModifyRequest, callback) {
      var postBody = providerModifyRequest;

      // verify the required parameter 'providerModifyRequest' is set
      if (providerModifyRequest === undefined || providerModifyRequest === null) {
        throw new Error("Missing the required parameter 'providerModifyRequest' when calling modifyProvider");
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
        '/provider', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyProviderClusterIps operation.
     * @callback module:api/OneproviderApi~modifyProviderClusterIpsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set external IPs of nodes in application config
     * Informs cluster nodes about external IPs which can be used to access them by other providers. 
     * @param {module:model/ModifyClusterIps} clusterIps The provider configuration description.
     * @param {module:api/OneproviderApi~modifyProviderClusterIpsCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * Callback function to receive the result of the modifySpace operation.
     * @callback module:api/OneproviderApi~modifySpaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpaceId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify space details
     * Modifies the space import/update strategies.
     * @param {String} id The Id of a space which details should be modified.
     * @param {module:model/SpaceModifyRequest} spaceModifyRequest 
     * @param {module:api/OneproviderApi~modifySpaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpaceId}
     */
    this.modifySpace = function(id, spaceModifyRequest, callback) {
      var postBody = spaceModifyRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling modifySpace");
      }

      // verify the required parameter 'spaceModifyRequest' is set
      if (spaceModifyRequest === undefined || spaceModifyRequest === null) {
        throw new Error("Missing the required parameter 'spaceModifyRequest' when calling modifySpace");
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

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = SpaceId;

      return this.apiClient.callApi(
        '/provider/spaces/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyStorage operation.
     * @callback module:api/OneproviderApi~modifyStorageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify storage details
     * Modifies basic storage details, such as operation timeout.
     * @param {String} id The Id of a storage resource, which details should be modified. 
     * @param {module:model/StorageModifyRequest} storageModifyRequest New values for storage configuration parameters which should be changed. 
     * @param {module:api/OneproviderApi~modifyStorageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.modifyStorage = function(id, storageModifyRequest, callback) {
      var postBody = storageModifyRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling modifyStorage");
      }

      // verify the required parameter 'storageModifyRequest' is set
      if (storageModifyRequest === undefined || storageModifyRequest === null) {
        throw new Error("Missing the required parameter 'storageModifyRequest' when calling modifyStorage");
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

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/storages/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeProvider operation.
     * @callback module:api/OneproviderApi~removeProviderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister provider
     * Unregisters provider from the zone.
     * @param {module:api/OneproviderApi~removeProviderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeProvider = function(callback) {
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the revokeSpaceSupport operation.
     * @callback module:api/OneproviderApi~revokeSpaceSupportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke space support for a space
     * Allows provider to revoke storage support for a specific space. Users with access to this space will no longer be able to store data on the resources of this provider. 
     * @param {String} id The Id of a space to be removed.
     * @param {module:api/OneproviderApi~revokeSpaceSupportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.revokeSpaceSupport = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling revokeSpaceSupport");
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/spaces/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the startStopProviderDatabase operation.
     * @callback module:api/OneproviderApi~startStopProviderDatabaseCallback
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
     * @param {module:api/OneproviderApi~startStopProviderDatabaseCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~startStopProviderDatabasesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop provider databases
     * Starts or stops database service on all hosts in the local deployment. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the database service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OneproviderApi~startStopProviderDatabasesCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~startStopProviderManagerCallback
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
     * @param {module:api/OneproviderApi~startStopProviderManagerCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~startStopProviderManagersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop provider cluster managers
     * Starts or stops cluster manager service on all hosts in the local deployment. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the cluster manager service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OneproviderApi~startStopProviderManagersCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~startStopProviderWorkerCallback
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
     * @param {module:api/OneproviderApi~startStopProviderWorkerCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
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
     * @callback module:api/OneproviderApi~startStopProviderWorkersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start/stop provider cluster workers
     * Starts or stops cluster worker service on all hosts in the local deployment. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.started Defines the intended state of the cluster worker service. The service will be started or stopped in order to match the requested state.  (default to true)
     * @param {module:api/OneproviderApi~startStopProviderWorkersCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/workers', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the supportSpace operation.
     * @callback module:api/OneproviderApi~supportSpaceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Support space
     * Supports an existing space. 
     * @param {module:model/SpaceSupportRequest} spaceSupportRequest Specification of the space support request including support size and token. 
     * @param {module:api/OneproviderApi~supportSpaceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.supportSpace = function(spaceSupportRequest, callback) {
      var postBody = spaceSupportRequest;

      // verify the required parameter 'spaceSupportRequest' is set
      if (spaceSupportRequest === undefined || spaceSupportRequest === null) {
        throw new Error("Missing the required parameter 'spaceSupportRequest' when calling supportSpace");
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
        '/provider/spaces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the triggerAutoCleaning operation.
     * @callback module:api/OneproviderApi~triggerAutoCleaningCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Triggers space auto-cleaning
     * Triggers one run of auto-cleaning mechanism for given space.
     * @param {String} id The Id of a space
     * @param {module:api/OneproviderApi~triggerAutoCleaningCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/provider/spaces/{id}/auto-cleaning/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
