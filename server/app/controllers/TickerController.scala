package controllers

import akka.actor.ActorSystem
import javax.inject.Inject
import models.TickerHistoryQuery
import play.api.Logger
import play.api.libs.concurrent.CustomExecutionContext
import play.api.libs.ws.WSClient
import play.api.mvc.{BaseController, ControllerComponents}
import utilities.FinnhubAPI

import scala.concurrent.{ExecutionContext, Future}

// TODO Implement custom execution context
//trait TickerControllerExecutionContext extends ExecutionContext
//
//class TickerControllerExecutionContextImpl @Inject() (system: ActorSystem)
//  extends CustomExecutionContext(system, "TickerController.executor")
//  with TickerControllerExecutionContext

class TickerController @Inject()( implicit val ws: WSClient,
                                  implicit val ec: ExecutionContext,
                                  val controllerComponents: ControllerComponents) extends BaseController{
  val logger: Logger = Logger(this.getClass)


  def getTickerHistory(ticker: TickerHistoryQuery) = Action.async { request =>
    val api = new FinnhubAPI()
    val result = api.getCandles(ticker.name, "1", "1572651390", "1572910590")
    result.map(response => Ok(response.toString))

  }
}
