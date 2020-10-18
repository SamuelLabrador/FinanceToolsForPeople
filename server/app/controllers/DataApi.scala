package controllers

import java.time.OffsetDateTime
import models.StandardResponse

//@javax.annotation.processing.Generated(value = Array("org.openapitools.codegen.languages.ScalaPlayFrameworkServerCodegen"), date = "2020-10-17T19:25:16.064872600-07:00[America/Los_Angeles]")
trait DataApi {
  /**
    * Retreives the historical data of a ticker symbol
    * @param tickerSymbol Target ticker symbol for lookup
    * @param resolution Timeframe of ticker data. Supported resolutions: 1, 5, 15, 30, 60, D, W, M
    * @param from The starting point of the ticker data.
    * @param to The endpoint point of the ticker data.
    */
  def getTickerHistoricalData(tickerSymbol: String, resolution: String, from: OffsetDateTime, to: OffsetDateTime): StandardResponse
}
