<template>
  <div>
    <div class="android">
      <div class="cons">
        <van-tag
          round
          v-for="(item,index) in arr"
          :key="index"
          @click="select(item.name)"
          :class="{active: active == item.name}"
        >{{item.name}}</van-tag>
      </div>
    </div>
    <List />
  </div>
</template>
<script>
import Vue from "vue";
import List from "../components/List";
import { Tag } from "vant";
Vue.use(Tag);
export default {
  data() {
    return {
      arr: [
        {
          name: "全部"
        },
        {
          name: "Flutter"
        },
        {
          name: "Kotlin"
        },
        {
          name: "Java"
        },
        {
          name: "源码"
        },
        {
          name: "面试"
        },
        {
          name: "gradle"
        },
        {
          name: "设计模式"
        },
        {
          name: "RxJavs"
        },
        {
          name: "Android Jetpack"
        },
        {
          name: "性能优化"
        },
        {
          name: "架构"
        },
        {
          name: "Git"
        },
        {
          name: "Android Studio"
        },
        {
          name: "OpenGL"
        },
        {
          name: "OkHttp"
        }
      ],
      active: "全部"
    };
  },
  methods: {
    //点击拿到值
    select(name) {
      this.$store.dispatch("setAuthor", {
        value: name
      });
      this.active = name;
    }
  },
  components: {
    List
  }
};
</script>
<style scoped>
#app .android {
  background: #f4f5f5;
  padding-bottom: 10px;
  position: relative;
  top: 105px;
}
.cons {
  padding-left: 30px;
}
.van-tag {
  background: #fff;
  color: #909090;
  margin: 10px 11px 0 0;
  font-size: 14px;
}
.active {
  background: #006cff;
  color: #fff;
}
</style>
