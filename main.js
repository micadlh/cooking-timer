const { app, BrowserWindow, ipcMain } = require('electron')
const { setMainMenu } = require('./menu.js');
const { createContextMenu } = require('./contextMenu.js');
const path = require('path');


const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 460,
        height: 440,
        minWidth: 460,
        minHeight: 440,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
        }
    })

    mainWindow.loadFile('index.html');

    setMainMenu(mainWindow);

    const contextMenu = createContextMenu(mainWindow);

    // Evento para mostrar el menú contextual al hacer clic derecho
    mainWindow.webContents.on('context-menu', (e, params) => {
        contextMenu.popup({ window: mainWindow, x: params.x, y: params.y });
    });

    ipcMain.on('close-app', () => {
        app.quit(); // Cerrar la aplicación 
    });


}

app.whenReady().then(() => {
    createWindow()
})
//esto lo dejo por si alguien con macOS quiere probarlo
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});