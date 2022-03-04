

var rnum=(Math.random()*6)+1;
var fval=Math.floor(rnum);
var r2num=(Math.random()*6)+1;
var f2val=Math.floor(r2num);

var h1=document.querySelector("h1");


function myfn(){
    document.getElementById("first").src= "dice"+fval+".png";
    document.getElementById("second").src= "dice"+f2val+".png";
    if(fval>f2val){
        h1.textContent="player 1 win"
    }else if(f2val>fval){
        h1.textContent="player 2 win"
    }else{
        h1.textContent="Draw";
    }
}


