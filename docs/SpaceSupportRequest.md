# Onepanel.SpaceSupportRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **String** | The token for space creation or support. | 
**size** | **Number** | The storage space size in bytes that provider is willing to assign to the space.  | 
**storageId** | **String** | The ID of the storage resource where the space data should be stored.  | 
**mountInRoot** | **Boolean** | Defines whether space will be mounted in / or /{SpaceId}/ path.  | [optional] [default to false]
**storageImport** | [**StorageImportDetails**](StorageImportDetails.md) |  | [optional] 
**storageUpdate** | [**StorageUpdateDetails**](StorageUpdateDetails.md) |  | [optional] 


