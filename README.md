# Node_Academin
## Commands
1. npm init
2. npm i nodemon -g --save-dev
3. npm start
4. Setting Followings in package.json file
```json
  "scripts": {
    "start": "nodemon app.js",
  },
```
3. To Debug use F5
4. To Launch the Debugger when changes detech set the following in launch.json
```json
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}\\app.js",
      "restart": true,
      "runtimeExecutable": "nodemon"
    }
```