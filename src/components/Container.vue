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
        <Support></Support>
      </el-card>
    </el-col>
  </el-row>
</template>


<script>
import Support from './Support'
import { mapState } from 'vuex'
export default {
  name: 'Container',
  data: function () {
    return {
      value: '',
      input: '',
      url: ''
    }
  },
  components: {
    Support: Support
  },
  computed: mapState({
    options: state => state.options
  })
  ,
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
</style>