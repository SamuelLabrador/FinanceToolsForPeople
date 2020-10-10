package models

import play.api.mvc.QueryStringBindable

case class TickerHistoryParameters (name: String) { }

object TickerHistoryParameters {
  implicit def queryStringBindable(implicit stringBinder: QueryStringBindable[String]) = new QueryStringBindable[TickerHistoryParameters] {
    override def bind(key: String, params: Map[String, Seq[String]]): Option[Either[String, TickerHistoryParameters]] = {
      for {
        name <- stringBinder.bind("name", params)
      } yield {
        (name) match {
          case (Right(name)) => Right(TickerHistoryParameters(name))
          case _ => Left("Unable to bind a Ticker History")
        }
      }
    }

    override def unbind(key: String, ticker: TickerHistoryParameters): String = {
      stringBinder.unbind("name", ticker.name)
    }
  }
}