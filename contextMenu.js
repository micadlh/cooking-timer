const { Menu, MenuItem, app } = require('electron');

const createContextMenu = (mainWindow) => {
    // Crear el menú contextual
    const contextMenu = new Menu();

    // Opción para cambiar el tema a claro
    contextMenu.append(new MenuItem({
        label: '💡 Claro',
        click() {
            mainWindow.webContents.send('update-theme', 'light');
        }
    }));

    // Opción para cambiar el tema a oscuro
    contextMenu.append(new MenuItem({
        label: '🌙 Obscuro',
        click() {
            mainWindow.webContents.send('update-theme', 'dark');
        }
    }));

    // Separador
    contextMenu.append(new MenuItem({ type: 'separator' }));

    // Opción de recargar
    contextMenu.append(new MenuItem({
        label: '🔃 Recargar',
        accelerator: 'Ctrl+R',
        click() {
            mainWindow.reload();
        }
    }));

    // Opción para abrir las herramientas de desarrollo
    contextMenu.append(new MenuItem({
        label: '🔎 Inspector',
        accelerator: 'Ctrl+Shift+I',
        click() {
            mainWindow.webContents.toggleDevTools();
        }
    }));

    // Separador
    contextMenu.append(new MenuItem({ type: 'separator' }));

    // Opción de salir
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
