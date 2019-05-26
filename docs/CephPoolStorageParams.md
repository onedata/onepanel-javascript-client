# Onepanel.CephPoolStorageParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of storage. By default constructed as \&quot;clustername:poolname\&quot;. | [optional] 
**insecure** | **Boolean** | Defines whether storage administrator credentials (username and key) may be used by users without storage accounts to access storage in direct IO mode.  | [optional] [default to false]
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] [default to false]
**lumaEnabled** | **Boolean** | If true LUMA and reverse LUMA services will be enabled. | [optional] [default to false]
**lumaUrl** | **String** | URL of external LUMA service | [optional] 
**lumaApiKey** | **String** | LUMA API Key, must be identical with API Key in external LUMA service. | [optional] 
**monitorHostname** | **String** | The monitor host name. If missing one of Ceph monitors is chosen arbitrarily. | [optional] 
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;flat&#39;]


