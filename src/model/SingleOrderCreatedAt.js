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
    root.PicanovaApi.SingleOrderCreatedAt = factory(root.PicanovaApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SingleOrderCreatedAt model module.
   * @module model/SingleOrderCreatedAt
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SingleOrderCreatedAt</code>.
   * @alias module:model/SingleOrderCreatedAt
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SingleOrderCreatedAt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SingleOrderCreatedAt} obj Optional instance to populate.
   * @return {module:model/SingleOrderCreatedAt} The populated <code>SingleOrderCreatedAt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('timezone_type')) {
        obj['timezone_type'] = ApiClient.convertToType(data['timezone_type'], 'Number');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} timezone_type
   */
  exports.prototype['timezone_type'] = undefined;
  /**
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;



  return exports;
}));

