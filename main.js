const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu.js');
const path = require('path');


const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 460,
        height: 440,
        minWidth: 460,
        minHeight: 440,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
        }
    })

    mainWindow.loadFile('index.html');

    setMainMenu(mainWindow);
}


app.whenReady().then(() => {
    createWindow()
})
//esto lo dejo por si alguien con macOS quiere probarlo
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});