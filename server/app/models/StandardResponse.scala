package models

import play.api.libs.json._

///**
//  * Represents the Swagger definition for StandardResponse.
//  */
//@javax.annotation.processing.Generated(value = Array("org.openapitools.codegen.languages.ScalaPlayFrameworkServerCodegen"), date = "2020-10-17T19:14:19.967939700-07:00[America/Los_Angeles]")
case class StandardResponse(
  response: Option[Int],
  data: Option[String]
)

object StandardResponse {
  implicit lazy val standardResponseJsonFormat: Format[StandardResponse] = Json.format[StandardResponse]
}

