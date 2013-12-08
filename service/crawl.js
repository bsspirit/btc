var request = require('request')
    , moment = require('moment')
    , biz = require('./service.js');

var _this = this;

function crawlBTChinaDepth(callback) {
    request('http://k.btc123.com:8080/depth?symbol=btcchinabtccny&sid=c606970b', function (error, response, html) {
        if (!error && response.statusCode == 200) {
            //console.log(html);
            callback(html);
        }
    });
}

function parserBTChinaDepth(data) {

    console.log(data);

    var json = JSON.parse(data).return;
//            console.log(json);

    var obj = {};
    obj["datetime"] = moment.utc(json.now).format('YYYYMMDDHHmmss');

    if (json.asks.length >= 4) {
        obj['ask1'] = json.asks[0][0];
        obj['ask1_size'] = json.asks[0][1];
        obj['ask2'] = json.asks[1][0];
        obj['ask2_size'] = json.asks[1][1];
        obj['ask3'] = json.asks[2][0];
        obj['ask3_size'] = json.asks[2][1];
        obj['ask4'] = json.asks[3][0];
        obj['ask4_size'] = json.asks[3][1];
        obj['ask5'] = json.asks[4][0];
        obj['ask5_size'] = json.asks[4][1];
    }

    if (json.bids.length >= 4) {
        obj['bid1'] = json.bids[0][0];
        obj['bid1_size'] = json.bids[0][1];
        obj['bid2'] = json.bids[1][0];
        obj['bid2_size'] = json.bids[1][1];
        obj['bid3'] = json.bids[2][0];
        obj['bid3_size'] = json.bids[2][1];
        obj['bid4'] = json.bids[3][0];
        obj['bid4_size'] = json.bids[3][1];
        obj['bid5'] = json.bids[4][0];
        obj['bid5_size'] = json.bids[4][1];
    }

    console.log(obj);
    return obj;
}
//
//function pushBTChinaTrade(callback) {
//    request('http://k.btc123.com/stock?method=tid&sid=c606970b&symbol=btcchinabtccny&since=2994450', function (error, response, html) {
//        if (!error && response.statusCode == 200) {
//            //console.log(html);
//            callback(html);
//        }
//    });
//}

exports.forever = function () {
    setInterval(function () {
        crawlBTChinaDepth(function (data) {
            var obj = parserBTChinaDepth(data);
            biz.pushBTChinaDepth(obj);
        });
    }, 5000)
}

