package models

import play.api.libs.json.Json

case class TickerHistoryQuery ( symbol: String,
                                resolution: String,
                                from: String,
                                to: String) { }

object TickerHistoryQuery {
  implicit val fmt = Json.format[TickerHistoryQuery]
}