
var app=getApp();
Page({
    data:{
        userInfo:{},
        tips:app.globalData.ceshi
    },
    onLoad:function(){
        console.log('onLoad');
        var that=this;
        app.getUserInfo(function(userInfo){
                 //更新数据
                 console.log(userInfo);
            that.setData({
                userInfo:userInfo
            })
        });
    },
    ceshi:function(){
        console.log("this is a ceshi");
    },
    getCurrentPage:function(){
        console.log(getCurrentPages());
    }
})