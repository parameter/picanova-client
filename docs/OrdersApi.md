# PicanovaApi.OrdersApi

All URIs are relative to *https://localhost/api/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ordersGet**](OrdersApi.md#ordersGet) | **GET** /orders | Show a list of all orders
[**ordersOrderIdDelete**](OrdersApi.md#ordersOrderIdDelete) | **DELETE** /orders/{order_id} | Cancel an order
[**ordersOrderIdGet**](OrdersApi.md#ordersOrderIdGet) | **GET** /orders/{order_id} | Show an order
[**ordersPost**](OrdersApi.md#ordersPost) | **POST** /orders | Create an order


<a name="ordersGet"></a>
# **ordersGet**
> InlineResponse2003 ordersGet()

Show a list of all orders

Get all orders

### Example
```javascript
var PicanovaApi = require('picanova_api');
var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PicanovaApi.OrdersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ordersOrderIdDelete"></a>
# **ordersOrderIdDelete**
> ordersOrderIdDelete(orderId)

Cancel an order

Cancels an order

### Example
```javascript
var PicanovaApi = require('picanova_api');
var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PicanovaApi.OrdersApi();

var orderId = "orderId_example"; // String | ID of order


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.ordersOrderIdDelete(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| ID of order | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ordersOrderIdGet"></a>
# **ordersOrderIdGet**
> InlineResponse2004 ordersOrderIdGet(orderId)

Show an order

Get the given order

### Example
```javascript
var PicanovaApi = require('picanova_api');
var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PicanovaApi.OrdersApi();

var orderId = "orderId_example"; // String | ID of order to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersOrderIdGet(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| ID of order to return | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ordersPost"></a>
# **ordersPost**
> InlineResponse2004 ordersPost(body)

Create an order

Creates an order and returns it.

### Example
```javascript
var PicanovaApi = require('picanova_api');
var defaultClient = PicanovaApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new PicanovaApi.OrdersApi();

var body = new PicanovaApi.OrderPost(); // OrderPost | `external_id` (optional) if it is set, it must be unique identifier for your orders. `is_test` (optional) when value is set to `true`, the order will be created as a TEST Order (PPOXXXXXXXXT) and will NOT be produced or shipped. When the store is in sandbox mode, all orders are created as TEST Orders regardless of the value sent in this field. `shipping_method` must be valid for the shipping country and the items listed in the order. See the guideline above: <a  data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#calculate-shipping-guide-modal\" href=\"javascript:void(0);\">Guide to calculate shipping rate/method</a> to find out which shipping methods are valid for the given combination of values. Failure to choose a correct shipping method will result in an error. `customs_shipping_costs` (optional) This value is used to print the shipping costs shown on the Customs Declaration Papers when a shippemnt is sent to NON-EU countries. The value to place here is the retail shipping price you charged your end customer. It is always used in combination with items' `custom_value`.  `shipping` object contains the address and required information about end customer. There is no need of billing address. `email` (optional) end customer's email address `firstname` end customer's name. `lastname` end customer's last/family name. `company` (optional) end customer's company name when the end customer is ordering on behalf of a company. `street_primary` end customer's street name and house number. `street_secondary` (optional) additional address. `city` end customers's city name. `postcode` end customer's postal/zip code. `country_id` end customer's country - ISO 3166-1 numeric-3 OR `country_code` - ISO 3166-1 alpha-2 standards `region_id` (required for US and Canada) end customer's state name - ANSI INCITS 38:2009 digit-2. It should be used in combination with `country_id`. The list of regions/states can be checked at `/regions/{country_id}`. `region_code` It should be used in combination with `country_code` - ANSI INCITS 38:2009 alpha-2. The list of regions/states can be checked at `/regions/{country_id}`. `telephone` (optional) end customer's phone number - used in case of any problems during delivery by the shipment provider.  `items` is an array with one or more item objects `customs_value` (optional) This value will be used to print the net item cost shown on the Customs Declaration Papers when a shippemnt is sent to NON-EU countries. The value to place here is the net retail selling price you charged your end customer. It is always used in combination with order's `customs_shipping_costs`. `quantity` The number of copies to produce of this particular item `variant_code` is the identifier of which product variant this item is, for example \"DIGI-40X30-1\" is for a 40x30 cm canvas. See the guideline above: <a data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#get-variant-guide-modal\" href=\"javascript:void(0);\">Guide to get a product variant</a> to find out which code/id to use. `variant_id` can be used alternatively in place of `variant_code` but only ONE of them should be used, failing to do so will result in error or create wrong orders. For example variant id \"3\" identifies the same 40x30 cm canvas as variant code \"DIGI-40X30-1\" does. See the guideline above: <a data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#get-variant-guide-modal\" href=\"javascript:void(0);\">Guide to get a product variant</a> to find out which code/id to use. `file` is the URL to the print file for this particular item. See more detailed about the file format, resolution and aspect ratio in the \"Print Files\" section below.  `options` is list with one or more options set for a product variant. Some product variant have required options, for example all canvas variants have 2 required options (\"Canvas border\" and \"Stretcher frame\"). The key and value of an option can either be their ids or their names. For example, the option \"Canvas border\" option can be added like`'Canvas border':'Stretched'` (using names) or can be alternatively added `\"1\" : 3` (using ids). The names for keys and values are case-sensitive. The list of options for every variant can be checked at guideline above: <a data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#get-variant-guide-modal\" href=\"javascript:void(0);\">Guide to get a product variant and details</a>


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderPost**](OrderPost.md)| &#x60;external_id&#x60; (optional) if it is set, it must be unique identifier for your orders. &#x60;is_test&#x60; (optional) when value is set to &#x60;true&#x60;, the order will be created as a TEST Order (PPOXXXXXXXXT) and will NOT be produced or shipped. When the store is in sandbox mode, all orders are created as TEST Orders regardless of the value sent in this field. &#x60;shipping_method&#x60; must be valid for the shipping country and the items listed in the order. See the guideline above: &lt;a  data-dismiss&#x3D;\&quot;modal\&quot; data-toggle&#x3D;\&quot;modal\&quot; data-target&#x3D;\&quot;#calculate-shipping-guide-modal\&quot; href&#x3D;\&quot;javascript:void(0);\&quot;&gt;Guide to calculate shipping rate/method&lt;/a&gt; to find out which shipping methods are valid for the given combination of values. Failure to choose a correct shipping method will result in an error. &#x60;customs_shipping_costs&#x60; (optional) This value is used to print the shipping costs shown on the Customs Declaration Papers when a shippemnt is sent to NON-EU countries. The value to place here is the retail shipping price you charged your end customer. It is always used in combination with items&#39; &#x60;custom_value&#x60;.  &#x60;shipping&#x60; object contains the address and required information about end customer. There is no need of billing address. &#x60;email&#x60; (optional) end customer&#39;s email address &#x60;firstname&#x60; end customer&#39;s name. &#x60;lastname&#x60; end customer&#39;s last/family name. &#x60;company&#x60; (optional) end customer&#39;s company name when the end customer is ordering on behalf of a company. &#x60;street_primary&#x60; end customer&#39;s street name and house number. &#x60;street_secondary&#x60; (optional) additional address. &#x60;city&#x60; end customers&#39;s city name. &#x60;postcode&#x60; end customer&#39;s postal/zip code. &#x60;country_id&#x60; end customer&#39;s country - ISO 3166-1 numeric-3 OR &#x60;country_code&#x60; - ISO 3166-1 alpha-2 standards &#x60;region_id&#x60; (required for US and Canada) end customer&#39;s state name - ANSI INCITS 38:2009 digit-2. It should be used in combination with &#x60;country_id&#x60;. The list of regions/states can be checked at &#x60;/regions/{country_id}&#x60;. &#x60;region_code&#x60; It should be used in combination with &#x60;country_code&#x60; - ANSI INCITS 38:2009 alpha-2. The list of regions/states can be checked at &#x60;/regions/{country_id}&#x60;. &#x60;telephone&#x60; (optional) end customer&#39;s phone number - used in case of any problems during delivery by the shipment provider.  &#x60;items&#x60; is an array with one or more item objects &#x60;customs_value&#x60; (optional) This value will be used to print the net item cost shown on the Customs Declaration Papers when a shippemnt is sent to NON-EU countries. The value to place here is the net retail selling price you charged your end customer. It is always used in combination with order&#39;s &#x60;customs_shipping_costs&#x60;. &#x60;quantity&#x60; The number of copies to produce of this particular item &#x60;variant_code&#x60; is the identifier of which product variant this item is, for example \&quot;DIGI-40X30-1\&quot; is for a 40x30 cm canvas. See the guideline above: &lt;a data-dismiss&#x3D;\&quot;modal\&quot; data-toggle&#x3D;\&quot;modal\&quot; data-target&#x3D;\&quot;#get-variant-guide-modal\&quot; href&#x3D;\&quot;javascript:void(0);\&quot;&gt;Guide to get a product variant&lt;/a&gt; to find out which code/id to use. &#x60;variant_id&#x60; can be used alternatively in place of &#x60;variant_code&#x60; but only ONE of them should be used, failing to do so will result in error or create wrong orders. For example variant id \&quot;3\&quot; identifies the same 40x30 cm canvas as variant code \&quot;DIGI-40X30-1\&quot; does. See the guideline above: &lt;a data-dismiss&#x3D;\&quot;modal\&quot; data-toggle&#x3D;\&quot;modal\&quot; data-target&#x3D;\&quot;#get-variant-guide-modal\&quot; href&#x3D;\&quot;javascript:void(0);\&quot;&gt;Guide to get a product variant&lt;/a&gt; to find out which code/id to use. &#x60;file&#x60; is the URL to the print file for this particular item. See more detailed about the file format, resolution and aspect ratio in the \&quot;Print Files\&quot; section below.  &#x60;options&#x60; is list with one or more options set for a product variant. Some product variant have required options, for example all canvas variants have 2 required options (\&quot;Canvas border\&quot; and \&quot;Stretcher frame\&quot;). The key and value of an option can either be their ids or their names. For example, the option \&quot;Canvas border\&quot; option can be added like&#x60;&#39;Canvas border&#39;:&#39;Stretched&#39;&#x60; (using names) or can be alternatively added &#x60;\&quot;1\&quot; : 3&#x60; (using ids). The names for keys and values are case-sensitive. The list of options for every variant can be checked at guideline above: &lt;a data-dismiss&#x3D;\&quot;modal\&quot; data-toggle&#x3D;\&quot;modal\&quot; data-target&#x3D;\&quot;#get-variant-guide-modal\&quot; href&#x3D;\&quot;javascript:void(0);\&quot;&gt;Guide to get a product variant and details&lt;/a&gt; | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

