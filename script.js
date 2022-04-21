var sec, min, hr, starttime;

sec = 0;
min = 0;
hr = 0;
starttime = false;

let stopwatch = document.getElementById("timeFormat");

function startStopwacht() {
  if (starttime == false) {
    starttime = true;
    stopwachtCycle();
  }
}

function stopStopwacht() {
  if (starttime == true) {
    starttime = false;
  }
}

function resetStopwacht() {
  stopwatch.innerHTML = "00:00:00";
  starttime = false;
  hr=0;
  min = 0;
  sec = 0;
}

function stopwachtCycle() {
  if (starttime == true) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    //10 dan küçükse yanına bir sıfır ekliyor
    if(sec<10 || sec==0){
        sec="0"+ sec;
    }
    if(min<10 || min==0){
        min="0"+ min;
    }
    if(hr<10 || hr==0){
        hr="0"+ hr;
    }
    stopwatch.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("stopwachtCycle()", 1000);
  }
}
