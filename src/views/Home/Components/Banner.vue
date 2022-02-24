<template>
  <div class="banner">
    <a href="javascript:;"><img src="@/assets/images/banner1.jpg" /></a>
    <a href="javascript:;"><img src="@/assets/images/banner2.jpg" /></a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.banner{
  margin-top:50px;
}
.banner>a:not(:first-child){
  display:none;
}

</style>
