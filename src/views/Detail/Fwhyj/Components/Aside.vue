<template>
  <div>
    <div class="common-label">
      <span class="title">豆瓣成员常用的标签 · · · · · ·</span>
      <div class="label-list">
        <ul>
          <li>动画</li>
          <li>梦想</li>
          <li>美国</li>
          <li>冒险</li>
          <li>pixar</li>
          <li>爱情</li>
          <li>Disney</li>
          <li>3D</li>
        </ul>
      </div>
    </div>
    <div class="recommend">
      <span class="title">以下豆列推荐 · · · · · ·</span>
      <div class="recommend-list">
        <ul>
          <li>
            <a href="javascript:;">{北美电影票房总排行}</a>
            <span>(荔枝超人)</span>
          </li>
          <li>
            <a href="javascript:;">【内牛满面】</a>
            <span>(影志)</span>
          </li>
          <li>
            <a href="javascript:;">【励志电影】</a>
            <span>(影志)</span>
          </li>
          <li>
            <a href="javascript:;">【豆瓣高分动画长片】</a>
            <span>(影志)</span>
          </li>
          <li>
            <a href="javascript:;">【爱看动画】</a>
            <span>(影志)</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="who">
      <span class="title">谁在看这部电影 · · · · · ·</span>
      <div class="number">
        <a href="javascript:;">770906人看过</a>
        &nbsp;/&nbsp;
        <a href="javascript:;">84278人想看</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .title{
    color: #339966;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
  }
.common-label{
  margin-top:60px;

  li{
    float:left;
    margin-top:10px;
    padding:2px 8px;
    background:#DDDDFF;
    color:#0080FF;
    cursor:pointer;
    font-size:14px;
    margin-right:8px;
    &:hover{
      background:#CACDFF;
    }
}
}
// 推荐
.recommend{
  clear:both;
  padding-top:30px;
  .recommend-list{
    ul{
       li{
          height:40px;
          line-height:40px;
          border-top:1px dashed #999999;
          a{
            font-size:14px;
            color:#0080FF;
          }
          span{
            font-size:14px;
            color:#666666;
          }
          &:last-child{
            border-bottom:1px dashed #999999;
          }
       }

    }
  }
}
.who{
  margin-top:30px;
  .number{
    a{
       font-size:14px;
        color:#0080FF;
        &:hover{
          background:#0033FF;
          color:#FFFFFF;
        }
    }

  }
}

</style>
