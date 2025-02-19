const { contextBridge, ipcRenderer, app } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    onUpdateTheme: (callback) => ipcRenderer.on('update-theme', callback),
    closeApp: () => ipcRenderer.send('close-app'),
    minimize: () => ipcRenderer.send('minimize'),
})