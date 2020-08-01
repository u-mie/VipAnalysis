<template>
  <el-row type="flex" justify="center">
    <el-col :span="20" :xs="24">
      <el-card class="box-card">
        <iframe :src="url" frameborder="0" allowfullscreen="true"></iframe>
        <el-select v-model="value" filterable placeholder="请选择解析接口">
          <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
        <el-input v-model="input" placeholder="请输入需要解析的网站地址"></el-input>
        <el-button type="primary" @click="getAnalysisUrl">开始解析</el-button>
        <el-alert description="本站不存储任何链接，播放内容与本站无关，接口源于互联网，仅供学习交流。" type="success" center :closable='false'>
        </el-alert>
        <el-divider content-position="left">解析支持以下网站</el-divider>
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
      </el-card>
    </el-col>
  </el-row>
</template>


<script>
import { WOW } from 'wowjs'
export default {
  name: 'Container',
  data: function () {
    return {
      options: [{
        value: 'https://jx.598110.com/?url=',
        label: 'VIP接口1'
      }, {
        value: 'https://jx.drgxj.com/?url=',
        label: 'VIP接口2'
      }, {
        value: 'https://jiexi.071811.cc/jx.php?url=',
        label: 'VIP接口3'
      }, {
        value: 'https://cdn.yangju.vip/k/?url=',
        label: 'VIP接口4'
      }],
      value: '',
      input: '',
      url: ''
    }
  },
  mounted () {
    new WOW({ mobile: true, live: false, scrollContainer: '.scrollable', animateClass: 'animate__animated' }).init();
  },
  methods: {
    getAnalysisUrl: function () {
      this.url = this.value + this.input;
    }
  }
}
</script>

<style scoped>
.box-card {
  width: 100%;
}
iframe {
  width: 100%;
  height: 600px;
  background: url("../assets/bg.jpg");
  background-position: center;
}
@media screen and (max-width: 768px) {
  iframe {
    width: 100%;
    height: 300px;
    background: cornflowerblue;
  }
}
.el-select {
  width: 100%;
  margin-bottom: 10px;
}
.el-input {
  width: 100%;
}
.el-button {
  width: 100%;
  margin-top: 10px;
}
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