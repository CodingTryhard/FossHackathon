let mm = 0;
let ss = 0;
let pausebutton = document.getElementById('pause');
let playbutton = document.getElementById('play');


function currentTime() {
    var timer = document.getElementById('time');
    const radioButtons = document.querySelectorAll('input[name="options"]');
    function pause(){
        setTimeout('click', function()=>{alert('Timeout reached before button click')}, 50000000);
    }
    pausebutton.addEventListener("click",pause);    
    ss += 1;
    if(ss == 60){
        ss = 0;
        mm += 1;
    }
    if(mm == 30){
        mm = 0;
        pause();
    }
     stmm = (mm < 10) ? "0" + mm : mm;
     stss = (ss < 10) ? "0" + ss : ss;
      
     let time = stmm + ":" + stss ;
  
    timer.innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
    }
currentTime();