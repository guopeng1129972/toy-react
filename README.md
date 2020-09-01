# toy-react
 
ls
commit 1 初始化项目
安装webpack webpack-cli
npm install webpack webpack-cli --save-dev
#############################################报错
##gyp: No Xcode or CLT version detected!
##gyp ERR! configure error 
##gyp ERR! stack Error: `gyp` failed with exit code: 1
##gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:351:16)
##gyp ERR! stack     at ChildProcess.emit (events.js:210:5)
##gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:272:12)
##gyp ERR! System Darwin 19.6.0
##gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
##gyp ERR! cwd /Users/mac/Desktop/github/toy-react/node_modules/watchpack-chokidar2/node_modules/fsevents
##gyp ERR! node -v v12.12.0
##gyp ERR! node-gyp -v v5.1.0
##gyp ERR! not ok 
##npm notice created a lockfile as package-lock.json. You should commit this file.
##npm WARN notsup Unsupported engine for watchpack-chokidar2@2.0.0: wanted: {"node":"<8.10.0"} (current: {"node":"12.12.0","npm":"6.14.4"})
##npm WARN notsup Not compatible with your version of node/npm: watchpack-chokidar2@2.0.0
##npm WARN toy-react@1.0.0 No repository field.
#############################################
执行安装
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

babel 转换成可以跑在老浏览器的js

cnpm install --save-dev babel-loader @babel/core @babel/preset-env

cnpm install --save-dev @babel/plugin-transform-react-jsx

pragma 放什么就会编译成什么文本
          plugins:[['@babel/plugin-transform-react-jsx',{pragma:'createElement'}]]


