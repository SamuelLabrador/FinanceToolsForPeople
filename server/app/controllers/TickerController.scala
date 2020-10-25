package controllers

import javax.inject.Inject
import models.TickerHistoryQuery
import play.api.Logger
import play.api.libs.json.{JsError, JsSuccess, Json}
import play.api.libs.ws.WSClient
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}
import utilities.FinnhubAPI

import scala.concurrent.{ExecutionContext, Future}

// Possibly implement custom execution context

class TickerController @Inject()( implicit val ws: WSClient,
                                  implicit val ec: ExecutionContext,
                                  val controllerComponents: ControllerComponents) extends BaseController {

  val logger: Logger = Logger(this.getClass)

  def getTickerHistory(): Action[AnyContent] = Action.async { request =>
    logger.trace(s"GetTickerHistory request body: ${request.body.asJson}")

    val query = request.body.asJson.get.validate[TickerHistoryQuery] match {
      case JsSuccess(value, _) => value
      case e: JsError => throw new Exception(s"Could not parse query: ${JsError.toJson(e)}")
    }

    val api = new FinnhubAPI()
    val result = api.getCandles(query.symbol, query.resolution, query.from, query.to)

    result.map(response => Ok(Json.toJson(response)))
  }
}
