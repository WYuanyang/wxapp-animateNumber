# wxapp-animateNumber
微信小程序--滚动数字
##效果展示
![jsh5css.cn](http://jsh5css.cn/blog/wp-content/uploads/2016/12/20161226172301_82851.gif)

##使用方式
```javascript
  // pages/main/index.js
import NumberAnimate from "../../utils/NumberAnimate";
```
```javascript
   // pages/main/index.js
  let n1 = new NumberAnimate({
        from:num1,//开始时的数字
        speed:2000,// 总时间
        refreshTime:100,//  刷新一次的时间
        decimals:3,//小数点后的位数
        onUpdate:()=>{//更新回调函数
          this.setData({
            num1:n1.tempValue
          });
        },
        onComplete:()=>{//完成回调函数
            this.setData({
              num1Complete:" 完成了"
            });
        }
    });
```
##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* Email: yuanyang613@163.com
* QQ: 317147055
* Blog: http://jsh5css.cn
