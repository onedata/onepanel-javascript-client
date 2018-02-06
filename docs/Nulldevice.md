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


