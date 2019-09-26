// 引入koa-router并且生成一波实例
const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  // global.console.log(next);
  ctx.cookies.set('pvid',Math.random())
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
    cookies: ctx.cookies.get('pvid')
  };
});

router.get("/testAsync", async (ctx) => {
  global.console.log("start", new Date().getTime());
  // a的结果就是resolve返回的结果 
  const a = await new Promise((resolve, reject) => {
    // 服务端的响应会等待1s,所以你会觉得卡
    setTimeout(()=>{
      // 这个输出会和上面的差个1s
      global.console.log('async a',new Date().getTime());
      resolve('ab');
    },1000)
  });
  ctx.body = {
    a
  }
});

module.exports = router;
