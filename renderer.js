//////para cambiar de tema////////////////////////
window.electronAPI.onUpdateTheme((event, theme) => {
    const root = document.documentElement
    root.style.setProperty('--scheme-theme', theme)
})

//////////botones para cambiar de pagina////////////////////////
function showPage(page) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.style.display = 'none');// Ocultar todas las pantallas
    document.getElementById(page).style.display = 'grid';// Mostrar la pantalla seleccionada
}

////////////////boton para cerrar ventana////////////////////////
const closeAppButton = document.getElementById('closeAppButton');

closeAppButton.addEventListener('click', () => {
    window.electronAPI.closeApp();
});

///////////para minimizar la ventana////////////////////////
const minimizeButton = document.getElementById('minimizeButton');

minimizeButton.addEventListener('click', () => {
    window.electronAPI.minimize();
});

///alerta del timer////////
function showAlert() {
    var audio = new Audio("C:/Users/PC/Documents/pixel-app/src/media/8-bit-beeping-sound.mp3");
    audio.play();

    document.getElementById("overlay").style.display = "block";
    document.getElementById("customAlert").style.display = "flex";

    setTimeout(function () {
        document.getElementById("customAlert").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }, 6000);
}

//////////////////////////////////////////////timer//////////////////////////////////////////////
let timerInterval;
let isRunning = false;
let seconds = 0;
let minutes;
let minInit;

function setMinutes(min) {
    minutes = min;
    minInit = min;
}

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function updateTimer() {
    if (seconds === 0 && minutes === 0) {
        clearInterval(timerInterval);
        isRunning = false;
        showAlert();
        startButton.disabled = false;
        stopButton.disabled = true;
        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerDisplay.textContent = formattedTime;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    minutes = minInit;
    seconds = 0;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerDisplay.textContent = formattedTime;
    startButton.disabled = false;
    stopButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

////////////renderizado de la página del timer////////////////////////
document.getElementById('boton-huevo-blando').addEventListener('click', () => {
    document.getElementById('title-food-timer').textContent = 'Huevo Blando';
    document.getElementById('timer').textContent = '06:00';
    document.getElementById('food-gif').src = './src/media/eggsoftboiled.gif';
});
document.getElementById('boton-huevo-duro').addEventListener('click', () => {
    document.getElementById('title-food-timer').textContent = 'Huevo Duro';
    document.getElementById('food-gif').src = './src/media/eggboiled.gif';
    document.getElementById('timer').textContent = '10:00';
});
document.getElementById('boton-fideos').addEventListener('click', () => {
    document.getElementById('title-food-timer').textContent = 'Fideos';
    document.getElementById('food-gif').src = './src/media/noodlessauce.gif';
    document.getElementById('timer').textContent = '12:00';
});
document.getElementById('boton-arroz').addEventListener('click', () => {
    document.getElementById('title-food-timer').textContent = 'Arroz';
    document.getElementById('food-gif').src = './src/media/rice-bowl.gif';
    document.getElementById('timer').textContent = '15:00';
});
