'use strict';
//biz service layer

var dao = require('./dao')
    ,utils = require('./utils')
    ,json2csv = require('json2csv');
var _this = this;

/**
 * 历史数据整理
 */
exports.pushBTChinaHistory = function (obj, callback) {
    dao.pushBTChinaHistory(obj, function (err, rows) {
        if (err) console.log("pushBTChinaHistory Error ==> " + err);
    });
}

exports.pushBTChinaHistoryArr = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
        _this.pushBTChinaHistory(list[i]);
    }
}

/**
 * 时时交易数据
 */
exports.pushBTChinaTrade = function (obj, callback) {
    dao.pushBTChinaTrade(obj, function (err, rows) {
        if (err) console.log("pushBTChinaTrade Error ==> " + err);
    });
}

exports.pushBTChinaTrade_redis = function (obj, callback) {
    json2csv({data: obj, fields: ['tid', 'datetime',"price",'count',"operate"]}, function(err, csv) {
        if (err) console.log(err);
        dao.pushBTChinaTrade_redis(csv);
    });
}

/**
 * 时时询价数据
 */
exports.pushBTChinaDepth = function (obj, callback) {

    json2csv({data: obj, fields: ['datetime', 'ask1',"ask1_size",'ask2',"ask2_size",'ask3',"ask3_size",'ask4',"ask4_size",'ask5',"ask5_size",
        'bid1',"bid1_size", 'bid2',"bid2_size", 'bid3',"bid3_size", 'bid4',"bid4_size", 'bid5',"bid5_size"]}, function(err, csv) {
        if (err) console.log(err);
        dao.pushBTChinaDepth_redis(csv);
    });

    dao.pushBTChinaDepth(obj, function (err, rows) {
        if (err) console.log("pushBTChinaDepth Error ==> " + err);
    });
}
