function pv(ctx) {
    global.console.log('m2');
  }
  
  module.exports = function(){
      return async function(ctx,next){
        global.console.log('m2 start');
        pv(ctx);
        await next();
        global.console.log('m2 end');
      }
  }