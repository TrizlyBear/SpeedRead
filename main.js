const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let index;

app.on('ready', function(){
   index = new BrowserWindow({
       webPreferences: {nodeIntegration: true},
       width: 625,
       height: 375,
       title: "Speed Read",
       minHeight: 325,
       minWidth: 680,
       frame: false,
       transparent: true,});
       index.loadURL(url.format({
           pathname: path.join(__dirname, 'index/index.html'),
           protocol: 'file:',
           slashes: true
       }))
       // index.setMenu(null);
})


