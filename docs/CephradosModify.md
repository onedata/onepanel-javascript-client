# Onepanel.CephradosModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage. | 
**username** | **String** | The username of the Ceph cluster administrator. | [optional] 
**key** | **String** | The admin key to access the Ceph cluster. | [optional] 
**monitorHostname** | **String** | The monitor host name. | [optional] 
**clusterName** | **String** | The Ceph cluster name. | [optional] 
**poolName** | **String** | The Ceph pool name. | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (username and key) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] [default to false]
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] [default to false]


