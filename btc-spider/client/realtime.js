function send(url,obj){
    $.ajax({
        type: 'POST',
        url: url,
        data: obj
    });
}

$(document).ajaxComplete(function(event,request, settings){
//    console.log(settings.url);

    var ip = 'http://42.121.108.236:3001/';

    //if(settings.url.indexOf("/sdepth?symbol=btcchinabtccny")>0){//sdepth
    //    var obj = {return:request.responseText}
    //    send(ip+'api/bt/china/depth/push',obj);
    //}

    if(settings.url.indexOf("stock?method=tid")>0){//trade
        var obj = {return:request.responseText}
        send(ip+'api/bt/china/trade/push',obj);
    }

});
