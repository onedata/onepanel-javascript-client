/**
 * Onepanel
 * # Overview  This is the RESTful API definition of **Onepanel** component of Onedata data management system [onedata.org](http://www.onedata.org).  > This API is defined using [Swagger](http://swagger.io/), the JSON specification can be used to automatically generate client libraries -   [swagger.json](../../../swagger/onepanel/swagger.json).  This API allows control and configuration of local Onedata deployment, in particular full control over the **Onezone** and **Oneprovider** services and their distribution and monitoring on the local resources.  The API is group into 3 categories of operations:   * **Onepanel** - for common operations   * **Oneprovider** - for Oneprovider specific administrative operations   * **Onezone** - for Onezone specific administrative operations  Each of these components is composed of the following services:   * **Worker services** - these are available under `/zone/workers` and     `/provider/workers` paths,   * **Databases services** - each Onedata component stores it's metadata in a     Couchbase backend, which can be distributed on any number of nodes, these     are available under `/zone/databases` and `/provider/databases` paths,   * **Cluster manager services** - this is a service which controls other     deployed processes in one site, these are availables under these are     available under `/zone/managers` and `/provider/managers` paths.  **Onezone** and **Oneprovider** components are composed of 3 types of services: **managers**, **databases** and **workers**.  Using this API each of these components can be deployed, configured, started and stopped on a specified host in the local site, in the context of either **Onezone** or **Oneprovider** service.  All paths listed in this documentation are relative to the base Onepanel REST API which is `/api/v3/onepanel`, so complete URL for a request to Onepanel service is:  ``` http://HOSTNAME:PORT/api/v3/onepanel/... ```  ## Authentication  Onepanel supports only HTTP basic authentication, i.e. using `username` and `password`, which were set when creating users.  Onepanel users can have 2 roles:   * **admin** - Onepanel administrator, there can be multiple administrators     and all have equal rights in terms of Onedata deployment management,   * **regular** - this role allows manual creation of user accounts, using     which users can login to Onezone service using HTTP Basic authentication     without OpenID. This role makes sense only on Onepanel which manages     Onezone deployment.  The first user account which is created in Onepanel is always an `admin` account.  ## API structure  The Onepanel API is structured to reflect that it can either be used to control **Onezone** or **Oneprovider** deployment, each Onedata component deployment has a separate Onepanel instance. In order to make the API calls explicit, **Onezone** or **Oneprovider** specific requests have different paths, i.e.:   * Onezone specific operations start with `/api/v3/onepanel/zone/`   * Oneprovider specific operations start with `/api/v3/onepanel/provider/`   * Common operations paths include `/api/v3/onepanel/users`,     `/api/v3/onepanel/hosts` and `/api/v3/onepanel/tasks`  The overall configuration of each component can be controlled by updating `/api/v3/onepanel/zone/configuration` and `/api/v3/onepanel/provider/configuration` resources.  ## Examples  Below are some example requests to Onepanel using cURL:  **Create new user** ```bash curl -X POST -k -vvv -H \"content-type: application/json\" \\ -d '{\"username\": \"admin\", \"password\": \"Password1\", \"userRole\": \"admin\"}' \\ https://172.17.0.6:9443/api/v3/onepanel/users ```  **Add storage resource to provider** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"NFS\": {\"type\": \"posix\", \"mountPoint\": \"/mnt/vfs\"}}' \\ https://172.17.0.4:9443/api/v3/onepanel/provider/storages ```  **Add a new Onezone worker** ```bash curl -X PUT -u admin:Password1 -k -vvv -H \"content-type: application/json\" \\ -d '{\"hosts\": [\"node1.p1.1.dev\"]}' \\ https://172.17.0.4:9443/api/v3/onepanel/zone/workers ``` 
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
    instance = new Onepanel.OnepanelApi();
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

  describe('OnepanelApi', function() {
    describe('addClusterHost', function() {
      it('should call addClusterHost successfully', function(done) {
        //uncomment below and update the code to test addClusterHost
        //instance.addClusterHost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addUser', function() {
      it('should call addUser successfully', function(done) {
        //uncomment below and update the code to test addUser
        //instance.addUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkDns', function() {
      it('should call checkDns successfully', function(done) {
        //uncomment below and update the code to test checkDns
        //instance.checkDns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createGroupInviteToken', function() {
      it('should call createGroupInviteToken successfully', function(done) {
        //uncomment below and update the code to test createGroupInviteToken
        //instance.createGroupInviteToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUserInviteToken', function() {
      it('should call createUserInviteToken successfully', function(done) {
        //uncomment below and update the code to test createUserInviteToken
        //instance.createUserInviteToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCluster', function() {
      it('should call getCluster successfully', function(done) {
        //uncomment below and update the code to test getCluster
        //instance.getCluster(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClusterCookie', function() {
      it('should call getClusterCookie successfully', function(done) {
        //uncomment below and update the code to test getClusterCookie
        //instance.getClusterCookie(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClusterHosts', function() {
      it('should call getClusterHosts successfully', function(done) {
        //uncomment below and update the code to test getClusterHosts
        //instance.getClusterHosts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClusterMembership', function() {
      it('should call getClusterMembership successfully', function(done) {
        //uncomment below and update the code to test getClusterMembership
        //instance.getClusterMembership(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClusters', function() {
      it('should call getClusters successfully', function(done) {
        //uncomment below and update the code to test getClusters
        //instance.getClusters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConfiguration', function() {
      it('should call getConfiguration successfully', function(done) {
        //uncomment below and update the code to test getConfiguration
        //instance.getConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentCluster', function() {
      it('should call getCurrentCluster successfully', function(done) {
        //uncomment below and update the code to test getCurrentCluster
        //instance.getCurrentCluster(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUser', function() {
      it('should call getCurrentUser successfully', function(done) {
        //uncomment below and update the code to test getCurrentUser
        //instance.getCurrentUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDnsCheckConfiguration', function() {
      it('should call getDnsCheckConfiguration successfully', function(done) {
        //uncomment below and update the code to test getDnsCheckConfiguration
        //instance.getDnsCheckConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNode', function() {
      it('should call getNode successfully', function(done) {
        //uncomment below and update the code to test getNode
        //instance.getNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProgress', function() {
      it('should call getProgress successfully', function(done) {
        //uncomment below and update the code to test getProgress
        //instance.getProgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRemoteProvider', function() {
      it('should call getRemoteProvider successfully', function(done) {
        //uncomment below and update the code to test getRemoteProvider
        //instance.getRemoteProvider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTaskStatus', function() {
      it('should call getTaskStatus successfully', function(done) {
        //uncomment below and update the code to test getTaskStatus
        //instance.getTaskStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUser', function() {
      it('should call getUser successfully', function(done) {
        //uncomment below and update the code to test getUser
        //instance.getUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsers', function() {
      it('should call getUsers successfully', function(done) {
        //uncomment below and update the code to test getUsers
        //instance.getUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebCert', function() {
      it('should call getWebCert successfully', function(done) {
        //uncomment below and update the code to test getWebCert
        //instance.getWebCert(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('joinCluster', function() {
      it('should call joinCluster successfully', function(done) {
        //uncomment below and update the code to test joinCluster
        //instance.joinCluster(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyCurrentUser', function() {
      it('should call modifyCurrentUser successfully', function(done) {
        //uncomment below and update the code to test modifyCurrentUser
        //instance.modifyCurrentUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyDnsCheckConfiguration', function() {
      it('should call modifyDnsCheckConfiguration successfully', function(done) {
        //uncomment below and update the code to test modifyDnsCheckConfiguration
        //instance.modifyDnsCheckConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyProgress', function() {
      it('should call modifyProgress successfully', function(done) {
        //uncomment below and update the code to test modifyProgress
        //instance.modifyProgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyUser', function() {
      it('should call modifyUser successfully', function(done) {
        //uncomment below and update the code to test modifyUser
        //instance.modifyUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyWebCert', function() {
      it('should call modifyWebCert successfully', function(done) {
        //uncomment below and update the code to test modifyWebCert
        //instance.modifyWebCert(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeClusterHost', function() {
      it('should call removeClusterHost successfully', function(done) {
        //uncomment below and update the code to test removeClusterHost
        //instance.removeClusterHost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeCurrentUser', function() {
      it('should call removeCurrentUser successfully', function(done) {
        //uncomment below and update the code to test removeCurrentUser
        //instance.removeCurrentUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUser', function() {
      it('should call removeUser successfully', function(done) {
        //uncomment below and update the code to test removeUser
        //instance.removeUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
