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
        document.getElementById('currentmsg').innerHTML = 'Studying';
        $(document.getElementById('studying')).fadeIn(800);
        $(document.getElementById('pausing')).fadeOut(800);
        $(document.getElementById('stopmsg')).fadeOut(800);
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
    timer2 = setInterval('setTimePause()',800);
    document.getElementById('currentmsg').innerHTML = 'Pausing';
    $(document.getElementById('pausing')).fadeIn(800);
    $(document.getElementById('stopmsg')).fadeOut(800);
    timer = null;
    clicked = false;
}

function stop(){
    clearInterval(timer);
    clearInterval(timer2);
    timer = null;
    timer2 = null;
    clicked = false;
    document.getElementById("stophours").innerHTML = hours;
    document.getElementById("stopmins").innerHTML = minutes;
    document.getElementById("stopsecs").innerHTML = secs;
    document.getElementById("pausehours").innerHTML = hours2;
    document.getElementById("pausemins").innerHTML = minutes2;
    document.getElementById("pausesecs").innerHTML = secs2;
    
    //$('#studying').fadeOut(800);
    $(document.getElementById('studying')).fadeOut(800);
    $(document.getElementById('pausing')).fadeOut(800);
    document.getElementById('stopmsg').style.display = 'block';
    
    clicked = false;
}

function reset(){
    secs = 0;
    hours = 0; 
    minutes = 0;
    secs2 = 0;
    hours2 = 0; 
    minutes2 = 0;
    clearInterval(timer);
    document.getElementById('seconds').innerHTML = '0' + secs;
    document.getElementById('minutes').innerHTML = '0' + minutes;
    document.getElementById('hours').innerHTML = '0' + hours;
    $(document.getElementById('stopmsg')).fadeOut(800);
    $(document.getElementById('studying')).fadeOut(800);
    $(document.getElementById('pausing')).fadeOut(800);
    
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


