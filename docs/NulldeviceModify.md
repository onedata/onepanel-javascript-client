# Onepanel.NulldeviceModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of storage.  &#x60;type &#x3D; \&quot;nulldevice\&quot;&#x60;  POSIX compatible storage which emulates behavior of &#x60;/dev/null&#x60; on local filesystem. Allows running various performance tests, which are not impacted by actual storage latency. Skip storage detection option is obligatory for this type of storage.  | 
**latencyMin** | **Number** | Minimum latency in milliseconds, which should be simulated for selected operations.  | [optional] 
**latencyMax** | **Number** | Maximum latency in milliseconds, which should be simulated for selected operations.  | [optional] 
**timeoutProbability** | **Number** | Probability (0.0, 1.0), with which an operation should return a timeout error.  | [optional] 
**filter** | **String** | Comma-separated list of filesystem operations, for which latency and timeout should be simulated. Empty or &#39;*&#39; mean all operations will be affected.  | [optional] 
**simulatedFilesystemParameters** | **String** | Specifies the parameters for a simulated null device filesystem. For example &#x60;2-2:2-2:0-1&#x60; will generate a filesystem tree which has 2 directories (&#x60;0&#x60; and &#x60;1&#x60;) and 2 files (&#x60;2&#x60; and &#x60;3&#x60;) in the root of the filesystem, each of these directories will have 2 subdirectories (&#x60;0&#x60; and &#x60;1&#x60;) and 2 files (&#x60;2&#x60; and &#x60;3&#x60;) and each of these subdirectories has only a single file (&#x60;0&#x60;). In order to specify the size of generated files, a size in bytes needs to be added as the last component of the parameter specification, for example &#x60;2-2:2-2:0-1:1048576&#x60;. Default empty string disables the simulated filesystem feature.  | [optional] 
**simulatedFilesystemGrowSpeed** | **Number** | Determines the simulated filesystem grow rate. Default 0.0 value will cause all the files and directories defined by the &#x60;simulatedFilesystemParameters&#x60; specification to be visible immediately. For example value of 0.01 will increase the number of the visible filesystem entries by 1 file per 100 seconds, while 100.0 will increase it by 100 files per second.  | [optional] 
**enableDataVerification** | **Boolean** | Enables data verification for &#x60;read&#x60; and &#x60;write&#x60; operations. Read operations will always return a predictable pattern of characters based on &#x60;offset&#x60; and &#x60;size&#x60;, and &#x60;write&#x60; operations will fail with I/O error, if the input data does not match the pattern at a given &#x60;offset&#x60;.  | [optional] [default to false]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `nulldevice` (value: `"nulldevice"`)




