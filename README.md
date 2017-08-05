详细记录react-cnode项目的实战过程

#1 cli安装
```
npm install -g create-react-app
create-react-app react-cnode
cd react-cnode
npm start
```
create-react-app的[README](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

tip：生成项目后，脚手架为了“优雅”... ...隐藏了所有的webpack相关的配置文件，此时查看项目文件夹目录，会发现找不到任何webpack配置文件。通过```npm run eject```来生成webpack配置文件。

#2 安装制作过程中需要的插件
```
npm install react-router --save 
npm install redux --save
npm install element-react --save
npm install element-theme-default --save
npm install sass-loader node-sass --save-dev
```


#3 cnode首页

#4 cnode列表页


参考文档

[react官方文档](https://facebook.github.io/react/)