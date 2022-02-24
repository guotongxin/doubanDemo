<template>
  <div class="also-like">
    <span class="title">喜欢这部电影的人也喜欢 · · · · · ·</span>
    <div class="like-film-list">
      <ul>
        <li v-for="(item,index) in data" :key="index">
          <a @click="show(item.shorthand)"><img :src="item.imgurl" :title="item.name"></a>
          <p><a @click="show(item.shorthand)">{{item.name}}</a></p>
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
        name: '头号玩家'
      }, {
        shorthand: 'yhhwd',
        imgurl: require('@/assets/images/5.jpg'),
        name: '银河护卫队'
      }, {
        shorthand: 'crzdy2',
        imgurl: require('@/assets/images/6.jpg'),
        name: '超人总动员2'
      }, {
        shorthand: 'jqrzdy',
        imgurl: require('@/assets/images/7.jpg'),
        name: '机器人总动员'
      }, {
        shorthand: 'fkdwc',
        imgurl: require('@/assets/images/11.jpg'),
        name: '疯狂动物城'
      }]
    }
  },
  methods: {
    show (value) {
      this.$router.push(`/${value}`)
    }
  }

}
</script>

<style lang="less" scoped>
.also-like{
  margin-top:10px;
  width:760px;
   .title{
    color: #339966;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
  }
   .like-film-list{
     ul{
       display: flex;
       li{

         &:not(:last-child){
          float:left;
          margin-right:15px;
        }
        p{
           margin:8px auto;
          text-align:center;
          a{
            color:#0080FF;
          }
        }
       }
     }
   }

}

</style>
