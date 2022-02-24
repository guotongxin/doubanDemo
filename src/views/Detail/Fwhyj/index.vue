<template>
  <div id="main" class="w">
    <div id="left">
      <h1>
        <span class="movie-name">飞屋环游记 Up</span>
        <span class="year">(2009)</span>
      </h1>
      <!-- 详情 -->
      <Subject />
      <!-- 影片评分等 -->
      <Evaluation />
      <!-- 剧情介绍 -->
      <Intro />
      <!-- 也喜欢 -->
      <Also />
    </div>
    <div id="aside">
      <!-- 侧边栏 -->
      <Aside />
    </div>
  </div>
</template>

<script>
import Subject from '@/views/Detail/Fwhyj/Components/Subject'
import Evaluation from '@/views/Detail/Fwhyj/Components/Evaluation'
import Intro from '@/views/Detail/Fwhyj/Components/Intro'
import Also from '@/views/Detail/Fwhyj/Components/Also'
import Aside from '@/views/Detail/Fwhyj/Components/Aside'
export default {
  name: 'container',
  components: {
    Subject,
    Evaluation,
    Intro,
    Also,
    Aside
  }
}
</script>

<style lang="less" scoped>

#main{
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
}
#left h1{
  height:80px;
  line-height:80px;
    .year{
    color:#999999;
  }
}

</style>
