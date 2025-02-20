const { Menu, MenuItem, app } = require('electron');

const createContextMenu = (mainWindow) => {
    const contextMenu = new Menu();

    contextMenu.append(new MenuItem({
        label: '💡 Claro',
        click() {
            mainWindow.webContents.send('update-theme', 'light');
        }
    }));

    contextMenu.append(new MenuItem({
        label: '🌙 Obscuro',
        click() {
            mainWindow.webContents.send('update-theme', 'dark');
        }
    }));

    contextMenu.append(new MenuItem({ type: 'separator' }));

    contextMenu.append(new MenuItem({
        label: '🔃 Recargar',
        accelerator: 'Ctrl+R',
        click() {
            mainWindow.reload();
        }
    }));

    contextMenu.append(new MenuItem({
        label: '🔎 Inspector',
        accelerator: 'Ctrl+Shift+I',
        click() {
            mainWindow.webContents.toggleDevTools();
        }
    }));

    contextMenu.append(new MenuItem({ type: 'separator' }));

    contextMenu.append(new MenuItem({
        label: '❌ Salir',
        accelerator: 'Ctrl+Q',
        click() {
            app.quit();
        }
    }));

    return contextMenu;
};

module.exports = { createContextMenu };
