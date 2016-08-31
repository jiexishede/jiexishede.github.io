/**
 * Created by lilonglong on 6/12/16.
 */
var setCss = function (ele,attr,value) {
    if(attr === "float"){
        ele["style"]["cssFloat"] = value;
        ele["style"]["styleFloat"] = value;
        return;
    }
    if(attr === "opacity"){
        ele["style"][attr] = value;
        ele["style"]["filter"] = "alpha(opacity =" + value * 100 + ")";
        return;
    }
    var reg = /(width|height|left|right|(padding|margin)(Top|Left|Bottom|Right))/;
    if(reg.test(attr)){
        if(!isNaN(value)){
            value = value + 'px';
        }
    }
    
    ele["style"][attr] = value;
}

var getCss = function (ele,attr) {
    var val = null; var reg = null;
    if("getComputedStyle" in window){
        val = window.getComputedStyle(ele,null)[attr];
    }else {
        
        if(attr === "opacity"){
            val = ele.currentStyle["filter"];
            reg = /^alpha\(opacity\s*=\s*(\d+(\.\d+)?)\)$/;
            val = reg.test(val) ? reg.exec(val)[1] * 100 : 1;
        } else {
            val = ele.currentStyle[attr];
        }
    }
    var reg = /[-+]?(\d+)(\.\d+)?(px|pt|rem|em)/;
    
    val = reg.test(val) ? parseFloat(val) : val ; 

     return val;
}

window.setCss = setCss;
window.getCss = getCss;