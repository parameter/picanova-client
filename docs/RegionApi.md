# PicanovaApi.RegionApi

All URIs are relative to *https://localhost/api/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**regionsCountryIdGet**](RegionApi.md#regionsCountryIdGet) | **GET** /regions/{country_id} | Get list of regions with name and country_id


<a name="regionsCountryIdGet"></a>
# **regionsCountryIdGet**
> InlineResponse2008 regionsCountryIdGet(countryId)

Get list of regions with name and country_id

Get all regions

### Example
```javascript
var PicanovaApi = require('picanova_api');
var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PicanovaApi.RegionApi();

var countryId = 56; // Number | ID of country to return country regions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.regionsCountryIdGet(countryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryId** | **Number**| ID of country to return country regions | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

