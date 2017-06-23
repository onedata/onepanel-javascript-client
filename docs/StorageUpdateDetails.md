# Onepanel.StorageUpdateDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategy** | **String** | The update strategy. One of no_update, simple_scan. | 
**maxDepth** | **Number** | Maximum depth of filesystem tree that will be traversed during storage synchronization.  | [optional] 
**scanInterval** | **Number** | Period between subsequent scans in seconds (counted from end of one scan till beginning of the following).  | [optional] 
**writeOnce** | **Boolean** | Flag determining that synchronized storage will be treated as immutable (only creations and deletions of files on storage will be detected).  | [optional] 
**deleteEnable** | **Boolean** | Flag determining that deletions of files will be detected.  | [optional] 


