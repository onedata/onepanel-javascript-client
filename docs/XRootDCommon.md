# Onepanel.XRootDCommon

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**url** | **String** | Full URL of the XRootD server, including scheme (root or http) and path, e.g. &#x60;root://192.168.0.1//data&#x60;. Please note, that XRootD URL format requires double slash after host to indicate absolute path.  | [optional] 
**fileModeMask** | **String** | Defines the file permissions mask, which is used to map XRootD file mode to POSIX mode. For instance a fileModeMask &#x60;0664&#x60; for readable file on XRootD would result in a file which is readable for all users, but file which is writeable in XRootD will be only writeable by user and group.  | [optional] [default to &#39;0664&#39;]
**dirModeMask** | **String** | Defines the directory permissions mask, which is used to map XRootD dir mode to POSIX mode. For instance a dirModeMask &#x60;0770&#x60; for readable directory on XRootD would result in a directory which is readable for owner and group but not for others.  | [optional] [default to &#39;0775&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `xrootd` (value: `"xrootd"`)




