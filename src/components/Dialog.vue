<template>
  <div class="dialog-box" v-if="isDialog">
    <div class="title">
      <div class="collect">
         <span>添加收藏:</span>
      <span></span>
      </div>
      <div class="del">
        X
      </div>

    </div>
    <div class="main">
      <div class="want">
        <div class="label">
          <div>标签(多个标签用空格分开):</div>
          <div>
            <input  type="text" >
          </div>

        </div>
        <div class="tags">常用标签:
          <ul>
            <li v-for="(item,index) in tiplist" :key="index">{{item}}</li>

          </ul>
        </div>
      </div>
      <div class="score"></div>
    </div>
    <div class="footer">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDialog: {
      type: Boolean,
      default: false
    },
    flag: {
      type: String,
      default: 'want'
    }
  },
  data () {
    return {
      tiplist: ['pixar', '梦想', '爱情', '动画', '冒险', '美国', '3D', '温情']
    }
  }

}
</script>

<style lang="less" scoped>

.dialog-box{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 200px;
  // 居中
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  border: 10px solid rgba(243, 243, 243, 0.884);
  border-radius: 5px;
  .title,.footer{
    background-color: #d8ceff;
    color: #6a9b7d;
    font-size: 16px;
    height: 50px;
    padding: 0 20px;

  }
  .title{
    line-height: 50px;
    display: flex;
    justify-content: space-between;

  }
  .main{
    height: 100px;
    .want{
       height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding-left: 20px;
      .label{
        display: flex;
        input{
          border: none;
          border: 1px solid #000;
          margin-left: 3px;
          // outline: solid #000 3px;
        }
      }
      .tags{
        display: flex;
        ul{
          display: flex;
          li{
            padding: 3px;
            font-size: 12px;
            margin-left: 8px;
            color: #40a8ab;
            border: 1px solid #b9b9b9;
            background-color: #ddf5ff;
          }
        }
      }

    }

  }
  .footer{
    // line-height: 50px;
    display: flex;
    justify-content: end;
    align-items: center;
    button{
      height: 30px;
      padding: 10px;
      // line-height: 30px;
      text-align: center;
      background-color: #efefef;
    }

  }

}

</style>
