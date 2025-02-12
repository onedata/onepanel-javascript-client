# Onepanel.ClusterDatabases

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | **[String]** | The list of aliases of cluster database nodes. | 
**serverQuota** | **Number** | The server quota is the RAM memory in MiB that is allocated to the server when Couchbase Server is first installed. This sets the limit of RAM allocated by Couchbase for caching data for all buckets on each of the nodes.  Optional, defaults to &#x60;4096&#x60;.  | [optional] 
**bucketQuota** | **Number** | The bucket quota is the amount of RAM memory in MiB allocated to each individual bucket for caching data. Optional, defaults to &#x60;4096&#x60;.  Optimally, should be set to the same value as &#x60;serverQuota&#x60;.  | [optional] 


