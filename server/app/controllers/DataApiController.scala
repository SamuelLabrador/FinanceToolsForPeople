package controllers

import org.openapitools.OpenApiExceptions
import javax.inject.{Inject, Singleton}
import play.api.libs.json._
import play.api.mvc._
import java.time.OffsetDateTime
import models.StandardResponse

//@javax.annotation.processing.Generated(value = Array("org.openapitools.codegen.languages.ScalaPlayFrameworkServerCodegen"), date = "2020-10-17T19:25:16.064872600-07:00[America/Los_Angeles]")
@Singleton
class DataApiController @Inject()(cc: ControllerComponents, api: DataApi) extends AbstractController(cc) {
  /**
    * GET /data/tickerHistory/:tickerSymbol?resolution=[value]&from=[value]&to=[value]
    * @param tickerSymbol Target ticker symbol for lookup
    */
  def getTickerHistoricalData(tickerSymbol: String): Action[AnyContent] = Action { request =>
    def executeApi(): StandardResponse = {
      val resolution = request.getQueryString("resolution")
        .getOrElse {
  throw new OpenApiExceptions.MissingRequiredParameterException("resolution", "query string")
}

      val from = request.getQueryString("from")
        .map(value => OffsetDateTime.parse(value))
.getOrElse {
  throw new OpenApiExceptions.MissingRequiredParameterException("from", "query string")
}

      val to = request.getQueryString("to")
        .map(value => OffsetDateTime.parse(value))
.getOrElse {
  throw new OpenApiExceptions.MissingRequiredParameterException("to", "query string")
}

      api.getTickerHistoricalData(tickerSymbol, resolution, from, to)
    }

    val result = executeApi()
    val json = Json.toJson(result)
    Ok(json)
  }

  private def splitCollectionParam(paramValues: String, collectionFormat: String): List[String] = {
    val splitBy =
      collectionFormat match {
        case "csv" => ",+"
        case "tsv" => "\t+"
        case "ssv" => " +"
        case "pipes" => "|+"
      }

    paramValues.split(splitBy).toList
  }
}
