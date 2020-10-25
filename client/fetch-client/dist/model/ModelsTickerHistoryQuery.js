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
 * The ModelsTickerHistoryQuery model module.
 * @module model/ModelsTickerHistoryQuery
 * @version 0.0.1
 */
var ModelsTickerHistoryQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelsTickerHistoryQuery</code>.
   * @alias module:model/ModelsTickerHistoryQuery
   * @param symbol {String} 
   * @param resolution {String} 
   * @param from {String} 
   * @param to {String} 
   */
  function ModelsTickerHistoryQuery(symbol, resolution, from, to) {
    _classCallCheck(this, ModelsTickerHistoryQuery);

    ModelsTickerHistoryQuery.initialize(this, symbol, resolution, from, to);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelsTickerHistoryQuery, null, [{
    key: "initialize",
    value: function initialize(obj, symbol, resolution, from, to) {
      obj['symbol'] = symbol;
      obj['resolution'] = resolution;
      obj['from'] = from;
      obj['to'] = to;
    }
    /**
     * Constructs a <code>ModelsTickerHistoryQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsTickerHistoryQuery} obj Optional instance to populate.
     * @return {module:model/ModelsTickerHistoryQuery} The populated <code>ModelsTickerHistoryQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelsTickerHistoryQuery();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('resolution')) {
          obj['resolution'] = _ApiClient["default"].convertToType(data['resolution'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModelsTickerHistoryQuery;
}();
/**
 * @member {String} symbol
 */


ModelsTickerHistoryQuery.prototype['symbol'] = undefined;
/**
 * @member {String} resolution
 */

ModelsTickerHistoryQuery.prototype['resolution'] = undefined;
/**
 * @member {String} from
 */

ModelsTickerHistoryQuery.prototype['from'] = undefined;
/**
 * @member {String} to
 */

ModelsTickerHistoryQuery.prototype['to'] = undefined;
var _default = ModelsTickerHistoryQuery;
exports["default"] = _default;