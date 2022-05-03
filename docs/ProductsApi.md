# PicanovaApi.ProductsApi

All URIs are relative to *https://localhost/api/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsGet**](ProductsApi.md#productsGet) | **GET** /products | Show products
[**productsProductIdGet**](ProductsApi.md#productsProductIdGet) | **GET** /products/{product_id} | Show product&#39;s variants


<a name="productsGet"></a>
# **productsGet**
> InlineResponse2005 productsGet()

Show products

Get all products

### Example
```javascript
var PicanovaApi = require('picanova_api');
var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PicanovaApi.ProductsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productsProductIdGet"></a>
# **productsProductIdGet**
> InlineResponse2006 productsProductIdGet(productId)

Show product&#39;s variants

Get all of product&#39;s variants.&lt;br /&gt;The product_id can be checked at &#x60;/api/beta/products&#x60; &lt;br /&gt;&lt;br /&gt; Fields &lt;strong&gt;id&lt;/strong&gt; and &lt;strong&gt;code&lt;/strong&gt; will be deprecated soon, please use &lt;strong&gt;variant_id&lt;/strong&gt; and &lt;strong&gt;variant_code&lt;/strong&gt; fields instead

### Example
```javascript
var PicanovaApi = require('picanova_api');
var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PicanovaApi.ProductsApi();

var productId = 56; // Number | ID of product to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productsProductIdGet(productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| ID of product to return | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

