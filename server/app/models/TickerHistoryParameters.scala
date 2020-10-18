package models

import play.api.mvc.QueryStringBindable

/*
* @param name Ticker Symbol
* */
case class TickerHistoryQuery ( name: String,
                                resolution: String,
                                from: String,
                                to: String) { }

object TickerHistoryQuery {
  implicit def queryStringBindable( implicit stringBinder: QueryStringBindable[String]) = new QueryStringBindable[TickerHistoryQuery] {
    override def bind(key: String, params: Map[String, Seq[String]]): Option[Either[String, TickerHistoryQuery]] = {
      for {
        name <- stringBinder.bind("name", params)
        resolution <- stringBinder.bind("resolution", params)
        from <- stringBinder.bind("from", params)
        to <- stringBinder.bind("to", params)
      } yield {
        (name, resolution, from, to) match {
          case (Right(name), Right(resolution), Right(from), Right(to)) => Right(TickerHistoryQuery(name, resolution, from, to))
          case _ => Left("Unable to bind a Ticker History")
        }
      }
    }

    override def unbind(key: String, ticker: TickerHistoryQuery): String = {
      stringBinder.unbind("name", ticker.name)
      stringBinder.unbind("resolution", ticker.resolution)
      stringBinder.unbind("from", ticker.from)
      stringBinder.unbind("to", ticker.to)
    }
  }
}