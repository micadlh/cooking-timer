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


//////////////////////////////////////////////timer//////////////////////////////////////////////
let timerInterval;
let isRunning = false;
let minutes = 6;
let seconds = 0;

// Obtener los elementos del DOM
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

// Función para actualizar el temporizador
function updateTimer() {
    if (seconds === 0 && minutes === 0) {
        clearInterval(timerInterval);
        isRunning = false;
        alert("¡Tiempo terminado!");
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

    // Formatear el tiempo para mostrar en formato MM:SS
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerDisplay.textContent = formattedTime;
}

// Iniciar el temporizador
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
    }
}

// Detener el temporizador
function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Resetear el temporizador
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    minutes = 6;
    seconds = 0;
    timerDisplay.textContent = '06:00';
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Asociar eventos con los botones
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);


