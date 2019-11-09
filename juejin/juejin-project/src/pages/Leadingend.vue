<template>
  <div>
    <div class="leadingend">
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
import { Tag } from "vant";
import List from "../components/List";
Vue.use(Tag);
export default {
  data() {
    return {
      arr: [
        {
          name: "全部"
        },
        {
          name: "JavaScript"
        },
        {
          name: "Vue.js"
        },
        {
          name: "React.js"
        },
        {
          name: "CSS"
        },
        {
          name: "Flutter"
        },
        {
          name: "Node.js"
        },
        {
          name: "Webpack"
        },
        {
          name: "ECMAScript 6"
        },
        {
          name: "微信小程序"
        },
        {
          name: "面试"
        },
        {
          name: "TypeScript"
        },
        {
          name: "HTTP"
        },
        {
          name: "HTML"
        },
        {
          name: "性能优化"
        },
        {
          name: "前端框架"
        }
      ],
      active: "全部"
    };
  },
  methods: {
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
#app .leadingend {
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
  margin: 10px 10px 0 0;
  font-size: 14px;
}
.active {
  background: #006cff;
  color: #fff;
}
</style>
