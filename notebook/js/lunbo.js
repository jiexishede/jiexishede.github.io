/**
 * Created by lilonglong on 6/12/16.
 */

var oBox = document.getElementById("box");
var oWrap = document.getElementById("banner");
var oPoint = document.getElementById("point");
var aAas = oWrap.getElementsByTagName("a");
var aPointLis = oPoint.getElementsByTagName("a");
var oBtnLeft = oBox.getElementsByTagName("a")[4];
var oBtnRight = oBox.getElementsByTagName("a")[5];
var step = 0;

// var oClone = aAas[0].cloneNode(true);
//
// // console.log(oWrap.style.width);
//
// oWrap.appendChild(oClone);
// var curValueWidth = aAas.length * oClone.offsetWidth;
//
// window.setCss(oWrap,"width",curValueWidth);


// console.log(oWrap.style.width);


var pointTips = function (number) {

    if( number === aPointLis.length){
        number = 0;
    }

    for ( var i = 0; i < aPointLis.length; i++){
        aPointLis[i].className = "";
    }
    aPointLis[number].className = "select";
    
}

var moveLeft = function () {


    step = step + 1;

    if(step === aAas.length) {
        step = 0;
    }
    var stepPrev = step -1;
    if(stepPrev === -1){
        stepPrev = aAas.length -1;
    }
    window.setCss(aAas[step], "left", 178.75);

    // zhufengAnimate(curDiv,{'opacity':1},600,function(){
    //     var siblings=utils.siblings(this);
    //     for(var i=0; i<siblings.length; i++){
    //         utils.css(siblings[i],'opacity',0);
    //     }
    // });


    window.setCss(aAas[step],'z-index',2);
    window.setCss(aAas[step], 'opacity', .3);


    window.moveAnimate(aAas[step], {"left":  0,"opacity":1}, 400,function () {

        // var siblings=utils.siblings(this);
        // for(var i=0; i<siblings.length; i++){
        //     utils.css(siblings[i],'opacity',0);
        // // }
        // for ( var i = 0; i < aAas.length - 1; i++) {
        //
        //
        //     if (i !== step) {
        window.setCss(aAas[step],'z-index',1);
        window.setCss(aAas[step], 'opacity', 1);

        window.setCss(aAas[stepPrev], 'opacity', .01);

        //
        //     }
        // }
    });



    window.setCss(aAas[stepPrev],'z-index',1);
    /* CSS ->      opacity: .5;
     */
    window.setCss(aAas[stepPrev],'opacity',.4);

    // window.setCss(aAas[stepPrev],'z-index',0);
    window.moveAnimate(aAas[stepPrev], {"left": -178.75,'opacity':.1}, 400, function () {
        // for ( var i = 0; i < aAas.length - 1; i++) {
        //     if (i === step) {
        //         window.setCss(aAas[i],'z-index',1);
        //
        //     }
        // }

        window.setCss(aAas[stepPrev],'z-index',0);
        window.setCss(aAas[stepPrev], 'opacity', .01);
    });
     // step === step % aAas.length

    window.setTimeout(function () {
            window.setCss(aAas[stepPrev], 'opacity', .2);

        }

        ,202);


        // debugger;


    

    // window.moveAnimate()
    //
    // for ( var i = 0; i < aAas.length - 1; i++){
    //
    //     if( i !== step) {
    //         window.setCss(aAas[i],'z-index',0);
    //     }
    // }




    // window.setCss(aAas[step], "display", 'block');

    // console.log("step=="+aAas[step]);

    // console.log(aAas[step]);


    // console.log("step=="+aAas[step].style.left);
    // window.setCss(aAas[step], "opacity", 1);
    // console.log("step=="+aAas[step]);

    // console.log("step=="+aAas[step].style.left);

    // window.moveAnimate(aAas[step], {"opacity": 1}, 600, tempFun());
    // window.moveAnimate(aAas[step], {"z-index": 1}, 600, tempFun());
    pointTips(step);
    /* 原网站CSS 代码.   left: -178.75px; opacity: 0; z-index: 0; display: block; */

    //
    // console.log("stepPrev=="+aAas[stepPrev]);
    // console.log(aAas[stepPrev]);

    // console.log("stepPrev0=="+aAas[0].style.left);
    // console.log("stepPrev1=="+aAas[1].style.left);
    // console.log("stepPrev2=="+aAas[2].style.left);
    // console.log("stepPrev3=="+aAas[3].style.left);
    // console.log("*********************");


    // console.log("stepPrev=="+aAas[stepPrev]);
    //
    // console.log("stepPrev=="+aAas[stepPrev].style.left);

    // window.setCss(aAas[stepPrev], "display", 'none');
    // window.setCss(aAas[stepPrev], "z-index", '0');
    // window.setCss(aAas[stepPrev], "opacity", '0');

    // window.moveAnimate(aAas[stepPrev], {"opacity": 0}, 600, tempFun());
    // window.moveAnimate(aAas[stepPrev], {"z-index": 0}, 600, tempFun());

}


var moveRight = function () {
    step  = step - 1;
    
    if( step === -1){
        step = aAas.length - 2;
        window.setCss(oWrap,"left", (step + 1) * -715 );
    }

    window.moveAnimate(oWrap,{"left": -step * 715}, 600, tempFun());
    window.moveAnimate(oWrap,{"opacity": 1}, 600, tempFun());

    pointTips(step);
}


    for( var i = 0; i < aPointLis.length; i++) {
        var curPointLi = aPointLis[i];
        curPointLi.index = i;
        curPointLi.onclick = function () {
            step = this.index;
            window.moveAnimate(oWrap, {"left": -715 * step}, 600, tempFun);
            pointTips(step);
        }
    }

 autoTimer = window.setInterval(moveLeft,4000);
oBtnLeft.onclick = moveLeft;
oBtnRight.onclick = moveRight;

oBox.onmouseover = function () {
    window.setCss(oBtnLeft,"display","block");
    window.setCss(oBtnRight,"display","block");
    window.clearInterval(autoTimer);
}

oBox.onmouseout = function () {
    window.setCss(oBtnLeft,"display","none");
    window.setCss(oBtnRight,"display","none");
    autoTimer = window.setInterval(moveLeft,2000);

}