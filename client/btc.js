function send(obj){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/bt/china/history/push',
        data: obj,
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            console.log(data);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function parser(){
    var table = $('table tr');
    for(var i=1;i<table.length;i++){
        var obj = {}
        var cells = $(table[i])[0].cells;
        obj['datetime'] = cells[0].innerText.replace(/[年月日 :]/g,'');

        obj['operate'] = cells[1].innerText;
        if(obj['operate']=='买入'){
            obj['operate']='buy';
        }else if(obj['operate']=='卖出'){
            obj['operate']='sell';
        }

        obj['currency'] = cells[2].innerText.substring(0,1);
        if(obj['currency']=='¥'){
            obj['currency']='RMB'
        }

        obj['price'] = cells[2].innerText.substring(1).replace(/,/g,'');
        obj['count'] = cells[3].innerText.substring(1).replace(/,/g,'');

        send(obj);
    }
}

function next(){
    var page = $('div .paginationControl').find('a')[2].href;
    location.href=page;
}

function run(){
    parser();
    setTimeout(function(){
        next();
    },1000);
}






