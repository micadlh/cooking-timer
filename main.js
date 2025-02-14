const { app, BrowserWindow, Menu } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 500,
        minHeight: 100,
        minWidth: 100
    })

    win.loadFile('index.html')
}

Menu.setApplicationMenu(null);

app.whenReady().then(() => {
    createWindow()
})