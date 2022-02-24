<template>
  <div class="subject">
    <!-- 影片 -->
    <div class="mainpic">
      <img src="@/assets/images/3.jpg" />
    </div>
    <!-- 详情 -->
    <div class="info">
      <span class="item">导演</span>: 彼特·道格特 / 鲍勃·彼德森<br />
      <span class="item">编剧</span>: 鲍勃·彼德森 / 彼特·道格特 / 汤姆·麦卡锡<br />
      <span class="actor"
        ><span class="item">主演</span>: 爱德华·阿斯纳 / 克里斯托弗·普卢默 /
        乔丹·长井 / 鲍勃·彼德森 / 戴尔里·林多 / 杰罗姆·兰福特</span
      ><br />
      <span class="item">类型:</span> 剧情 / 喜剧 / 动画 / 冒险<br />
      <span class="item">制片国家/地区:</span> 美国<br />
      <span class="item">语言:</span> 英语<br />
      <span class="item">上映日期:</span> 2009-08-04(中国大陆) /
      2009-05-13(戛纳电影节) / 2009-05-29(美国)<br />
      <span class="item">片长:</span> 96分钟<br />
      <span class="item">又名:</span> 冲天救兵(港) / 天外奇迹(台) /
      飞屋历险记<br />
      <span class="item">IMDb链接:</span> tt1049413<br />
    </div>
    <!-- 评分 -->
    <div class="rating">
      <div class="rating-logo">豆瓣评分</div>
      <div class="rating-level">
        <span class="rating-score">8.9</span>
        <div class="rating-right">
          <div>
            <span class="starrating"><span class="star45"></span></span>
          </div>
          <div class="rating-sum">616061人评价</div>
        </div>
      </div>
      <div class="star-count">
        <div class="star-item" v-for="(item, index) in data" :key="index">
          <span class="stars" :title="item.words">{{ 5 - index }}星</span>
          <span class="bar" :style="{ width: item.width }"></span>
          <span class="star-per">{{ item.per }}</span>
        </div>
      </div>
      <div class="compare">
        好于 96% 动画片<br />
        好于 98% 冒险片
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        { words: '力荐', width: '64px', per: '55.4%' },
        { words: '推荐', width: '41px', per: '35.9%' },
        { words: '还行', width: '9px', per: '8.3%' },
        { words: '较差', width: '0px', per: '0.4%' },
        { words: '很差', width: '0px', per: '0.1%' }
      ]
    }
  }

}
</script>

<style lang="less" scoped>
  .subject{
    display: flex;
    width:760px;
    // justify-content: space-between;
    // 详情
    .info{
      width:360px;
      margin-left:20px;
      line-height:1.6em;
      font-size:14px;
      .item{
        color:#777777;
      }
    }
    // 评分
    .rating{
      width:200px;
      margin-left:20px;
      border-left:1px solid #BBBBBB;
      padding-left:15px;
      font-size:14px;
      .rating-logo{
      color:#777777;
     }
     .rating-level{
       display: flex;
      margin-top:13px;
      span{
        font-size:30px;
      }
      .rating-right{
        // display: flex;
      .starrating{display:block;width:100px;height:23px;background: url('../../../../assets/images/starrating1.gif') top left repeat-x;}
      .star40{display:block;background:url('../../../../assets/images/starrating1.gif') 0px -35px repeat-x;width:80px;height:23px;}
      .star45{display:block;background:url('../../../../assets/images/starrating1.gif') 0px -35px repeat-x;width:90px;height:23px;}
      .star35{display:block;background:url('../../../../assets/images/starrating1.gif') 0px -35px repeat-x;width:70px;height:23px;}
      .star30{display:block;background:url('../../../../assets/images/starrating1.gif') 0px -35px repeat-x;width:60px;height:23px;}
      }
    }
    .star-count{
      padding-top:16px;
      padding-bottom:16px;
      .star-item{
        height:20px;
        line-height:20px;
        color:#777777;
        display: flex;
        // .stars{
        //   // float:left;
        // }
        .bar{
          display:block;
          float:left;
          margin:5px 6px 5px 12px;
          height:10px;
          background:orange;
          opacity:0.8;
        }
      }
    }
    .compare{
      margin-top:20px;
      border-top:1px solid #BBBBBB;
      height:80px;
      display:table-cell;
      vertical-align:middle;
      // color: red;

    }
  }
}

</style>
