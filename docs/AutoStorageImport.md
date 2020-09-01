# Onepanel.AutoStorageImport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxDepth** | **Number** | Maximum depth of filesystem tree that will be traversed during the scan.  | [optional] 
**syncAcl** | **Boolean** | Flag that enables synchronization of NFSv4 ACLs.  | [optional] [default to false]
**continuousScan** | **Boolean** | With this option enabled the storage will be scanned periodically and direct changes on the storage will be reflected in the assigned Onedata space (upon the consecutive scan).  | [optional] [default to false]
**scanInterval** | **Number** | Period between subsequent scans in seconds (counted from end of one scan till beginning of the following). This parameter is relevant only for continuous scans.  | [optional] 
**detectModifications** | **Boolean** | Flag determining that modifications of files on the synchronized storage will be detected. If disabled, the storage will be treated as immutable (only creations and deletions of files on storage will be detected). This parameter is relevant only for continuous scans.  | [optional] [default to true]
**detectDeletions** | **Boolean** | Flag determining that deletions of files from the synchronized storage will be detected. This parameter is relevant only for continuous scans.  | [optional] [default to true]


