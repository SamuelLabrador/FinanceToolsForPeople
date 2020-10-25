organization := "com.ftfp"
version      := "1.0-SNAPSHOT"
name         := "server"
scalaVersion := "2.12.6"

lazy val root = (project in file(".")).enablePlugins(PlayScala, SwaggerPlugin) //enable plugin

libraryDependencies ++= Seq(
  guice,
  ws,
  "org.webjars"             %   "swagger-ui"          % "3.1.5",
  "org.scalatest"           %%  "scalatest"           % "3.0.4" % Test,
  "org.scalatestplus.play"  %%  "scalatestplus-play"  % "3.1.2" % Test,
  "com.iheart"              %% "play-swagger"         % "0.10.0-PLAY2.8"
)

swaggerDomainNameSpaces := Seq("models")
