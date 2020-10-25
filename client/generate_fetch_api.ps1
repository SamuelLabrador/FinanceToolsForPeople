# Generate Client Stubs
openapi-generator-cli.cmd generate `
    -i ..\server\target\swagger\swagger.json `
    -g javascript `
    -o ./fetch-client

Set-Location .\fetch-client
Write-Output Installing NPM Dependencies
npm install

Write-Output Packaging module
npm run-script build

Write-Output Linking module
npm link

Set-Location ..\react-client
npm link ftfp_api
