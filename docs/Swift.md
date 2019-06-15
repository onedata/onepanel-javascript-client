# Onepanel.Swift

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage. | 
**authUrl** | **String** | The URL to OpenStack Keystone identity service. | 
**tenantName** | **String** | The name of the tenant to which the user belongs. | 
**containerName** | **String** | The name of the Swift storage container. | 
**username** | **String** | The Keystone authentication username. | 
**password** | **String** | The Keystone authentication password. | 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**blockSize** | **Number** | Storage block size in bytes. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (username and password) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] [default to false]
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] [default to false]
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;flat&#39;]


