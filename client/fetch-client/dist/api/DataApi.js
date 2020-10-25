"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelsTickerHistory = _interopRequireDefault(require("../model/ModelsTickerHistory"));

var _ModelsTickerHistoryQuery = _interopRequireDefault(require("../model/ModelsTickerHistoryQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Data service.
* @module api/DataApi
* @version 0.0.1
*/
var DataApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DataApi. 
  * @alias module:api/DataApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DataApi(apiClient) {
    _classCallCheck(this, DataApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getTickerHistory operation.
   * @callback module:api/DataApi~getTickerHistoryCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ModelsTickerHistory} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get ticker history
   * @param {Object} opts Optional parameters
   * @param {module:model/ModelsTickerHistoryQuery} opts.body 
   * @param {module:api/DataApi~getTickerHistoryCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ModelsTickerHistory}
   */


  _createClass(DataApi, [{
    key: "getTickerHistory",
    value: function getTickerHistory(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelsTickerHistory["default"];
      return this.apiClient.callApi('/data/tickerHistory', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DataApi;
}();

exports["default"] = DataApi;