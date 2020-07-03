# Onepanel.XRootD

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage. | 
**url** | **String** | Full URL of the XRootD server, including scheme (root or http) and path, e.g. &#x60;root://192.168.0.1//data&#x60;. Please note, that XRootD URL format requires double slash after host to indicate absolute path.  | 
**fileModeMask** | **String** | Defines the file permissions mask, which is used to map XRootD file mode to POSIX mode. For instance a fileModeMask &#x60;0664&#x60; for readable file on XRootD would result in a file which is readable for all users, but file which is writeable in XRootD will be only writeble by user and group.  | [optional] [default to &#39;0664&#39;]
**dirModeMask** | **String** | Defines the file permissions mask, which is used to map XRootD file mode to POSIX mode. For instance a fileModeMask &#x60;0660&#x60; for readable file on XRootD would result in a file which is readable for owners and group but not for others.  | [optional] [default to &#39;0775&#39;]
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;canonical&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `xrootd` (value: `"xrootd"`)




