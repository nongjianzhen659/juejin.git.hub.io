<template>
  <div>
    <Tabbar />
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>
<script>
import Tabbar from "../components/Tabbar";
export default {
  components: {
    Tabbar
  }
};
</script>