# Onepanel.Progress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusterNodes** | **Boolean** | True after user assigned services to cluster nodes and they were deployed. | [optional] 
**clusterIPs** | **Boolean** | True after user confirmed detected external IPs or if interactiveDeployment was disabled. | [optional] 
**webCertificate** | **Boolean** | True after user decided whether to use Let&#39;s Encrypt certificates or if interactiveDeployment was disabled. | [optional] 
**dnsCheck** | **Boolean** | True after user reviewed results of DNS check or if interactiveDeployment was disabled. | [optional] 
**storageSetup** | **Boolean** | True after at least one storage was added to op_worker. Omitted in Onezone panel. | [optional] 
**isRegistered** | **Boolean** | True if the Oneprovider is registered at Onezone. Omitted in Onezone panel. | [optional] 


