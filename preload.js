const { contextBridge } = require('electron');

// Exponha funções ou variáveis ao lado da web (opcional)
contextBridge.exposeInMainWorld('electronAPI', {
    // Adicione aqui funções seguras, se necessário
});
