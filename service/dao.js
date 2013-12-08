'use strict';
//biz dao layer

var mysql = require('./db').mysql;
//var redis = require('./db').redis;

exports.pushBTChinaHistory =  function (obj,callback) {
    var sql = "INSERT INTO t_btc_china_history(datetime,operate,currency,price,count,hash) VALUES ";
    sql += "(" + obj['datetime'] +",'"+ obj[ 'operate'] +"','"+ obj[ 'currency'] +"',"+ obj[ 'price'] +","+ obj[ 'count'] +",'"+obj[ 'hash'] +"')";
    mysql.query(sql, function (err, rows, fields) {
        callback(err,rows);
    });
}

exports.pushBTChinaTrade =  function (obj,callback) {
    var sql = "INSERT INTO t_btc_china_trade(id,datetime,operate,price,count) VALUES ";
    sql += "(" + obj['tid'] +","+ obj['datetime'] +",'"+ obj[ 'operate']  +"',"+ obj[ 'price'] +","+ obj[ 'count']+ ")";
    mysql.query(sql, function (err, rows, fields) {
        callback(err,rows);
    });
}

exports.pushBTChinaDepth =  function (obj,callback) {
    var sql = "INSERT INTO t_btc_china_depth (datetime,ask1,ask2,ask3,ask4,ask5,bid1,bid2,bid3,bid4,bid5,ask1_size,ask2_size,ask3_size,ask4_size,ask5_size,bid1_size,bid2_size,bid3_size,bid4_size,bid5_size) VALUES ";
    sql += "(" + obj['datetime'] +","+ obj[ 'ask1'] +","+ obj[ 'ask2']+","+ obj[ 'ask3']+","+ obj[ 'ask4']+","+ obj[ 'ask5']+","
        + obj[ 'bid1']+","+ obj[ 'bid2']+","+ obj[ 'bid3']+","+ obj[ 'bid4']+","+ obj[ 'bid5']+","
        + obj[ 'ask1_size']+","+ obj[ 'ask2_size']+","+ obj[ 'ask3_size']+","+ obj[ 'ask4_size']+","+ obj[ 'ask5_size']+","
        + obj[ 'bid1_size']+","+ obj[ 'bid2_size']+","+ obj[ 'bid3_size']+","+ obj[ 'bid4_size']+","+ obj[ 'bid5_size']+ ")";
    mysql.query(sql, function (err, rows, fields) {
        callback(err,rows);
    });
}


