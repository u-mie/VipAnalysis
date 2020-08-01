<template>
  <el-container>
    <el-header height="70px">
      <TopNav></TopNav>
    </el-header>
    <el-main>
      <Container></Container>
    </el-main>
    <el-footer height="100%">
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import TopNav from './TopNav'
import Container from './Container'
import Footer from './Footer'

export default {
  name: 'VideoAnalysis',
  components: {
    TopNav,
    Container,
    Footer
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.el-main {
  background: url("../assets/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.el-footer {
  background: #2c2e2f;
}
</style>
