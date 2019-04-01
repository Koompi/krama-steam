const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 980,
    height: 600,
    minWidth: 980,
    minHeight: 650,
    transparent: true
    // frame: false
  });
  win.setMenu(null);
  win.minimize();

  // Specify entry point
  win.loadURL("http://localhost:3000");
  // win.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, "public/index.html"),
  //     protocol: "file",
  //     slashes: true
  //   })
  // );

  // Show dev tools
  // Remove this line before distributing
  win.webContents.openDevTools();

  // Remove window once app is closed
  // win.on("closed", function() {
  //   win = null;
  // });
}

app.on("ready", function() {
  createWindow();
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
