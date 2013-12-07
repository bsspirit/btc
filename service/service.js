'use strict';
//biz service layer

var dao = require('./dao');
var _this = this;

exports.pushBTChinaHistory = function (obj, callback) {
    dao.pushBTChinaHistory(obj, function (err, rows) {
        if (err) console.log("error ==> " + err);
    });
}

exports.pushBTChinaHistoryArr = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
        _this.pushBTChinaHistory(list[i]);
    }
}
