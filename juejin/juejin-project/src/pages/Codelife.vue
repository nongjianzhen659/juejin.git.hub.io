<template>
  <div>
    <div class="codelife">
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
          name: "程序员"
        },
        {
          name: "Python"
        },
        {
          name: "Java"
        },
        {
          name: "设计模式"
        },
        {
          name: "代码规范"
        },
        {
          name: "面试"
        },
        {
          name: "Go"
        },
        {
          name: "数据结构"
        },
        {
          name: "笔记"
        },
        {
          name: "开源"
        },
        {
          name: "编程语言"
        },
        {
          name: "Linux"
        },
        {
          name: "JavaScript"
        },
        {
          name: "LeetCode"
        },
        {
          name: "Flutter"
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
#app .codelife {
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
  margin: 10px 8px 0 0;
  font-size: 14px;
}
.active {
  background: #006cff;
  color: #fff;
}
</style>