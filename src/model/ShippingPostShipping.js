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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PicanovaApi) {
      root.PicanovaApi = {};
    }
    root.PicanovaApi.ShippingPostShipping = factory(root.PicanovaApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ShippingPostShipping model module.
   * @module model/ShippingPostShipping
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ShippingPostShipping</code>.
   * @alias module:model/ShippingPostShipping
   * @class
   * @param country {Number} Please use /beta/countries to get country id value
   */
  var exports = function(country) {
    var _this = this;

    _this['country'] = country;
  };

  /**
   * Constructs a <code>ShippingPostShipping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShippingPostShipping} obj Optional instance to populate.
   * @return {module:model/ShippingPostShipping} The populated <code>ShippingPostShipping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Please use /beta/countries to get country id value
   * @member {Number} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


