<template>
  <div class="link-site">
    <a class="link-box wow animate__bounceInLeft" data-wow-duration='2s' href="https://www.acfun.cn/" target="_blank"><img src="../assets/acfun.png" alt="acfun"></a>
    <a class="link-box wow animate__slideInUp" data-wow-duration='2s' href="http://www.fun.tv/" target="_blank"><img src="../assets/fengxing.png" alt="风行网"></a>
    <a class="link-box wow animate__bounceInLeft" data-wow-duration='2s' href="https://www.mgtv.com/" target="_blank"><img src="../assets/hunantvlogo.png" alt="芒果tv"></a>
    <a class="link-box wow animate__bounceInLeft" data-wow-duration='2s' href="https://www.iqiyi.com/" target="_blank"><img src="../assets/iqiyilogo.png" alt="爱奇艺"></a>
    <a class="link-box wow animate__shake" data-wow-duration='2s' href="https://www.pptv.com/" target="_blank"><img src="../assets/pptv.png" alt="PPTV"></a>
    <a class="link-box wow animate__swing" data-wow-duration='2s' href="https://tv.sohu.com/" target="_blank"><img src="../assets/sohulogo.png" alt="搜狐视频"></a>
    <a class="link-box wow animate__pulse" data-wow-duration='2s' href="https://www.tudou.com/" target="_blank"><img src="../assets/tudoulogo.png" alt="土豆视频"></a>
    <a class="link-box wow animate__slideInLeft" data-wow-duration='2s' href="https://www.youku.com/" target="_blank"><img src="../assets/youkulogo.png" alt="优酷网"></a>
    <a class="link-box wow animate__bounceInRight" data-wow-duration='2s' href="https://www.bilibili.com/" target="_blank"><img src="../assets/bilibili.png" alt="哔哩哔哩"></a>
    <a class="link-box wow animate__bounceInUp" data-wow-duration='2s' href="https://v.qq.com/" target="_blank"><img src="../assets/qqlogo.png" alt="腾讯视频"></a>
  </div>
</template>

<script>
import { WOW } from 'wowjs'

export default {
  name: "Support",
  mounted () {
    new WOW({ mobile: true, live: false, scrollContainer: '.scrollable', animateClass: 'animate__animated' }).init();
  },
}
</script>

<style scoped>
.link-site {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.link-box {
  border: 1px solid transparent;
  margin-left: 50px;
  margin-top: 19px;
  flex-shrink: 1;
  width: 160px;
  height: 50px;
}
.link-box:hover {
  border: 1px solid #66b1ff;
}
</style>