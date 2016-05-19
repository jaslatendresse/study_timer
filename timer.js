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
        document.getElementById('studying').style.display = 'block';
        document.getElementById('pausing').style.display = 'none';
        document.getElementById('animatepause').style.display = 'none';
        document.getElementById('stopmsg').innerHTML = '';
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
    document.getElementById('studying').style.display = 'none';
    document.getElementById('pausing').style.display = 'block';
    document.getElementById('animatepause').style.display = 'block';
    timer = null;
    clicked = false;
    document.getElementById('stopmsg').innerHTML = '';
}

function stop(){
    clearInterval(timer);
    clearInterval(timer2);
    timer = null;
    timer2 = null;
    clicked = false;
    
    document.getElementById('studying').style.display = 'none';
    document.getElementById('pausing').style.display = 'none';
    document.getElementById('stopmsg').innerHTML = '<b>Study time</b>: ' + hours + ' hours, ' + minutes + ' minutes and ' + secs + ' seconds.<br>' + '<b>Pause time</b>: ' + hours2 + ' hours, ' + minutes2 + ' minutes and ' + secs2 + ' seconds.';
    document.getElementById('timer2').style.display = 'none';
    document.getElementById('animatepause').style.display = 'none';
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
    document.getElementById('studying').style.display = 'none';
    document.getElementById('pausing').style.display = 'none';
    document.getElementById('animatepause').style.display = 'none';
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

function displayDate() {
    var d = new Date(),
        year = d.getFullYear(),
        months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    document.getElementById('date').innerHTML = months[d.getMonth()] + ' ' + d.getDate() + ', ' + year;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}