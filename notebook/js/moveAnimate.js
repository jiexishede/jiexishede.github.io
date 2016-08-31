/**
 * Created by lilonglong on 6/12/16.
 */

var moveAnimate = function (curele,obj,duration,callBackFun) {
    window.clearInterval(curele.timer);

    var oBegin = {};
    var oChange = {};
    var times = 0;
    var flag = 0;
    var interval = 10;
    
    for( var key in obj){
        
        var begin = getCss(curele,key);
        var target = obj[key];
        var change = target - begin;
        if(change){
            oBegin[key]  = begin;
            oChange[key] = change;
            flag = flag + 1;
        }
    }
    if(flag === 0){
        return;
    }
    
    var stepAnimate = function () {
        times = times + interval;
        if(times < duration){
            for( var key in oChange){
                var curValue = times / duration * oChange[key] + oBegin[key]; 
                setCss(curele,key,curValue);
            }
        } else {
            for (var key in oChange){
                setCss(curele,key,obj[key]);
                window.clearInterval(curele.timer);
                if(typeof callBackFun === "function"){
                    callBackFun();
                }
                return;
            }
        }
        
    }
    
    curele.timer = window.setInterval(stepAnimate,interval);
    
}

window.moveAnimate= moveAnimate;