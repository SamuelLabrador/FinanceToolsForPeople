openapi-generator-cli.cmd generate `
    -g scala-play-server `
    -o ../generated_code/ `
    -i ./swagger.json `
    -c ./config.json

# Copy-Item ../output/server_code/*../../server -r