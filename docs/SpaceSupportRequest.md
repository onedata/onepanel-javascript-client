# Onepanel.SpaceSupportRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The space name. If this property is provided and space with given name will be created and automatically supported by a provider.  | [optional] 
**token** | **String** | The token for space creation or support. | 
**size** | **Number** | The storage space size in bytes that provider is willing to assign to the space.  | 
**storageName** | **String** | The user defined name of the storage resource, where the space data should be stored. To be used interchangeably with &#x60;storageId&#x60;.  | [optional] 
**storageId** | **String** | The ID of the storage resource where the space data should be stored. To be used interchangeably with &#x60;storageName&#x60;.  | [optional] 
**mountInRoot** | **Boolean** | Defines whether space will be mounted in / or /{SpaceId}/ path.  | [optional] [default to false]


