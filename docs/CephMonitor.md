# Onepanel.CephMonitor

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **String** | Host on which given mon should be deployed. There may be only one monitor per host. Attempts at creating additional monitors at the same host will be skipped. | 
**ip** | **String** | Local IP to be used for communication between Ceph nodes. If not specified it will be autodetected. | [optional] 
**id** | **String** | Monitor identifier. Be default the hostname is used. Must be specified if more than one monitor is deployed at a host. | [optional] 


