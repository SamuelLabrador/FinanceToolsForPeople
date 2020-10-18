package utilities

import Constants.ServerConstants.Environment
import javax.inject.Inject
import play.api.Logger
import play.api.libs.json.JsValue
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
                ): Future[JsValue] = {

    ws.url(s"$baseUrl/stock/candle").addQueryStringParameters(
      ("token" -> sys.env(Environment.FinnhubApiKey)),
      ("symbol" -> symbol),
      ("resolution" -> resolution),
      ("from" -> from),
      ("to" -> to),
      ("format" -> format.getOrElse("json")),
      ("adjusted" -> adjusted.getOrElse(false).toString)
    ).get().map(response => response.json)
  }
}
