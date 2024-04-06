let mm = 0;
let ss = 0;
let pausebutton = document.getElementById('pause');
let playbutton = document.getElementById('play');
let resetbutton = document.getElementById('reset');
let timer = document.getElementById('time');
let ispaused = 0;
let pomodoro = document.getElementById('pomodoro');
let nobreak = document.getElementById('nobreak');
let longbreak = document.getElementById('longbreak');
let shortbreak = document.getElementById('shortbreak');
const radioButtons = document.querySelectorAll('input[name="options"]');
const defaultCheckedButton = document.getElementById('pomodoro'); 
const defaultColor = '#00ADB5'; 
defaultCheckedButton.checked = true;
defaultCheckedButton.parentElement.style.backgroundColor = defaultColor;


function resetRadioButtonsColor() {
    radioButtons.forEach((radioButton) => {
        radioButton.parentElement.style.backgroundColor = '';
    });
}

resetbutton.addEventListener('click', () => {
    timer.innerText = '00:00';
    ss = 0;
    mm = 0;
});

function currentTime() {
    ss += 1;
    if (ss === 60) {
        ss = 0;
        mm += 1;
    }
    if (mm === 30) {
        mm = 0;
        document.getElementById('sound').currentTime = 0;
        document.getElementById('sound').play();
        pause();
    }
    if (mm === 15 && ss===0 && longbreak.checked) { 
        document.getElementById('sound').currentTime = 0;
        document.getElementById('sound').play();
    } else if (mm === 15 && ss===0 && pomodoro.checked) { 
        document.getElementById('sound').currentTime = 0;
        document.getElementById('sound').play();
    } else if (mm  === 25 && ss===0 && shortbreak.checked) { 
        document.getElementById('sound').currentTime = 0;
        document.getElementById('sound').play();
    }

        
    let stmm = (mm < 10) ? "0" + mm : mm;
    let stss = (ss < 10) ? "0" + ss : ss;
    let time = stmm + ":" + stss;
    timer.innerText = time;
}

function startUpdating() {
    intervalId = setInterval(currentTime, 1000);
}

function stopUpdating() {
    clearInterval(intervalId);
}

playbutton.addEventListener('click', () => {
    if (ispaused == 1) {
        ispaused = 0;
        startUpdating();
    }
});

pausebutton.addEventListener('click', () => {
    ispaused = 1;
    stopUpdating();
});

radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
        resetRadioButtonsColor(); 
        if (radioButton.checked) {
            radioButton.parentElement.style.backgroundColor = defaultColor; 
        }
    });
});

startUpdating();