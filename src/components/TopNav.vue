<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6" :xs="{span:24}">
        <div class="logo">
          <img src="../assets/logo.png" alt="">
        </div>
      </el-col>
      <el-col :span="10" :xs="0">
        <div>
          <el-alert description="目前解析接口已经更新到最新" type="success" center show-icon :closable='false'>
          </el-alert>
        </div>
      </el-col>
      <!--可放置导航连接-->
      <el-col :span="4" :xs="0">

      </el-col>
    </el-row>
  </div>
</template>




<script>
export default {
  name: 'TopNav'
}
</script>

<style scope>
.logo {
  min-width: 200px;
  text-align: center;
}
.el-alert--success.is-light {
  margin-top: 10px;
}
.logo {
  padding-top: 10px;
}
</style>