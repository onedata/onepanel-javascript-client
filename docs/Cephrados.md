# Onepanel.Cephrados

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **String** | The username of the Ceph cluster administrator. | 
**key** | **String** | The admin key to access the Ceph cluster. | 
**monitorHostname** | **String** | The monitor host name. | 
**clusterName** | **String** | The Ceph cluster name. | 
**poolName** | **String** | The Ceph pool name. | 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**blockSize** | **Number** | Storage block size in bytes. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (username and key) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] [default to false]
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] [default to false]
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;flat&#39;]

