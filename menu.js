const { app, Menu } = require('electron');
const setMainMenu = (mainWindow) => {
    const template = [
        {
            label: 'Menu',
            submenu: [
                { role: 'reload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                {
                    label: 'Salir de la app',
                    accelerator: 'Ctrl+Q',
                    click() {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Opciones',
            submenu: [
                {
                    label: '💡Claro',
                    click() {
                        mainWindow.webContents.send('update-theme', 'light');
                    }
                },
                {
                    label: '🌙Obscuro',
                    click() {
                        mainWindow.webContents.send('update-theme', 'dark');
                    }
                }
            ]
        }


    ];

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

}

module.exports = { setMainMenu };