/**
 * Picanova API
 * Picanova API documentation
 *
 * OpenAPI spec version: 
 * Contact: apirequest@picanova.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2008'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2008'));
  } else {
    // Browser globals (root is window)
    if (!root.PicanovaApi) {
      root.PicanovaApi = {};
    }
    root.PicanovaApi.RegionApi = factory(root.PicanovaApi.ApiClient, root.PicanovaApi.InlineResponse2008);
  }
}(this, function(ApiClient, InlineResponse2008) {
  'use strict';

  /**
   * Region service.
   * @module api/RegionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new RegionApi. 
   * @alias module:api/RegionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the regionsCountryIdGet operation.
     * @callback module:api/RegionApi~regionsCountryIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of regions with name and country_id
     * Get all regions
     * @param {Number} countryId ID of country to return country regions
     * @param {module:api/RegionApi~regionsCountryIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */
    this.regionsCountryIdGet = function(countryId, callback) {
      var postBody = null;

      // verify the required parameter 'countryId' is set
      if (countryId === undefined || countryId === null) {
        throw new Error("Missing the required parameter 'countryId' when calling regionsCountryIdGet");
      }


      var pathParams = {
        'country_id': countryId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/regions/{country_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
