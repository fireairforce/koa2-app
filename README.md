## Notes
使用`koa-generator`生成的脚手架

安装:
```js
npm install -g koa-generator
```

生成:
```js
koa2 -e koa2-learn // 生成ejs为模板引擎的koa脚手架
koa2 koa2-learn  // 否则就是以pug为模板引擎
```

运行起来的方法为(这玩意儿用`nodemon`在跑，所以你懂我意思):
```js
npm run dev
```

## middlewares
中间件可以参考`app.js`里面代码，懒得讲了

只要是到达了服务端的请求，都会经过一波中间件。

处理中间价就想在穿越一个圈，先进的会后出。先处理的还是会往后面的中间件里面去给。通过`await next()`进行一个中间价的跳出。如果某个中间件处理之后没有`next`，后面直接出去就会`404`

