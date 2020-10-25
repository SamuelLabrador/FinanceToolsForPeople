"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModelsTickerHistory model module.
 * @module model/ModelsTickerHistory
 * @version 0.0.1
 */
var ModelsTickerHistory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelsTickerHistory</code>.
   * @alias module:model/ModelsTickerHistory
   * @param symbol {String} 
   * @param close {Array.<Number>} 
   * @param high {Array.<Number>} 
   * @param low {Array.<Number>} 
   * @param open {Array.<Number>} 
   * @param volume {Array.<Number>} 
   * @param timestamp {Array.<Number>} 
   */
  function ModelsTickerHistory(symbol, close, high, low, open, volume, timestamp) {
    _classCallCheck(this, ModelsTickerHistory);

    ModelsTickerHistory.initialize(this, symbol, close, high, low, open, volume, timestamp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelsTickerHistory, null, [{
    key: "initialize",
    value: function initialize(obj, symbol, close, high, low, open, volume, timestamp) {
      obj['symbol'] = symbol;
      obj['close'] = close;
      obj['high'] = high;
      obj['low'] = low;
      obj['open'] = open;
      obj['volume'] = volume;
      obj['timestamp'] = timestamp;
    }
    /**
     * Constructs a <code>ModelsTickerHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsTickerHistory} obj Optional instance to populate.
     * @return {module:model/ModelsTickerHistory} The populated <code>ModelsTickerHistory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelsTickerHistory();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('close')) {
          obj['close'] = _ApiClient["default"].convertToType(data['close'], ['Number']);
        }

        if (data.hasOwnProperty('high')) {
          obj['high'] = _ApiClient["default"].convertToType(data['high'], ['Number']);
        }

        if (data.hasOwnProperty('low')) {
          obj['low'] = _ApiClient["default"].convertToType(data['low'], ['Number']);
        }

        if (data.hasOwnProperty('open')) {
          obj['open'] = _ApiClient["default"].convertToType(data['open'], ['Number']);
        }

        if (data.hasOwnProperty('volume')) {
          obj['volume'] = _ApiClient["default"].convertToType(data['volume'], ['Number']);
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return ModelsTickerHistory;
}();
/**
 * @member {String} symbol
 */


ModelsTickerHistory.prototype['symbol'] = undefined;
/**
 * @member {Array.<Number>} close
 */

ModelsTickerHistory.prototype['close'] = undefined;
/**
 * @member {Array.<Number>} high
 */

ModelsTickerHistory.prototype['high'] = undefined;
/**
 * @member {Array.<Number>} low
 */

ModelsTickerHistory.prototype['low'] = undefined;
/**
 * @member {Array.<Number>} open
 */

ModelsTickerHistory.prototype['open'] = undefined;
/**
 * @member {Array.<Number>} volume
 */

ModelsTickerHistory.prototype['volume'] = undefined;
/**
 * @member {Array.<Number>} timestamp
 */

ModelsTickerHistory.prototype['timestamp'] = undefined;
var _default = ModelsTickerHistory;
exports["default"] = _default;