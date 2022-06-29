# Onepanel.SpaceSupportRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **String** | The token for space creation or support. | 
**size** | **Number** | The storage space size in bytes that provider is willing to assign to the space.  | 
**storageId** | **String** | The Id of the storage resource where the space data should be stored.  | 
**storageImport** | [**StorageImport**](StorageImport.md) |  | [optional] 
**accountingEnabled** | **Boolean** | Flag that enables accounting. | [optional] [default to false]
**dirStatsEnabled** | **Boolean** | Flag that enables gathering various directory statistics (e.g. size). It can&#39;t be disabled if accounting is enabled.  | [optional] [default to false]


