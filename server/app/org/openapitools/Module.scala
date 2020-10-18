package org.openapitools

import controllers._
import play.api.inject.{Binding, Module => PlayModule}
import play.api.{Configuration, Environment}

//@javax.annotation.processing.Generated(value = Array("org.openapitools.codegen.languages.ScalaPlayFrameworkServerCodegen"), date = "2020-10-17T19:14:19.967939700-07:00[America/Los_Angeles]")
class Module extends PlayModule {
  override def bindings(environment: Environment, configuration: Configuration): Seq[Binding[_]] = Seq(
    bind[DataApi].to[DataApiImpl]
  )
}
