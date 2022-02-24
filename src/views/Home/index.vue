<template>
  <div id="main" class="w">
    <div id="left">
      <!-- 正在热映 -->
      <Rotate />
      <!-- 轮播 -->
      <Banner />
      <!-- 最近热门 -->
      <Tab />
    </div>
    <div id="aside">
      <!-- 一周口碑榜 -->
      <Billboard />
      <!-- 合作练习 -->
      <Contact />
    </div>
  </div>
</template>

<script>
import Rotate from '@/views/Home/Components/Rotate'
import Banner from '@/views/Home/Components/Banner'
import Tab from '@/views/Home/Components/Tab'
import Billboard from '@/views/Home/Components/Billboard'
import Contact from '@/views/Home/Components/Contact'
export default {
  components: {
    Rotate,
    Banner,
    Tab,
    Billboard,
    Contact
  }
}
</script>

<style lang="less" scoped>
#main{
  display: flex;
  justify-content: space-between;
}
#aside{
width:360px;
margin-left:80px;}

</style>
