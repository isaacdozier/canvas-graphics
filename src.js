var Xcnt = 0, Ycnt =0
var timer = (2/(60))
var sl = (1.5)-(timer/2), sn = (sl + (timer))
var ml = (1.5)-(timer/2), mn = (ml + (timer))
var w = 440, h = 340
var c = document.getElementById('graphic')
var ctx = c.getContext("2d") 
var center = h/2
var tick = 0

function init(c){
    document.getElementById('graphic').width = w
    document.getElementById('graphic').height = h
    c.fillRect(0,0,w,h);
    setInterval(function(){
        grid(c)
    }, 90);
}

function go(c){
     setInterval(function(){
        build(c,tick)
    },4);
}


function build(c,t){
    c.fillStyle = 'black'
    c.fillRect(0,0,w,h);
    
    for(var i=0; center > i;i++){
        var r = 0, g = 0, b = 0
        
        c.strokeStyle= 'rgb('+r+','+g+i+','+b+(i/10)+')'
        
        c.beginPath()
        c.arc(w/2, h/2, ((h/2)-i)/2, (sl*Math.PI-(sn-sl)) , (sn*Math.PI+(sn-sl)))
        c.stroke()
    }
    
    
    sn = sn + timer
    sl = sl + timer
    
    grid(c)
}

var mv = 0
function grid(c){
    
    c.beginPath()
    c.fillRect(0,0,w,h);
    
    if(mv === 20){
        mv = 0
    }
    
    var space = 20
    var zh = h/4
    var zw = w/4
    var gh = (h/(h/space))
    var gw = (w/(w/space))
    
    c.strokeStyle= 'grey'
    
    var start = 0
    
    //horizontal lines
    var hn = 0
    for(var i = 0; i < h/gh;i++){
        ctx.moveTo(hn+mv+(w-h),start);
        c.lineTo(h+(w-h),hn+mv);
        hn=hn+gh
    }
    
  
    
    //vertical lines
    var wn = 0
    for(var i = 0; i < w/gw;i++){
        ctx.moveTo(start,wn-mv);
        c.lineTo(wn-mv,h);
        wn=wn+gw
    }

    mv = mv+4
    
    
    //draw
    c.stroke()
}


//old functions
function lineMove(){
    c.beginPath();
    c.moveTo(w/2,h/2);
    c.lineTo(w/2 + Xcnt,h/4 + Ycnt);
    c.stroke()
    
    
    if(h/4 + Ycnt > h/2){
        Xcnt--;
    }else{
        Xcnt++;
    }
    
    if(w/2 + Xcnt < w/2){
        Ycnt--;
    }else{
        Ycnt++;
    }
}