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
    root.PicanovaApi.SingleOrderTotalsShippingAmountDetails = factory(root.PicanovaApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SingleOrderTotalsShippingAmountDetails model module.
   * @module model/SingleOrderTotalsShippingAmountDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SingleOrderTotalsShippingAmountDetails</code>.
   * @alias module:model/SingleOrderTotalsShippingAmountDetails
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SingleOrderTotalsShippingAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SingleOrderTotalsShippingAmountDetails} obj Optional instance to populate.
   * @return {module:model/SingleOrderTotalsShippingAmountDetails} The populated <code>SingleOrderTotalsShippingAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('formatted')) {
        obj['formatted'] = ApiClient.convertToType(data['formatted'], 'String');
      }
      if (data.hasOwnProperty('in_subunit')) {
        obj['in_subunit'] = ApiClient.convertToType(data['in_subunit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {String} formatted
   */
  exports.prototype['formatted'] = undefined;
  /**
   * @member {Number} in_subunit
   */
  exports.prototype['in_subunit'] = undefined;



  return exports;
}));


