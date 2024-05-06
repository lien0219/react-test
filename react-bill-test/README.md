# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 路径解析配置

1.安装craco插件

npm i -D@craco/craco

2.根目录下创建配置文件

craco.config.js

3.配置文件中添加路径解析配置

const path = require("path");



*module*.*exports* = {

 webpack: {

  alias: {

   "@": path.resolve(__dirname, "src"),

  },

 },

};

4.包文件中配置启动和打包命令

 "scripts": {

  "start": "craco start",

  "build": "craco build",

  "test": "react-scripts test",

  "eject": "react-scripts eject"

 },

## 联想路径配置

根目录添加jsconfig.json文件

{

 "compilerOptions": {

  "baseUrl": "./",

  "paths": {

   "@/*": ["src/*"]

  }

 }

}

## json-server实现数据Mock

1.安装json-server

npm i -D json-server

2.准备json文件

![image-20240506182322498](C:\Users\李恩\AppData\Roaming\Typora\typora-user-images\image-20240506182322498.png)

3.添加启动命令

![image-20240506182446467](C:\Users\李恩\AppData\Roaming\Typora\typora-user-images\image-20240506182446467.png)

4.访问接口测试

 http://localhost:8080/ka
