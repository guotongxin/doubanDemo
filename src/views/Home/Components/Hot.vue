<template>
  <div class="hot-film-main">
    <div class="hot-film-list">
      <ul>
        <li v-for="(item,index) in data" :key="index">
          <a @click="show(item.shorthand)">
            <img :src="item.imgurl" :title="item.name">
          </a>
          <p>
            <a @click="show(item.shorthand)">{{item.name}}</a>
            <span class="score">{{item.score}}</span>
          </p>
        </li>
      </ul>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        shorthand: 'thwj',
        imgurl: require('@/assets/images/2.jpg'),
        name: '头号玩家',
        score: 8.7
      }, {
        shorthand: 'fwhyj',
        imgurl: require('@/assets/images/3.jpg'),
        name: '飞屋环游记',
        score: 8.9
      }, {
        shorthand: 'yhhwd',
        imgurl: require('@/assets/images/5.jpg'),
        name: '银河护卫队',
        score: 8.0
      }, {
        shorthand: 'crzdy2',
        imgurl: require('@/assets/images/6.jpg'),
        name: '超人总动员2',
        score: 8.1
      }, {
        shorthand: 'jtmdt',
        imgurl: require('@/assets/images/8.jpg'),
        name: '惊天魔盗团',
        score: 7.5
      }]

    }
  }

}
</script>

<style lang="less" scoped>
.hot-film-main{
  clear:both;
  width:760px;
  border-top:1px solid #CCCCCC;
  .hot-film-list,.new-film-list{
    padding-top: 20px;
  }
  .hot-film-list ul li:not(:last-child),.new-film-list ul li:not(:last-child){
    float: left;
    margin-right: 15px;
  }
  .hot-film-list ul li p,.new-film-list ul li p{
    text-align: center;
    line-height: 20px;
    padding-top: 20px;
    font-family: "微软雅黑", "宋体";
  }
  .hot-film-list ul li p a,.new-film-list ul li p a{
    color:#000000;
  }
  .hot-film-list ul li p span,.new-film-list ul li p span{
    margin-left:5px;
    color:green;
    font-family:Arial;
    font-weight:bold;
    font-size:14px;
  }
}
</style>
