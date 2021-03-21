# SERN STACK
  Sern stack is basically a javascript stack. You can develop a advanced desktop application with javascript.
  SERN stands for -
  * S - Node sqlite3
  * E - Electron js
  * R - React
  * N - Node js
# Installation
     ```
     npm i sern-stack
     ```
 ###  Starting development enviroment
      ```
      npm run electron-dev
      ```
# Usages
  - For modify code go to src directory then edit app.js file with your code editor.
  - For navigation or route you can use react router
  - To connect with sqlite database
    >Frontend
    ```
    import React, {useState,useEffect} from 'react';
    import sendAsync from './renderer.js'

    export default function App(){
      const [Data, setData] = React.useState([])
      React.useEffect(()=>{
        sendAsync('sendData').then((res)=>{
          setData(res)
          console.log(Data)
        })
      },[])
      
      return (
        <div>
            <h1>Well come to sern stack</h1>
        </div>
      )
    }

    ```

    > Backend
    ```
    const { ipcMain } = require('electron');
    const sqlite3 = require('sqlite3');
    const database = new sqlite3.Database('./db/db.sqlite3', (err) => {
        if (err)  throw new Error(err);
    });
    //for produnction change the database link to --->
    // path.join(__dirname, '../../extraResources/db.sqlite3')
    database.serialize(()=>{
        database.run("PRAGMA cipher_compatibility = 4");
        database.run("PRAGMA key = 'sernstack'");
    })

    ipcMain.on('asynchronous-message', async (event, arg) => {
    if(arg === "sendData"){
      const query = "SELECT * FROM to-do"
      database.(query,(err,rows)=>{
        event.reply("asynchronous-reply", (err && err.message) || rows);
      })
    }
    }
    ```

    #Packaging

      - Change the database link to
        ```
        path.join(__dirname, '../../extraResources/db.sqlite3')

        ```
      - Then run
        ```
        npm run electron-Pack
        ```
