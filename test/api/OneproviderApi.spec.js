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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Onepanel);
  }
}(this, function(expect, Onepanel) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Onepanel.OneproviderApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OneproviderApi', function() {
    describe('addProvider', function() {
      it('should call addProvider successfully', function(done) {
        //uncomment below and update the code to test addProvider
        //instance.addProvider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProviderDatabases', function() {
      it('should call addProviderDatabases successfully', function(done) {
        //uncomment below and update the code to test addProviderDatabases
        //instance.addProviderDatabases(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProviderManagers', function() {
      it('should call addProviderManagers successfully', function(done) {
        //uncomment below and update the code to test addProviderManagers
        //instance.addProviderManagers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProviderWorkers', function() {
      it('should call addProviderWorkers successfully', function(done) {
        //uncomment below and update the code to test addProviderWorkers
        //instance.addProviderWorkers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addStorage', function() {
      it('should call addStorage successfully', function(done) {
        //uncomment below and update the code to test addStorage
        //instance.addStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configureFilePopularity', function() {
      it('should call configureFilePopularity successfully', function(done) {
        //uncomment below and update the code to test configureFilePopularity
        //instance.configureFilePopularity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configureProvider', function() {
      it('should call configureProvider successfully', function(done) {
        //uncomment below and update the code to test configureProvider
        //instance.configureProvider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configureSpaceAutoCleaning', function() {
      it('should call configureSpaceAutoCleaning successfully', function(done) {
        //uncomment below and update the code to test configureSpaceAutoCleaning
        //instance.configureSpaceAutoCleaning(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFilePopularityConfiguration', function() {
      it('should call getFilePopularityConfiguration successfully', function(done) {
        //uncomment below and update the code to test getFilePopularityConfiguration
        //instance.getFilePopularityConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOnezoneInfo', function() {
      it('should call getOnezoneInfo successfully', function(done) {
        //uncomment below and update the code to test getOnezoneInfo
        //instance.getOnezoneInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProvider', function() {
      it('should call getProvider successfully', function(done) {
        //uncomment below and update the code to test getProvider
        //instance.getProvider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderClusterIps', function() {
      it('should call getProviderClusterIps successfully', function(done) {
        //uncomment below and update the code to test getProviderClusterIps
        //instance.getProviderClusterIps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderConfiguration', function() {
      it('should call getProviderConfiguration successfully', function(done) {
        //uncomment below and update the code to test getProviderConfiguration
        //instance.getProviderConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderDatabaseStatus', function() {
      it('should call getProviderDatabaseStatus successfully', function(done) {
        //uncomment below and update the code to test getProviderDatabaseStatus
        //instance.getProviderDatabaseStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderDatabasesStatus', function() {
      it('should call getProviderDatabasesStatus successfully', function(done) {
        //uncomment below and update the code to test getProviderDatabasesStatus
        //instance.getProviderDatabasesStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderManagerStatus', function() {
      it('should call getProviderManagerStatus successfully', function(done) {
        //uncomment below and update the code to test getProviderManagerStatus
        //instance.getProviderManagerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderManagersStatus', function() {
      it('should call getProviderManagersStatus successfully', function(done) {
        //uncomment below and update the code to test getProviderManagersStatus
        //instance.getProviderManagersStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderNagiosReport', function() {
      it('should call getProviderNagiosReport successfully', function(done) {
        //uncomment below and update the code to test getProviderNagiosReport
        //instance.getProviderNagiosReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderSpaceAutoCleaningReport', function() {
      it('should call getProviderSpaceAutoCleaningReport successfully', function(done) {
        //uncomment below and update the code to test getProviderSpaceAutoCleaningReport
        //instance.getProviderSpaceAutoCleaningReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderSpaceAutoCleaningReports', function() {
      it('should call getProviderSpaceAutoCleaningReports successfully', function(done) {
        //uncomment below and update the code to test getProviderSpaceAutoCleaningReports
        //instance.getProviderSpaceAutoCleaningReports(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderSpaceAutoCleaningStatus', function() {
      it('should call getProviderSpaceAutoCleaningStatus successfully', function(done) {
        //uncomment below and update the code to test getProviderSpaceAutoCleaningStatus
        //instance.getProviderSpaceAutoCleaningStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderSpaceSyncStats', function() {
      it('should call getProviderSpaceSyncStats successfully', function(done) {
        //uncomment below and update the code to test getProviderSpaceSyncStats
        //instance.getProviderSpaceSyncStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderSpaces', function() {
      it('should call getProviderSpaces successfully', function(done) {
        //uncomment below and update the code to test getProviderSpaces
        //instance.getProviderSpaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderWorkerStatus', function() {
      it('should call getProviderWorkerStatus successfully', function(done) {
        //uncomment below and update the code to test getProviderWorkerStatus
        //instance.getProviderWorkerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProviderWorkersStatus', function() {
      it('should call getProviderWorkersStatus successfully', function(done) {
        //uncomment below and update the code to test getProviderWorkersStatus
        //instance.getProviderWorkersStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpaceAutoCleaningConfiguration', function() {
      it('should call getSpaceAutoCleaningConfiguration successfully', function(done) {
        //uncomment below and update the code to test getSpaceAutoCleaningConfiguration
        //instance.getSpaceAutoCleaningConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpaceDetails', function() {
      it('should call getSpaceDetails successfully', function(done) {
        //uncomment below and update the code to test getSpaceDetails
        //instance.getSpaceDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStorageDetails', function() {
      it('should call getStorageDetails successfully', function(done) {
        //uncomment below and update the code to test getStorageDetails
        //instance.getStorageDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStorages', function() {
      it('should call getStorages successfully', function(done) {
        //uncomment below and update the code to test getStorages
        //instance.getStorages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invalidateLumaCache', function() {
      it('should call invalidateLumaCache successfully', function(done) {
        //uncomment below and update the code to test invalidateLumaCache
        //instance.invalidateLumaCache(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyProvider', function() {
      it('should call modifyProvider successfully', function(done) {
        //uncomment below and update the code to test modifyProvider
        //instance.modifyProvider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyProviderClusterIps', function() {
      it('should call modifyProviderClusterIps successfully', function(done) {
        //uncomment below and update the code to test modifyProviderClusterIps
        //instance.modifyProviderClusterIps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifySpace', function() {
      it('should call modifySpace successfully', function(done) {
        //uncomment below and update the code to test modifySpace
        //instance.modifySpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyStorage', function() {
      it('should call modifyStorage successfully', function(done) {
        //uncomment below and update the code to test modifyStorage
        //instance.modifyStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeProvider', function() {
      it('should call removeProvider successfully', function(done) {
        //uncomment below and update the code to test removeProvider
        //instance.removeProvider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('revokeSpaceSupport', function() {
      it('should call revokeSpaceSupport successfully', function(done) {
        //uncomment below and update the code to test revokeSpaceSupport
        //instance.revokeSpaceSupport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopProviderDatabase', function() {
      it('should call startStopProviderDatabase successfully', function(done) {
        //uncomment below and update the code to test startStopProviderDatabase
        //instance.startStopProviderDatabase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopProviderDatabases', function() {
      it('should call startStopProviderDatabases successfully', function(done) {
        //uncomment below and update the code to test startStopProviderDatabases
        //instance.startStopProviderDatabases(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopProviderManager', function() {
      it('should call startStopProviderManager successfully', function(done) {
        //uncomment below and update the code to test startStopProviderManager
        //instance.startStopProviderManager(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopProviderManagers', function() {
      it('should call startStopProviderManagers successfully', function(done) {
        //uncomment below and update the code to test startStopProviderManagers
        //instance.startStopProviderManagers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopProviderWorker', function() {
      it('should call startStopProviderWorker successfully', function(done) {
        //uncomment below and update the code to test startStopProviderWorker
        //instance.startStopProviderWorker(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopProviderWorkers', function() {
      it('should call startStopProviderWorkers successfully', function(done) {
        //uncomment below and update the code to test startStopProviderWorkers
        //instance.startStopProviderWorkers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('supportSpace', function() {
      it('should call supportSpace successfully', function(done) {
        //uncomment below and update the code to test supportSpace
        //instance.supportSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('triggerAutoCleaning', function() {
      it('should call triggerAutoCleaning successfully', function(done) {
        //uncomment below and update the code to test triggerAutoCleaning
        //instance.triggerAutoCleaning(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
