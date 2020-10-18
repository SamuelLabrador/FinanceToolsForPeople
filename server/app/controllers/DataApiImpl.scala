package controllers

import java.time.OffsetDateTime
import models.StandardResponse

///**
//  * Provides a default implementation for [[DataApi]].
//  */
//@javax.annotation.processing.Generated(value = Array("org.openapitools.codegen.languages.ScalaPlayFrameworkServerCodegen"), date = "2020-10-17T19:25:16.064872600-07:00[America/Los_Angeles]")
class DataApiImpl extends DataApi {
  /**
    * @inheritdoc
    */
  override def getTickerHistoricalData(tickerSymbol: String, resolution: String, from: OffsetDateTime, to: OffsetDateTime): StandardResponse = {
    // TODO: Implement better logic

    StandardResponse(None, None)
  }
}
