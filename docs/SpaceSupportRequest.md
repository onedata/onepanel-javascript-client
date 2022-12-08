# Onepanel.SpaceSupportRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **String** | The token for space creation or support. | 
**size** | **Number** | The storage space size in bytes that provider is willing to assign to the space.  | 
**storageId** | **String** | The Id of the storage resource where the space data should be stored.  | 
**storageImport** | [**StorageImport**](StorageImport.md) |  | [optional] 
**accountingEnabled** | **Boolean** | Indicates if accounting is enabled. The accounting mechanism utilizes directory  statistics to keep track of quota usage within a space for the corresponding  supporting provider.  | [optional] [default to false]
**dirStatsServiceEnabled** | **Boolean** | Indicates if the directory statistics service is enabled.  The service gathers statistics concerning logical and physical directory size, file count and update times. It cannot be disabled if accounting is enabled.  | [optional] [default to true]


