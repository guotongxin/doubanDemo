<template>
  <div class="hot-film">
    <div class="hot-film-top">
      <h2>最近热门的电影</h2>
      <ul>
        <li><a :class="{active : current=='Hot'}" @click="current='Hot'">热门</a></li>
        <li><a :class="{active : current=='New'}" @click="current='New'">最新</a></li>
      </ul>
    </div>
  <component :is="current"></component>
  </div>
</template>

<script>
import Hot from '@/views/Home/Components/Hot'// 引入热门电影组件
import New from '@/views/Home/Components/New'// 引入最新电影组件
export default {
  data () {
    return {
      current: 'Hot' // 默认显示热门电影
    }
  },
  components: {
    Hot,
    New
  }

}
</script>

<style lang="less" scoped>

.hot-film{
  margin-top:10px;
  .hot-film-top{
    height:40px;
    line-height:40px;
  }
  h2{
    float:left;
  }
  ul{
    li{
      float:left;
      margin-left:20px;
      a{
        cursor:pointer;font-family:"微软雅黑";
        color:#999999;
        height:20px;
        line-height:20px;
        &.active{
          color:#000000;
        }
        &:not(.active):hover{
          background:#6699FF;
          color:#FFFFFF;
        }
      }
    }
  }

}

</style>
