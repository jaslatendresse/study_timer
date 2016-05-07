var clicked = false,
    timer = null,
    secs = 0,
    hours = 0,
    minutes = 0;
    

function start(){
    if(clicked === false){
        timer = setInterval('setTime()',1000);
        clicked = true;
    }
    else if(clicked === true){};
}

function stop(){
    clearInterval(timer);
    timer = null;
    clicked = false;
}

function setTime(){
    secs++;
    if(secs>59){
        minutes = Math.floor(secs/60);
        if(minutes > 59){
            hours = Math.floor(secs/3600);
            minutes = 0;
        }
        secs = 0; 
    }
    document.getElementById('seconds').innerHTML = (secs<10)?'0'+secs:secs;
    document.getElementById('minutes').innerHTML = (minutes<10)?'0'+minutes:minutes;
    document.getElementById('hours').innerHTML = (hours<10)?'0'+hours:hours;
}