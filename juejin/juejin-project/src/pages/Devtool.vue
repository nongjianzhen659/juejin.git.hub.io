<template>
  <div>
    <div class="devtool">
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
          name: "Git"
        },
        {
          name: "Visual Studio Code"
        },
        {
          name: "Linux"
        },
        {
          name: "Jenkins"
        },
        {
          name: "GitHub"
        },
        {
          name: "Python"
        },
        {
          name: "Java"
        },
        {
          name: "iTerm"
        },
        {
          name: "运维"
        },
        {
          name: "IntelliJ IDEA"
        },
        {
          name: "程序员"
        },
        {
          name: "敏捷开发"
        },
        {
          name: "Serveless"
        },
        {
          name: "Markdown"
        },
        {
          name: "命令行"
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
#app .devtool {
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
  margin: 10px 13px 0 0;
  font-size: 14px;
}
.active {
  background: #006cff;
  color: #fff;
}
</style>