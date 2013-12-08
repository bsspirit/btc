var biz = require('../service/service.js'),
    utils = require('../service/utils.js');

/**
 * 提交btchina的历史数据
 */
exports.pushBTChinaHistory = function (req, res) {
////    console.log(req.body);
//    console.log(req.query.uuid);

    var obj = {
        datetime:req.query.datetime,
        operate:req.query.operate,
        currency:req.query.currency,
        price:req.query.price,
        count:req.query.count,
        hash: utils.md5(req.query.datetime+req.query.operate+req.query.currency+req.query.price+req.query.count)
    };

    console.log(obj.hash);

    biz.pushBTChinaHistory(obj);
    res.end('done');
};




