<template>
  <div class="Tabbarhea">
    <van-tabbar v-model="active">
      <div class="tabbarcon">
        <van-tabbar-item name="recommend" to="/main/recommend">推荐</van-tabbar-item>
        <van-tabbar-item name="afterend" to="/main/afterend">后端</van-tabbar-item>
        <van-tabbar-item name="Leadingend" to="/main/Leadingend">前端</van-tabbar-item>
        <van-tabbar-item name="android" to="/main/android">Android</van-tabbar-item>
        <van-tabbar-item name="ios" to="/main/ios">ios</van-tabbar-item>
        <van-tabbar-item name="artificial" to="/main/artificial">人工智能</van-tabbar-item>
        <van-tabbar-item name="devtool" to="/main/devtool">开发工具</van-tabbar-item>
        <van-tabbar-item name="codelife" to="/main/codelife">代码人生</van-tabbar-item>
        <van-tabbar-item name="Read" to="/main/Read">阅读</van-tabbar-item>
      </div>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: "recommend"
    };
  }
};
</script>
<style scoped>
.tabbarcon {
  height: 100%;
  display: flex;
}
#app .van-tabbar--fixed {
  position: fixed;
  top: 61px;
  width: 320px;
  height: 45px;
  overflow: auto;
  font-size: 15px;
}
#app .van-tabbar-item {
  padding-right: 10px;
  width: 60px;
  height: 100%;
  font-size: 15px;
}
</style>