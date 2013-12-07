var biz = require('../service/service.js');

/**
 * 提交btchina的历史数据
 */
exports.pushBTChinaHistory = function (req, res) {
////    console.log(req.body);
//    console.log(req.query.uuid);

    var obj = {
        uuid: req.query.uuid,
        datetime:req.query.datetime,
        operate:req.query.operate,
        currency:req.query.currency,
        price:req.query.price,
        count:req.query.count
    };

    biz.pushBTChinaHistory(obj);
    res.end('done');
};

