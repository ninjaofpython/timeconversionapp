/*const electron = require('electron');
const {app, BrowserWindow} = electron;
app.on('ready', () => {
    let win = new BrowserWindow({width:800, height: 600})
    win.loadURL(`file://${__dirname}/index.html`)
})*/
const electron = require('electron');
const {app, BrowserWindow, Menu} = electron;
var mainWindow = null;

app.on("window-all-closed", function(){
    app.quit();
});

app.on("ready", function () {
    mainWindow = new BrowserWindow({
        width: 980,
        height: 650,
        "min-width": 980,
        "min-height": 650
    });
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    mainWindow.on("closed", function () {
        mainWindow =  null;
    });

    // Create the Application's main menu
    var template = [{
        label: "Application",
        submenu: [
            { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
            { type: "separator" },
            { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
        ]}, {
        label: "Edit",
        submenu: [
            { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
            { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
            { type: "separator" },
            { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
            { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
            { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
            { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
        ]}
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});