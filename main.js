const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu.js');
const path = require('path');


const createWindow = () => {
    console.log(__dirname);
    const mainWindow = new BrowserWindow({
        width: 400,
        height: 500,
        minHeight: 100,
        minWidth: 100,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    mainWindow.loadFile('index.html');

    setMainMenu(mainWindow);
}


app.whenReady().then(() => {
    createWindow()
})