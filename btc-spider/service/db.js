'use strict';
var config = require('./config');

//mysql
var mysql = require('mysql');
var mysqlPool = mysql.createPool({
    host: config.mysqlHost,
    user: config.mysqlUsername,
    password: config.mysqlPassword,
    database: config.mysqlDatabase,
    port: config.mysqlPort
});
exports.mysql = mysqlPool;
//exports.mysql.query
//exports.mysql.end

//redis
var redis = require("redis");
exports.redis = redis.createClient(config.redisPort,config.redisHost);




