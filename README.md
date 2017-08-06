详细记录react-cnode项目的实战过程

1. cli安装
```
npm install -g create-react-app
create-react-app react-cnode
cd react-cnode
npm start
```
create-react-app的[README](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

tip：生成项目后，脚手架为了“优雅”... ...隐藏了所有的webpack相关的配置文件，此时查看项目文件夹目录，会发现找不到任何webpack配置文件。通过```npm run eject```来生成webpack配置文件。

webpack增加sass的支持,参考文章[http://www.cnblogs.com/yangrenmu/p/7118398.html](http://www.cnblogs.com/yangrenmu/p/7118398.html)
>```
npm install sass-loader node-sass --save-dev
```
在config/webpack.config.dev.js文件加上下面👇行前带有+的代码，可以参考这个[commit](https://github.com/junhey/react-cnode/commit/f1d334d7fc31c683fe4b891fdcca27c331840315)
```
           /\.gif$/,
            /\.jpe?g$/,
            /\.png$/,
 +          /.scss$/,
          ],
          loader: require.resolve('file-loader'),
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
 +      // load scss
 +      {
 +          test: /\.scss$/,
 +          loaders: ['style-loader', 'css-loader', 'sass-loader'],
 +      },
        // "url" loader works like "file" loader except that it embeds assets
        // smaller than specified limit in bytes as data URLs to avoid requests.
        // A missing `test` is equivalent to a match.
```


2. 安装制作过程中需要的插件
```
npm install react-router --save 
npm install redux --save
npm install element-react --save
npm install element-theme-default --save
```


3. cnode首页

4. cnode列表页


5. 踩坑记录

- 报错"react-router" does not contain an export named "IndexRoute"

检查一下react-router的版本，@4.x对于api的变动比较大，这个用法在@3.x里面是可以用的。
react-router 4.0.0 版本上使用creat-react-app会出现问题，换成```"react-router": "^2.8.1",```就好了

6. 参考文档

[react官方文档](https://facebook.github.io/react/)

[Create-React-App创建antd-mobile开发环境](http://www.jianshu.com/p/5e6c620ff4d6)