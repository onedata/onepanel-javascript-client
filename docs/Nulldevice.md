# Onepanel.Nulldevice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latencyMin** | **Number** | Minimum latency in milliseconds, which should be simulated for selected operations.  | [optional] 
**latencyMax** | **Number** | Maximum latency in milliseconds, which should be simulated for selected operations.  | [optional] 
**timeoutProbability** | **Number** | Probability (0.0, 1.0), with which an operation should return a timeout error.  | [optional] [default to 0.0]
**filter** | **String** | Comma-separated list of filesystem operations, for which latency and timeout should be simulated. Empty or &#39;*&#39; mean all operations will be affected.  | [optional] [default to &#39;*&#39;]
**timeout** | **Number** | Storage operation timeout in milliseconds. | [optional] 
**readonly** | **Boolean** | Defines whether storage is readonly. | [optional] [default to false]
**storagePathType** | **String** | Determines how the logical file paths will be mapped on the storage. &#39;canonical&#39; paths reflect the logical file names and directory structure, however each rename operation will require renaming the files on the storage. &#39;flat&#39; paths are based on unique file UUID&#39;s and do not require on-storage rename when logical file name is changed.  | [optional] [default to &#39;canonical&#39;]


