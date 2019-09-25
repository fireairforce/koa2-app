function pv(ctx) {
  global.console.log('pv',ctx.path);
}

module.exports = function(){
    return async function(ctx,next){
        // 处理的过程
       pv(ctx);
        // 当前的中间价运行完毕，交给后面的中间件处理    
       await next();
    }
}

// 它这里会输出服务端响应到的文件的内容
// 调用koa-pv 会先输出一个 /
// 然后会输出一个`stylesheets/style.css`的文件