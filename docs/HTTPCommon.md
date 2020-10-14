# Onepanel.HTTPCommon

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**endpoint** | **String** | Full URL of the HTTP server, including scheme (http or https) and path.  | [optional] 
**verifyServerCertificate** | **Boolean** | Determines whether Oneprovider should verify the certificate of the HTTP server.  | [optional] [default to true]
**authorizationHeader** | **String** | The authorization header to be used for passing the access token. This field can contain any prefix that should be added to the header value. Default is &#x60;Authorization: Bearer {}&#x60;. The token will placed where &#x60;{}&#x60; is provided.  | [optional] [default to &#39;Authorization: Bearer {}&#39;]
**connectionPoolSize** | **Number** | Defines the maximum number of parallel connections for a single HTTP storage.  | [optional] 
**fileMode** | **String** | Defines the file permissions, which files imported from HTTP storage will have in Onedata. Values should be provided in octal format e.g. &#x60;0664&#x60;.  | [optional] [default to &#39;0664&#39;]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `http` (value: `"http"`)




