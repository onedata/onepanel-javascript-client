# Onepanel.AutoStorageImportScanConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxDepth** | **Number** | Maximum depth of filesystem tree that will be traversed during the scan.  | [optional] 
**scanInterval** | **Number** | Period between subsequent scans in seconds (counted from end of one scan till beginning of the following). This parameter is relevant only for continuous scans.  | [optional] 
**writeOnce** | **Boolean** | Flag determining that synchronized storage will be treated as immutable (only creations and deletions of files on storage will be detected). This parameter is relevant only for continuous scans.  | [optional] 
**detectDeletions** | **Boolean** | Flag determining that deletions of files will be detected. This parameter is relevant only for continuous scans.  | [optional] 
**syncAcl** | **Boolean** | Flag that enables synchronization of NFSv4 ACLs. | [optional] 


