function pv(ctx) {
    global.console.log('m3');
  }
  
  module.exports = function(){
      return async function(ctx,next){
         global.console.log('m3 start');
         pv(ctx);
         await next();
         global.console.log('m3 end');
      }
  }