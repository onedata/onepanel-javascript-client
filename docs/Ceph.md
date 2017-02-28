# Onepanel.Ceph

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **String** | The username of the Ceph cluster administrator. | 
**key** | **String** | The admin key to access the Ceph cluster. | 
**monitorHostname** | **String** | The monitor host name. | 
**clusterName** | **String** | The Ceph cluster name. | 
**poolName** | **String** | The Ceph pool name. | 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (username and key) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] [default to false]


