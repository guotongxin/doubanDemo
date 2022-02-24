<template>
  <div class="hot-film-main">
    <div class="new-film-list">
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
        shorthand: 'cmdsj',
        imgurl: require('@/assets/images/9.jpg'),
        name: '楚门的世界',
        score: 9.2
      }, {
        shorthand: 'dmkj',
        imgurl: require('@/assets/images/10.jpg'),
        name: '盗梦空间',
        score: 9.3
      }, {
        shorthand: 'fkdwc',
        imgurl: require('@/assets/images/11.jpg'),
        name: '疯狂动物城',
        score: 9.1
      }, {
        shorthand: 'fczlm',
        imgurl: require('@/assets/images/12.jpg'),
        name: '复仇者联盟',
        score: 8.1
      }, {
        shorthand: 'hxjy',
        imgurl: require('@/assets/images/13.jpg'),
        name: '火星救援',
        score: 8.4
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
