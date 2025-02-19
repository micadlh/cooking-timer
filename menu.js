///ESTE MENU SE MOSTRARÁ CUANDO LA VENTANA TENGA FRAME:TRUE. SI NO TIENE FRAME, NO SE MOSTRARÁ.
const { app, Menu } = require('electron');
const setMainMenu = (mainWindow) => {
    const template = [
        {
            label: 'Menu',
            submenu: [
                {
                    label: '💡 Claro',
                    click() {
                        mainWindow.webContents.send('update-theme', 'light');
                    }
                },
                {
                    label: '🌙 Obscuro',
                    click() {
                        mainWindow.webContents.send('update-theme', 'dark');
                    }
                },
                { type: 'separator' },
                {
                    label: '🔃 Recargar',
                    accelerator: 'Ctrl+R',
                    click() {
                        mainWindow.reload();
                    }
                },
                {
                    label: '🔎 Inspector',
                    accelerator: 'Ctrl+Shift+I',
                    click() {
                        mainWindow.webContents.toggleDevTools();
                    },
                },
                { type: 'separator' },
                {
                    label: '❌ Salir',
                    accelerator: 'Ctrl+Q',
                    click() {
                        app.quit();
                    }
                }
            ]
        },
    ];

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

}

module.exports = { setMainMenu };