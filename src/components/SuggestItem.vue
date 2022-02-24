<template>
  <div class="film-box">
    <div class="left">
      <img :src="obj.img" alt="" srcset="">
    </div>
    <div class="right">
      <div class="info">
        <div class="file-title">{{obj.title}}</div>
        <div class="file-year">{{obj.year}}</div>
      </div>

      <div class="sub-title">{{obj.sub_title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object
    }
  }

}
</script>

<style lang="less" scoped>

.film-box{
  height: 90px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  border-bottom: 1px solid #b3aeae;
  .left{
    width: 50px;
    height: 70px;
    margin-right: 5px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .right{
    .info{
      display: flex;
      .file-title{
       color: turquoise;
       font-size: 14px;
      }
      .file-year{
        color: #b3aeae;
        font-size: 12px;
        margin-left: 3px;
      }
    }
    .sub-title{
      color: #b3aeae;
      font-size: 12px;
    }

  }
}

</style>
