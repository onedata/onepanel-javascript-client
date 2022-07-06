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
**accountingEnabled** | **Boolean** | Indicates if accounting is enabled. The accounting mechanism utilizes directory  statistics to keep track of quota usage within a space for the corresponding  supporting provider.  | 
**dirStatsServiceEnabled** | **Boolean** | Indicates if the directory statistics service is enabled.  The service gathers statistics concerning logical and physical directory size, file count and update times. It cannot be disabled if accounting is enabled.  | 
**dirStatsServiceStatus** | **String** | Current status of directory statistics service. | 


<a name="DirStatsServiceStatusEnum"></a>
## Enum: DirStatsServiceStatusEnum


* `initializing` (value: `"initializing"`)

* `enabled` (value: `"enabled"`)

* `stopping` (value: `"stopping"`)

* `disabled` (value: `"disabled"`)




