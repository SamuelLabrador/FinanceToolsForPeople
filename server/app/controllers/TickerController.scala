package controllers

import javax.inject.Inject
import models.TickerHistoryParameters
import play.api._
import play.api.libs.json.Json
import play.api.mvc._
import play.api.Logger

class TickerController @Inject()(val controllerComponents: ControllerComponents) extends BaseController{
  val logger: Logger = Logger(this.getClass)

  def getTickerHistory(ticker: TickerHistoryParameters) = Action { implicit request: Request[AnyContent] =>

    val value = Json.obj("name" -> ticker.name)
    Ok(value)
  }
}
