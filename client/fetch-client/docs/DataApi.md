# FtfpApi.DataApi

All URIs are relative to *http://localhost:9000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTickerHistory**](DataApi.md#getTickerHistory) | **POST** /data/tickerHistory | Get ticker history



## getTickerHistory

> ModelsTickerHistory getTickerHistory(opts)

Get ticker history

### Example

```javascript
import FtfpApi from 'ftfp_api';

let apiInstance = new FtfpApi.DataApi();
let opts = {
  'body': new FtfpApi.ModelsTickerHistoryQuery() // ModelsTickerHistoryQuery | 
};
apiInstance.getTickerHistory(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsTickerHistoryQuery**](ModelsTickerHistoryQuery.md)|  | [optional] 

### Return type

[**ModelsTickerHistory**](ModelsTickerHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

