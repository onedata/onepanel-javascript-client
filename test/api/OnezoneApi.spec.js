/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  ### Token authentication  The recommended, safest way of authenticating requests to Onepanel API is using the **Onedata access tokens**. The token should be present in one of `X-Auth-Token`, `Macaroon` or `Authorization: Bearer` headers. See [Onezone documentation](/#/home/api/latest/onezone?anchor=section/Overview/Authentication-and-authorization) for detailed explanation of the token concepts.  Curl examples: ```bash curl -H 'X-Auth-Token: $TOKEN' https://$HOST:9443/api/v3/onepanel/... curl -H 'Macaroon: $TOKEN' https://$HOST:9443/api/v3/onepanel/... curl -H 'Authorization: Bearer $TOKEN' https://$HOST:9443/api/v3/onepanel/... ```   ### Passphrase authentication  The token authentication requires functional Onezone to succeed. In special cases - during Onezone deployment or its outage - it is necessary to use the local **emergency passphrase**.  The passphrase should be provided in a Basic authentication header with username `onepanel`. For curl users this means ```bash curl -u onepanel:TheEmergencyPassphrase ```  The passphrase can also be sent without any username, as the only content of base64-encoded string in Basic authorization header, e.g. ```bash $ echo -n TheEmergencyPassphrase | base64 VGhlRW1lcmdlbmN5UGFzc3BocmFzZQ== $ curl -H 'authorization: Basic VGhlRW1lcmdlbmN5UGFzc3BocmFzZQ==' ```  The passphrase is set during deployment. Can be changed in the Onepanel GUI or with an API request: ```bash curl -X PUT 'https://$HOST:9443/api/v3/onepanel/emergency_passphrase' \\ -u onepanel:TheEmergencyPassphrase -H 'Content-Type: application/json' \\ -d '{\"currentPassphrase\": \"TheEmergencyPassphrase\", \"newPassphrase\": \"TheNewPassphrase\"}' ```  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Add storage resource to provider** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X POST -u onepanel:Passphrase1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
 *
 * OpenAPI spec version: 18.02.1
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
    instance = new Onepanel.OnezoneApi();
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

  describe('OnezoneApi', function() {
    describe('addOnezoneUser', function() {
      it('should call addOnezoneUser successfully', function(done) {
        //uncomment below and update the code to test addOnezoneUser
        //instance.addOnezoneUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addZoneDatabases', function() {
      it('should call addZoneDatabases successfully', function(done) {
        //uncomment below and update the code to test addZoneDatabases
        //instance.addZoneDatabases(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addZoneManagers', function() {
      it('should call addZoneManagers successfully', function(done) {
        //uncomment below and update the code to test addZoneManagers
        //instance.addZoneManagers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addZoneWorkers', function() {
      it('should call addZoneWorkers successfully', function(done) {
        //uncomment below and update the code to test addZoneWorkers
        //instance.addZoneWorkers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeUserPassword', function() {
      it('should call changeUserPassword successfully', function(done) {
        //uncomment below and update the code to test changeUserPassword
        //instance.changeUserPassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configureZone', function() {
      it('should call configureZone successfully', function(done) {
        //uncomment below and update the code to test configureZone
        //instance.configureZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOnezoneUser', function() {
      it('should call getOnezoneUser successfully', function(done) {
        //uncomment below and update the code to test getOnezoneUser
        //instance.getOnezoneUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOnezoneUsers', function() {
      it('should call getOnezoneUsers successfully', function(done) {
        //uncomment below and update the code to test getOnezoneUsers
        //instance.getOnezoneUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneClusterIps', function() {
      it('should call getZoneClusterIps successfully', function(done) {
        //uncomment below and update the code to test getZoneClusterIps
        //instance.getZoneClusterIps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneConfiguration', function() {
      it('should call getZoneConfiguration successfully', function(done) {
        //uncomment below and update the code to test getZoneConfiguration
        //instance.getZoneConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneDatabaseStatus', function() {
      it('should call getZoneDatabaseStatus successfully', function(done) {
        //uncomment below and update the code to test getZoneDatabaseStatus
        //instance.getZoneDatabaseStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneDatabasesStatus', function() {
      it('should call getZoneDatabasesStatus successfully', function(done) {
        //uncomment below and update the code to test getZoneDatabasesStatus
        //instance.getZoneDatabasesStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneManagerStatus', function() {
      it('should call getZoneManagerStatus successfully', function(done) {
        //uncomment below and update the code to test getZoneManagerStatus
        //instance.getZoneManagerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneManagersStatus', function() {
      it('should call getZoneManagersStatus successfully', function(done) {
        //uncomment below and update the code to test getZoneManagersStatus
        //instance.getZoneManagersStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneNagiosReport', function() {
      it('should call getZoneNagiosReport successfully', function(done) {
        //uncomment below and update the code to test getZoneNagiosReport
        //instance.getZoneNagiosReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZonePolicies', function() {
      it('should call getZonePolicies successfully', function(done) {
        //uncomment below and update the code to test getZonePolicies
        //instance.getZonePolicies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneWorkerStatus', function() {
      it('should call getZoneWorkerStatus successfully', function(done) {
        //uncomment below and update the code to test getZoneWorkerStatus
        //instance.getZoneWorkerStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneWorkersStatus', function() {
      it('should call getZoneWorkersStatus successfully', function(done) {
        //uncomment below and update the code to test getZoneWorkersStatus
        //instance.getZoneWorkersStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyZoneClusterIps', function() {
      it('should call modifyZoneClusterIps successfully', function(done) {
        //uncomment below and update the code to test modifyZoneClusterIps
        //instance.modifyZoneClusterIps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyZonePolicies', function() {
      it('should call modifyZonePolicies successfully', function(done) {
        //uncomment below and update the code to test modifyZonePolicies
        //instance.modifyZonePolicies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopZoneDatabases', function() {
      it('should call startStopZoneDatabases successfully', function(done) {
        //uncomment below and update the code to test startStopZoneDatabases
        //instance.startStopZoneDatabases(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopZoneDatabasesHost', function() {
      it('should call startStopZoneDatabasesHost successfully', function(done) {
        //uncomment below and update the code to test startStopZoneDatabasesHost
        //instance.startStopZoneDatabasesHost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopZoneManager', function() {
      it('should call startStopZoneManager successfully', function(done) {
        //uncomment below and update the code to test startStopZoneManager
        //instance.startStopZoneManager(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopZoneManagers', function() {
      it('should call startStopZoneManagers successfully', function(done) {
        //uncomment below and update the code to test startStopZoneManagers
        //instance.startStopZoneManagers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopZoneWorker', function() {
      it('should call startStopZoneWorker successfully', function(done) {
        //uncomment below and update the code to test startStopZoneWorker
        //instance.startStopZoneWorker(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startStopZoneWorkers', function() {
      it('should call startStopZoneWorkers successfully', function(done) {
        //uncomment below and update the code to test startStopZoneWorkers
        //instance.startStopZoneWorkers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
