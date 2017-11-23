const { app, BrowserWindow } = require('electron')
const projectPath = `file://${__dirname}/`;
let win;

function createWindow () 
{
  // Create the browser window.
	win = new BrowserWindow({
		width: 1200, 
		height: 800,
		backgroundColor: '#FFFFFF',
		icon: projectPath + `dist/assets/logo.png`
	})
	
	win.loadURL(projectPath + `dist/index.html`)
	
	//// uncomment below to open the DevTools.
	// win.webContents.openDevTools()
	
	// Event when the window is closed.
	win.on('closed', function () 
	{
		win = null
	})
}
// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () 
{
	// On macOS specific close process
	if (process.platform !== 'darwin')
	{
		app.quit()
	}
})
app.on('activate', function () 
{
	// macOS specific close process
	if (win === null) 
	{
		createWindow()
	}
})