/**
 * 下面展示呼叫一個公開SOAP服務的範例
 * WSDL是由工研院tts服務提供
 */
var soap = require('soap');

/**
 * WSDL位置
 */
var wsdl = 'http://tts.itri.org.tw/TTSService/Soap_1_3.php?wsdl';

/**
 * 定義呼叫SOAP要使用到的參數內容
 */
var  _args = { 
    //帳號密碼請至：http://tts.itri.org.tw/development/web_service_api.php 申請
    accountID: 'abc', password: 'def', 
    TTStext: 'HELLO', TTSSpeaker:'Bruce', 
    volume:'50', speed:'5', outType:'wav' 
};

/**
 * 建立SOAP Client，並傳入wsdl url
 */
soap.createClient(wsdl, function(err, client) {
    /**
     * 在建立的client物件後，即可以使用此client物件進行呼叫該SOAP對應的function
     * 並將參數以json格式包裝放在第一個傳入參數
     * Callback將回傳error與result結果
     */
    client.ConvertText(_args, function(e,result){
        if(e) console.log(e);
        console.log(result);
    });
});