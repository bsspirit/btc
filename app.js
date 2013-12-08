var express = require('express')
//  , routes = require('./routes')
//  , user = require('./routes/user')
  , api = require('./routes/api')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
//app.get('/users', user.list);

app.get('/api/bt/china/history/push', api.pushBTChinaHistory);
app.post('/api/bt/china/depth/push', api.pushBTChinaDepth);
app.post('/api/bt/china/trade/push', api.pushBTChinaTrade);

http.createServer(app).listen(app.get('port'), function(){
  console.log('BTC server listening on port ' + app.get('port'));
});
