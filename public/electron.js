const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;
const path = require('path');
// require(`file://${path.join(__dirname, 'main.js')}`)

const isDev = require('electron-is-dev');
let mainWindow;

// require('electron-reload')(process.cwd(), {
//   electron: path.join(process.cwd(), 'node_modules', '.bin', 'electron')
// });
function createWindow() {
  mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        },

  });
  //***//


  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
    globalShortcut.register('f5', function() {

      mainWindow.reload()
    })
  }

  // mainWindow.setMenu(null);
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (mainWindow === null) {
    createWindow();
  }
});


const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');
const database = new sqlite3.Database('./db/db.sqlite3', (err) => {
    if (err)  throw new Error(err);
});
//db file tu root ar pora link korbya lagnu aru production ar babe tolor commment tu bohaba lagbu
// path.join(__dirname, '../../extraResources/db.sqlite3')
// './public/db.sqlite3'

ipcMain.on('asynchronous-message', async (event, arg) => {

}



});
