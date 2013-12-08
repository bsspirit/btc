var biz = require('../service/service.js')
    , utils = require('../service/utils.js')
    , moment = require('moment');

/**
 * 提交btchina的历史数据
 */
exports.pushBTChinaHistory = function (req, res) {
//    console.log(req.body.return);
    var json = req.body.return;

    for (var i = 0; i < json.length; i++) {
        var obj = {
            datetime: json[i].datetime,
            operate: json[i].operate,
            price: json[i].price,
            count: json[i].count,
            hash: utils.md5(req.query.datetime + req.query.operate + req.query.price + req.query.count+"")
        };
        console.log(obj);
        biz.pushBTChinaHistory(obj);
    }

    res.end('done');
};

/**
 * 提交btchina的询价数据
 */
exports.pushBTChinaDepth = function (req, res) {
//    console.log(req.body.return);
    var json = JSON.parse(req.body.return).return;

    var obj = {};
    obj["datetime"] = moment(parseInt(json.now)).format('YYYYMMDDHHmmss');

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
    biz.pushBTChinaDepth(obj);
    res.end('done');
};

/**
 * 提交btchina的询价数据
 */
exports.pushBTChinaTrade = function (req, res) {
//    console.log(req.body.return);
    var json = JSON.parse(req.body.return);

    for (var i = 0; i < json.length; i++) {
        var obj = {}
        obj["tid"] = json[i].tid;
        obj["datetime"] = moment.unix(json[i].date).format('YYYYMMDDHHmmss');
        obj["price"] = json[i].price;
        obj["count"] = json[i].amount;
        json[i].trade_type == "bid" ? obj["operate"] = 'B' : obj["operate"] = 'S';

        console.log(obj);
        biz.pushBTChinaTrade(obj);
    }
    res.end('done');
}




