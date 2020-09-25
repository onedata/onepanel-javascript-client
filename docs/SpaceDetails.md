# Onepanel.SpaceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Id of the space. | 
**name** | **String** | The name of the space. | 
**storageId** | **String** | Id of storage that supports this space on provider that is associated with this panel.  | 
**localStorages** | **[String]** | The list of IDs of cluster storage resources. | 
**supportingProviders** | **{String: Number}** | The collection of provider IDs with associated supported storage space in bytes.  | 
**storageImport** | [**StorageImport**](StorageImport.md) |  | [optional] 
**spaceOccupancy** | **Number** | Amount of storage [b] used by data from given space on that storage. | 


