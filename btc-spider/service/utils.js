'use strict';

var crypto = require('crypto');

exports.md5=function(str){
    var hash=crypto.createHash('md5');
    return hash.update(str).digest('hex');
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

exports.uuid=function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

