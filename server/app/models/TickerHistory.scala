package models

import play.api.http.Writeable
import play.api.libs.functional.syntax._
import play.api.libs.json._
import play.api.mvc.Result

case class TickerHistory (  symbol: String,
                            close: Seq[Float],
                            high: Seq[Float],
                            low: Seq[Float],
                            open: Seq[Float],
                            volume: Seq[Int],
                            timestamp: Seq[Int]
                            ) { }

object TickerHistory {
//  implicit val tickerHistoryWrites: Writes[TickerHistory] = (
//    (JsPath \ "symbol").write[String] and
//      (JsPath \ "close").write[Seq[Float]] and
//      (JsPath \ "high").write[Seq[Float]] and
//      (JsPath \ "low").write[Seq[Float]] and
//      (JsPath \ "open").write[Seq[Float]] and
//      (JsPath \ "volume").write[Seq[Int]] and
//      (JsPath \ "timestamp").write[Seq[Int]]
//  )(unlift(TickerHistory.unapply))

  implicit val jsonWrites: Writes[TickerHistory] = Json.writes[TickerHistory]
  implicit val format = Json.format[TickerHistory]

}

