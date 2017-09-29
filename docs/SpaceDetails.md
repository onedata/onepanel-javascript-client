# Onepanel.SpaceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the space. | 
**name** | **String** | The name of the space. | 
**storageId** | **String** | Id of StorageDetails that supports this space on provider that is associated with this panel.  | 
**localStorages** | **[String]** | The list of IDs of cluster storage resources. | 
**supportingProviders** | **{String: Number}** | The collection of provider IDs with associated supported storage space in bytes.  | 
**mountInRoot** | **Boolean** | Defines whether space will be mounted in / or /{SpaceId}/ path.  | [optional] [default to false]
**storageImport** | [**StorageImportDetails**](StorageImportDetails.md) |  | [optional] 
**storageUpdate** | [**StorageUpdateDetails**](StorageUpdateDetails.md) |  | [optional] 
**filesPopularity** | [**SpaceFilesPopularity**](SpaceFilesPopularity.md) | Configuration of files popularity feature for this space | [optional] 
**autoCleaning** | [**SpaceAutoCleaning**](SpaceAutoCleaning.md) | Configuration of auto cleaning feature for this space | [optional] 


