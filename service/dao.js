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



