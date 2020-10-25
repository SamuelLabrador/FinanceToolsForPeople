package utilities

import org.ServerConstants.Environment
import javax.inject.Inject
import models.TickerHistory
import play.api.Logger
import play.api.libs.json.{JsError, JsSuccess, JsValue}
import play.api.libs.ws.WSClient

import scala.concurrent.{ExecutionContext, Future}

class FinnhubAPI @Inject ()(implicit val ws: WSClient,
                          implicit val ec: ExecutionContext) {
  val logger: Logger = Logger(this.getClass)
  val baseUrl = "https://finnhub.io/api/v1/"

  def getCandles( symbol: String,
                  resolution: String,
                  from: String,
                  to: String,
                  format: Option[String] = None,
                  adjusted: Option[Boolean] = None
                ): Future[TickerHistory] = {
    for {
      rawResponse <- ws.url(s"$baseUrl/stock/candle").addQueryStringParameters(
      ("token" -> sys.env(Environment.FinnhubApiKey)),
      ("symbol" -> symbol),
      ("resolution" -> resolution),
      ("from" -> from),
      ("to" -> to),
      ("format" -> format.getOrElse("json")),
      ("adjusted" -> adjusted.getOrElse(false).toString)
      ).get()

    } yield {
      val response = rawResponse.json
      logger.trace(response.toString)
      TickerHistory(
        symbol = symbol,
        close = (response \ "c").as[Seq[Float]],
        high = (response \ "h").as[Seq[Float]],
        low = (response \ "l").as[Seq[Float]],
        open = (response \ "o").as[Seq[Float]],
        volume = (response \ "v").as[Seq[Int]],
        timestamp = (response \ "t").as[Seq[Int]]
      )
    }
  }
}
