function send(url,obj){
    $.ajax({
        type: 'POST',
        url: url,
        data: obj
    });
}

function parser(){
    var arr = [];
    var table = $('table tr');
    for(var i=1;i<table.length;i++){
        var obj = {}
        var cells = $(table[i])[0].cells;
        obj['datetime'] = cells[0].innerText.replace(/[年月日 :]/g,'');

        obj['operate'] = cells[1].innerText;
        if(obj['operate']=='买入'){
            obj['operate']='B';
        }else if(obj['operate']=='卖出'){
            obj['operate']='S';
        }

        obj['price'] = cells[2].innerText.substring(1).replace(/,/g,'');
        obj['count'] = cells[3].innerText.substring(1).replace(/,/g,'');
        arr.push(obj);
    }

    var o =  {return:arr};
    console.log(o);
    send('http://42.121.108.236:3001/api/bt/china/history/push',o);
}

function next(){
    var page = $('div .paginationControl').find('a')[2].href;
    location.href=page;
}

//function run(){
//    parser();
//    setTimeout(function(){next();},500);
//}

//run();






