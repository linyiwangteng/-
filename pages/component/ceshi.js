
// var app=getApp();
// var flag=1;
// var order=['green','red','yellow','blue','pink'];
// Page({
//     data:{
//         userInfo:{},
//         tips:app.globalData.ceshi,
//         toview:'red',
//         scrollTop: 0,
//     },
//     onLoad:function(){
//         console.log('onLoad');
//         var that=this;
//         app.getUserInfo(function(userInfo){
//                  //更新数据
//                  console.log(userInfo);
//             that.setData({
//                 userInfo:userInfo
//             })
//         });
//     },
//     ceshi:function(){
//         console.log("this is a ceshi");
//     },
//     getCurrentPage:function(){
//         console.log(getCurrentPages());
//     },
//     upper:function(e){
//         console.log(e);
//     },
//     lower:function(e){
//         console.log(e);
//     },
//     scroll:function(e){
//         console.log(e);
//     },
//     tap:function(e){
//         for(var i = 0; i<order.length;++i){
            
//             if(order[i] === this.data.toview){
//                 console.log(this.data.toview)
//                 this.setData({
//                     toview:order[i+1]
//                 })
//                 break
//             }
//        }
        
//     },
//     tapMove:function(){
//         this.setData({
//             scrollTop:this.data.scrollTop+10
//         })
//     }

// })

var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})

































