const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
            icon: path.join(__dirname, 'assets/icons/icone_SB-removebg-preview.png'),  // Caminho para o ícone da janela
            webviewTag: true,
        },
        frame: true,  // Mantém o frame (com bordas)
    });

    
    // Remove o menu padrão do Electron
    Menu.setApplicationMenu(null); // Remove o menu de "File", "Edit", etc.

    mainWindow.loadFile('index.html');
    
});



