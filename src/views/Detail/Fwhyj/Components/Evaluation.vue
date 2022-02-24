<template>
    <div>
    <div class="evaluation">
      <div id="first">
        <a class="wantto" @click="wantPopup()">想看</a>
        <a class="seen" @click="seenPopup()">看过</a>
        <div>
          评价:&nbsp;
          <span class="star" @mouseout="Darken('#first')">
            <span
              v-for="(n, index) in 5"
              @mouseover="Brighten('#first', n)"
              @click="starPopup(n)"
              :key="index"
              ><i class="bright"></i><i class="dark"></i
            ></span>
          </span>
          <span class="evaluation-word"></span>
        </div>
      </div>

      <div id="second" style="display:none">
        我想看这部电影
        <span class="now-time"></span>
        <a class="del" @click="del">删除</a><br />
        <span class="show-tips"></span>
      </div>

      <div id="third" style="display:none">
        我看过这部电影
        <span class="now-time"></span>
        <a class="del" @click="del">删除</a>
        <div class="show-evaluation" style="display:none">
          我的评价:&nbsp;
          <span class="star" @mouseout="Darken('.show-evaluation')">
            <span
              v-for="(n, index) in 5"
              @mouseover="Brighten('.show-evaluation', n)"
              @click="star_level = n"
              :key="index"
              ><i class="bright"></i><i class="dark"></i
            ></span>
          </span>
          <span class="evaluation-word"></span>
        </div>
      </div>
    </div>
    <Dialog :isDialog="isDialog"></Dialog>
    <!-- <div id="show-layer" style="display:none">
      <div class="layer-bg"></div>
      <div class="layer-body">
        <div class="layer-top">
          <span class="title">添加收藏:我想看这部电影</span>
          <span class="x" @click="closeLayer">x</span>
        </div>
        <div class="layer-middle">
          <div id="wantto">
            <span>标签(多个标签用空格分隔):</span>
            <input type="text" name="movietip" />
            <div class="tip">
              <span>常用标签:</span>
              <ul>
                <li v-for="(v, i) in tiplist" @click="getTips(i)" :key="i">
                  {{ v }}
                </li>
              </ul>
            </div>
          </div>
          <div id="seen">
            <span>给个评价吧？(可选):&nbsp;</span>
            <span class="star" @mouseout="Darken('#seen')">
              <span
                v-for="(n, index) in 5"
                @mouseover="Brighten('#seen', n)"
                @click="star_level = n"
                :key="index"
                ><i class="bright"></i><i class="dark"></i
              ></span>
            </span>
            <span class="evaluation-word"></span>
          </div>
        </div>
        <div class="layer-bottom">
          <input type="button" value="保存" @click="save" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
export default {
  data () {
    return {
      flag: 1,
      star_level: 0,
      tiplist: ['pixar', '梦想', '爱情', '动画', '冒险', '美国', '3D', '温情'],
      tips: '',
      isDialog: false
    }
  },
  methods: {
    // 想看
    wantPopup () {
      this.isDialog = true
    },
    // 看过
    seenPopup () {

    },
    Darken () {

    },
    Brighten () {

    },
    starPopup () {

    },
    getTips () {

    },
    // 删除
    del () {

    },
    closeLayer () {

    },
    save () {

    }
  },
  components: {
    Dialog
  }

}
</script>

<style lang="less" scoped>

.evaluation {
  #first{
    display: flex;
    a{
      margin-right:12px;
      display:block;
      width:60px;
      height:26px;
      line-height:26px;
      text-align:center;
      background:#E0CDFA;
      border:1px solid #AAAAAA;
      border-radius:3px;
      cursor:pointer;
    }
    //星星
    .star{
      position:absolute;
      top:42px;
      font-size:0px;
    span{
      position:relative;
      display: inline-block;
      width:20px;
      height:20px;
      overflow: hidden;
      cursor: pointer;
      }
    }

  }
}

</style>
