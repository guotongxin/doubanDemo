<template>
     <div class="is-on">
      <div class="hd">
        <h2>正在热映</h2>
        <div class="right">
          <span>1/3</span>
          <a class="leftBtn" href="javascript:;" @click="turnLeft"></a>
          <a class="rightBtn" href="javascript:;" @click="turnRight"></a>
        </div>
      </div>
      <div class="bd" @mouseenter="stopMove" @mouseleave="continueMove">
        <div class="container">
          <ul>
            <li v-for="(item,index) in filmData" :key="index">
              <a @click="show(item.shorthand)"><img :src="item.imgurl" :title="item.name" /></a>
              <p><a @click="show(item.shorthand)">{{item.name}}</a></p>
              <div class="rating">
                <span class="starrating"><span :class="item.star"></span></span>
                <span class="score">{{item.score}}</span>
              </div>
              <a href="javascript:;" class="goupiao">选座购票</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import data from '@/assets/js/data' // 引入电影数据
import $ from 'jquery'
export default {
  data () {
    return {
      filmData: data,
      nowScreen: 0, // 屏幕号
      screenAmount: 0, // 总屏幕号
      timer: 0 // 定时器
    }
  },
  mounted () {
    this.screenAmount = $('.container ul li').length / 5 // 计算屏幕数量
    this.timer = setInterval(() => {
      this.turnRight()
    }, 5000)
  },
  methods: {
    // 左箭头上一页
    turnLeft () {
      console.log('turnLeft')
      this.stopMove()
      this.continueMove()
      if (this.nowScreen > 0) {
        this.nowScreen-- // 屏幕号减1
        $('.container').animate({ left: -775 * this.nowScreen }, 800)// 定义动画
      } else {
        console.log(this.nowScreen)
        this.nowScreen = this.screenAmount - 1
        $('.container').css('left', -775 * this.screenAmount).animate({ left: -775 * (this.screenAmount - 1) }, 800)// 移动到复制的5个元素并执行动画
      }
      $('.hd .right span').html(this.nowScreen + 1 + '/' + this.screenAmount)// 显示屏幕号
    },
    // 右箭头下一页
    turnRight () {
      console.log('turnRight')
      this.stopMove()
      this.continueMove()
      if (this.nowScreen < this.screenAmount - 1) {
        this.nowScreen++ // 屏幕号加1
        $('.container').animate({ left: -775 * this.nowScreen }, 800)// 定义动画
      } else {
        this.nowScreen = 0
        $('.container').animate({ left: -775 * this.screenAmount }, 800, function () {
          $(this).css('left', 0)// 元素回到初始位置
        })
      }
      $('.hd .right span').html(this.nowScreen + 1 + '/' + this.screenAmount)// 显示屏幕号
    },
    // 鼠标进入
    stopMove () {
      // console.log('stopMove')
      clearInterval(this.timer) // 鼠标进入元素停止移动
    },
    // 鼠标离开
    continueMove () {
      console.log('continueMove')
      this.timer = setInterval(() => {
        this.turnRight()
      }, 5000)
    },
    // 跳转详情
    show (val) {
      console.log(val)
      this.$router.push(`/${val}`)
      // console.log('show')
    }
  },
  destroyed () {
    clearInterval(this.timer) // 销毁组件时停止移动
  }

}
</script>

<style lang="less" scoped>
.is-on{
  width: 760px;
  .hd {
    h2{
    float: left;
    width: 100px;
    height:40px;
  }
    .right{
      float: right;
      width: 100px;margin-top: 5px;
      span{
        float: left;
        margin-right: 10px;
        font-family:"微软雅黑"
      }
    a{
      float: left;
      width: 18px;
      height: 18px;
      background: url(../../../assets/images/slide_swithc_2.png) no-repeat;
      margin-right: 10px;
      margin-top:2px
    }
    a.rightBtn{
      background-position: -18px 0;
    }
    }
  }
  .bd{
      clear: both;
      border-top: 1px solid #ccc;
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 330px;
      margin-top:30px;
      .container{
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 20px;
        ul{
          width: 40000px;
          li{
            float: left;
            margin-right: 15px;
            spam{
              float: left;
            }
            p{
              text-align: center;
              line-height: 20px;
              padding-top: 20px;
              font-family: "微软雅黑", "宋体";
              color:#000000;
              a{
                color:#000000;
              }
            }
          }
        }
        //
        .rating{
          width:100px;
          height:20px;
          margin:8px auto;
          text-align:center;
          display: flex;
          .starrating{display:block;width:75px;height:20px;background: url('../../../assets/images/starrating.gif') top left repeat-x;}
          .star40{display:block;background:url('../../../assets/images/starrating.gif') 0px -26px repeat-x;width:60px;height:20px;}
          .star45{display:block;background:url('../../../assets/images/starrating.gif') 0px -26px repeat-x;width:67px;height:20px;}
          .star35{display:block;background:url('../../../assets/images/starrating.gif') 0px -26px repeat-x;width:52px;height:20px;}
          .star30{display:block;background:url('../../../assets/images/starrating.gif') 0px -26px repeat-x;width:45px;height:20px;}
          .score{
            margin-left:5px;
            color:green;
            font-family:Arial;
            font-weight:bold;
            font-size:14px;
          }
        }
        .goupiao{
          clear:both;
          display: block;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background-color:#6699FF;
          color:white;
          border-radius: 4px;
          margin: 0 auto;
        }
    }
      }

}

</style>
