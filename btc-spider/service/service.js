'use strict';
//biz service layer

var dao = require('./dao')
    ,utils = require('./utils');
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
    dao.pushBTChinaTrade_redis(utils.JSON2CSV(obj));
}

/**
 * 时时询价数据
 */
exports.pushBTChinaDepth = function (obj, callback) {
    dao.pushBTChinaDepth_redis(utils.JSON2CSV(obj));
    dao.pushBTChinaDepth(obj, function (err, rows) {
        if (err) console.log("pushBTChinaDepth Error ==> " + err);
    });
}
