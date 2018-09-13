const electron = require('electron')
const {app, BrowserWindow} = electron
  
let win

function createWindow () {
  // let displays = electron.screen.getAllDisplays()
  // let externalDisplay = displays.find((display) => {
  //   return display.bounds.x !== 0 || display.bounds.y !== 0
  // })

  // if (externalDisplay) {
  //   win = new BrowserWindow({
  //     x: externalDisplay.bounds.x + 50,
  //     y: externalDisplay.bounds.y + 50
  //   })
  //   win.loadURL('https://github.com')
  // }
  
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  // 创建浏览器窗口
  win = new BrowserWindow({
    width,
    height,
    // width: 800, 
    // height: 600,
    // fullscreen: false,
    backgroundColor: '#fff'
  })

  // 然后加载应用的 index.html。
  // win.loadFile('index.html')
  // win.loadURL('https://github.com')
  win.loadURL('http://localhost:3000/h5/list/?ak=3c11d60d903e49d5a47ad2a58bb0db97&sk=ca5137e40b874abd893e762f1d53d839')

  // 打开开发者工具
  win.webContents.openDevTools()

  win.once('ready-to-show', () => {
    win.show()
  })
  
  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })

  // 当全部窗口关闭时退出。
  app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (win === null) {
      createWindow()
    }
  })
}

app.on('ready', createWindow)