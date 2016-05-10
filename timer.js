var clicked = false,
    timer = null,
    secs = 0,
    hours = 0,
    minutes = 0,
    timer2 = null,
    secs2 = 0,
    minutes2 = 0,
    hours2 = 0,
    studyh = 0,
    studym = 0,
    studys = 0;
    
function start(){
    if(clicked === false){
        timer = setInterval('setTime()',1000);
        clearInterval(timer2);
        timer2 = null;
        clicked = true;
    }
    else if(clicked === true){};
}

function setTimePause(){
   secs2++;
    if(secs2>59){
        minutes2 = Math.floor(secs2/60);
        if(minutes2 > 59){
            hours2 = Math.floor(secs2/3600);
            minutes2 = 0;
        }
        secs2 = 0; 
    }
    document.getElementById('seconds2').innerHTML = (secs2<10)?'0'+secs2:secs2;
    document.getElementById('minutes2').innerHTML = (minutes2<10)?'0'+minutes2:minutes2;
    document.getElementById('hours2').innerHTML = (hours2<10)?'0'+hours2:hours2;
}

function pause(){
    clearInterval(timer);
    timer2 = setInterval('setTimePause()',1000);
    document.getElementById('pause').innerHTML = 'Pausing';
    document.getElementById('timer2').style.display = 'block';
    timer = null;
    clicked = false;
}

function stop(){
    clearInterval(timer);
    clearInterval(timer2);
    timer = null;
    timer2 = null;
    clicked = false;
    
    document.getElementById('stopmsg').innerHTML = 'You have studied for ' + hours + 'Hhrs ' + minutes + 'Mins ' + secs + 'Secs';
    document.getElementById('pausemsg').innerHTML = 'Your break was ' + hours2 + 'Hhrs ' + minutes2 + 'Mins ' + secs2 + 'Secs long'; 
    document.getElementById('timer2').style.display = 'none';
}

function reset(){
    secs = 0;
    hours = 0; 
    minutes = 0;
    secs2 = 0;
    hours2 = 0; 
    minutes2 = 0;
    document.getElementById('seconds').innerHTML = '0' + secs;
    document.getElementById('minutes').innerHTML = '0' + minutes;
    document.getElementById('hours').innerHTML = '0' + hours;
    document.getElementById('stopmsg').innerHTML = '';
    document.getElementById('timer2').style.display = 'none';
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
