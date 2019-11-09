<template>
  <div>
    <div class="artificial">
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
          name: "机器学习"
        },
        {
          name: "Python"
        },
        {
          name: "NLP"
        },
        {
          name: "深度学习"
        },
        {
          name: "物联网"
        },
        {
          name: "算法"
        },
        {
          name: "图像识别"
        },
        {
          name: "计算机视觉"
        },
        {
          name: "数据分析"
        },
        {
          name: "PyTorch"
        },
        {
          name: "线下活动"
        },
        {
          name: "神经网路"
        },
        {
          name: "大数据"
        },
        {
          name: "程序员"
        },
        {
          name: "Kafka"
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
#app .artificial {
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