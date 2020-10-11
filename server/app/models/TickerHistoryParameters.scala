package models

import play.api.mvc.QueryStringBindable

/*
* @param name Ticker Symbol
* */
case class TickerHistoryQuery (name: String) { }

object TickerHistoryQuery {
  implicit def queryStringBindable(implicit stringBinder: QueryStringBindable[String]) = new QueryStringBindable[TickerHistoryQuery] {
    override def bind(key: String, params: Map[String, Seq[String]]): Option[Either[String, TickerHistoryQuery]] = {
      for {
        name <- stringBinder.bind("name", params)
      } yield {
        (name) match {
          case (Right(name)) => Right(TickerHistoryQuery(name))
          case _ => Left("Unable to bind a Ticker History")
        }
      }
    }

    override def unbind(key: String, ticker: TickerHistoryQuery): String = {
      stringBinder.unbind("name", ticker.name)
    }
  }
}