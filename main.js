const { app, BrowserWindow } = require('electron')
const projectPath = `file://${__dirname}/`;
let window;

function createWindow () 
{
  // Create the browser window.
	window = new BrowserWindow({
		width: 1200, 
		height: 800,
		backgroundColor: '#FFFFFF',
		icon: projectPath + `dist/assets/logo.png`
	})
	
	window.loadURL(projectPath + `dist/index.html`)
	
	//// uncomment below to open the DevTools.
	// window.webContents.openDevTools()
	
	// Event when the window is closed.
	window.on('closed', function () 
	{
		window = null
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
	if (window === null) 
	{
		createWindow()
	}
})