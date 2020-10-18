package controllers

import javax.inject.Inject
import models.TickerHistoryQuery
import play.api.Logger
import play.api.libs.ws.WSClient
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}
import utilities.FinnhubAPI

import scala.concurrent.ExecutionContext

// TODO Implement custom execution context

class TickerController @Inject()( implicit val ws: WSClient,
                                  implicit val ec: ExecutionContext,
                                  val controllerComponents: ControllerComponents) extends BaseController{
  val logger: Logger = Logger(this.getClass)

  def getTickerHistory(ticker: TickerHistoryQuery): Action[AnyContent] = Action.async {
    val api = new FinnhubAPI()
    val result = api.getCandles(ticker.name, ticker.resolution, ticker.from, ticker.to)
    result.map(response => Ok(response))
  }
}
