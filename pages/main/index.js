// pages/main/index.js
import NumberAnimate from "../../utils/NumberAnimate";
Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    
  },
  onShow:function(){
    
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },

  onUnload:function(){
    // 页面关闭

  },
 animate:function(){

   this.setData({
     num1:'',
     num2:'',
     num3:'',
     num1Complete:'',
     num2Complete:'',
     num3Complete:''
   });

    let num1 = 18362.856;
    let n1 = new NumberAnimate({
        from:num1,
        speed:1000,
        refreshTime:100,
        decimals:3,
        onUpdate:()=>{
          this.setData({
            num1:n1.tempValue
          });
        },
        onComplete:()=>{
            this.setData({
              num1Complete:" 完成了"
            });
        }
    });

    let num2 = 13388;
    let n2 = new NumberAnimate({
        from:num2,
        speed:1500,
        decimals:0,
        refreshTime:100,
        onUpdate:()=>{
          this.setData({
            num2:n2.tempValue
          });
        },
        onComplete:()=>{
            this.setData({
              num2Complete:" 完成了"
            });
        }
    });

    let num3 = 2123655255888.86;
    let n3 = new NumberAnimate({
        from:num3,
        speed:2000,
        refreshTime:100,
        decimals:2,
        onUpdate:()=>{
          this.setData({
            num3:n3.tempValue
          });
        },
        onComplete:()=>{
            this.setData({
              num3Complete:" 完成了"
            });
        }
    });
 }
})