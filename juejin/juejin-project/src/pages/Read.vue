<template>
  <div>
    <div class="read">
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
          name: "Java"
        },
        {
          name: "Linux"
        },
        {
          name: "Javascript"
        },
        {
          name: "Kudernetes"
        },
        {
          name: "线下活动"
        },
        {
          name: "Flutter"
        },
        {
          name: "Python"
        },
        {
          name: "PHP"
        },
        {
          name: "Vue.js"
        },
        {
          name: "Go"
        },
        {
          name: "程序员"
        },
        {
          name: "大数据"
        },
        {
          name: "开源"
        },
        {
          name: "爬虫"
        },
        {
          name: "TiDB"
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
#app .read {
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