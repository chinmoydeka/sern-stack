import { resolve } from "bluebird";

const electron = window.require('electron');
const { ipcRenderer } = electron;

export default function send(message) {
    console.log(message)
      return new Promise((resolve) => {
            ipcRenderer.once('asynchronous-reply', (_, arg) => {
                resolve(arg);
            });
            ipcRenderer.send('asynchronous-message', message);
        });   
}
