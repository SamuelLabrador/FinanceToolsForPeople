"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ApiClient", {
  enumerable: true,
  get: function get() {
    return _ApiClient["default"];
  }
});
Object.defineProperty(exports, "ModelsTickerHistory", {
  enumerable: true,
  get: function get() {
    return _ModelsTickerHistory["default"];
  }
});
Object.defineProperty(exports, "ModelsTickerHistoryQuery", {
  enumerable: true,
  get: function get() {
    return _ModelsTickerHistoryQuery["default"];
  }
});
Object.defineProperty(exports, "DataApi", {
  enumerable: true,
  get: function get() {
    return _DataApi["default"];
  }
});

var _ApiClient = _interopRequireDefault(require("./ApiClient"));

var _ModelsTickerHistory = _interopRequireDefault(require("./model/ModelsTickerHistory"));

var _ModelsTickerHistoryQuery = _interopRequireDefault(require("./model/ModelsTickerHistoryQuery"));

var _DataApi = _interopRequireDefault(require("./api/DataApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }