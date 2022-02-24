<template>
  <div>
     <!-- 头部框条 -->
    <div class="top-nav">
      <ul>
        <li>豆瓣</li>
        <li>读书</li>
        <li>电影</li>
        <li>音乐</li>
        <li>同城</li>
        <li>小组</li>
        <li>阅读</li>
        <li>FM</li>
        <li>时间</li>
        <li>豆品</li>
      </ul>
      <ul>
        <li>下载豆瓣客户端</li>
        <li>登录/注册</li>
      </ul>
    </div>
    <!-- 头部 -->
    <header>
      <div class="w">
         <div class="nav-wrap">
          <div class="nav-logo">
            <a href="https://movie.douban.com/">豆瓣电影</a>
          </div>
          <div class="inp">
            <input type="search" v-model="kw" placeholder="搜索电影、电视剧、综艺、影人" @input="searchFn">
            <!-- 搜索列表 -->
            <div class="suggest-list" v-show="isShow">
              <SuggestItem v-for="obj in suggestList" :key="obj.id" :obj="obj"></SuggestItem>
            </div>
          </div>
      </div>
      <div class="nav-secondary w">
        <ul class="w">
          <li>影讯&购票</li>
          <li>选电影</li>
          <li>电视剧</li>
          <li>排行榜</li>
          <li>分类</li>
          <li>影评</li>
          <li>2021年度榜单</li>
          <li>2021书影音报告</li>
        </ul>
      </div>
      </div>

    </header>
    <!-- <img v-for="obj in suggestList" :key="obj.id"  :src="obj.img" alt=""> -->
  </div>
</template>

<script>
import { getSearchListAPI } from '@/api'
import SuggestItem from '@/components/SuggestItem'
export default {
  data () {
    return {
      kw: '',
      timer: null,
      suggestList: [],
      isShow: false
    }
  },
  components: {
    SuggestItem
  },
  methods: {
    searchFn () {
      // 防抖: 延时执行逻辑代码, 事件再次触发时, 清除上一个定时器
      clearTimeout(this.timer)

      if (this.kw.length === 0) {
        this.suggestList = []
      } else {
        this.isShow = true
        // console.log(this.kw)
        this.timer = setTimeout(async () => {
          const res = await getSearchListAPI({ q: this.kw })
          console.log('搜索列表', res)
          this.suggestList = res.data
        }, 300)
      }
    }
  },
  watch: {
    isShow () {
      if (this.isShow) {
        setTimeout(() => {
          this.isShow = false
        }, 2000)
      }
    }
  }

}
</script>

<style lang="less" scoped>
@import '../assets/css/nav.css';

</style>
