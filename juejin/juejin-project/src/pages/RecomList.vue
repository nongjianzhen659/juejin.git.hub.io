<template>
  <div class="RecomList">
    <van-list
      :offset="50"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="content-box" v-for="(item,index) in restaurants" :key="index">
        <div class="boxtitle">
          <ul class="titletop">
            <li v-text="item.recom"></li>
            <li v-text="item.special"></li>
            <li v-text="item.author"></li>
            <li v-text="item.times"></li>
            <li v-text="item.art"></li>
          </ul>
          <div class="title-row" v-text="item.title" @click="cliDetail(item._id)"></div>
          <ul class="action-list">
            <li>
              <img src="../assets/zan.e9d7698.svg" alt />
              <span v-text="item.praise"></span>
            </li>
            <li>
              <img src="../assets/comment.4d5744f.svg" alt />
              <span v-text="item.discuss"></span>
            </li>
          </ul>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import { List, Cell } from "vant";
Vue.use(List).use(Cell);
export default {
  data() {
    return {
      list: [],
      loading: false, //加载状态
      finished: false, //没有更多了
      restaurants: []
    };
  },
  methods: {
    onLoad() {
      axios.get("http://localhost:3000/RecomList").then(({ data }) => {
        this.restaurants = this.restaurants.concat(data);
        //   // 加载状态结束;
        this.loading = false;
        // 数据全部加载完成
        if (this.restaurants.length >= 30) {
          this.finished = true;
        }
      });
      window.console.log("到底部了");
    },
    //跳转详情页
    cliDetail(index) {
      this.$router.push({
        name: "detail",
        params: { id: index }
      });
    }
  }
};
</script>
<style scoped>
#app .RecomList {
  padding-bottom: 10px;
  position: relative;
  top: 105px;
}
.content-box {
  width: 320px;
  height: 107px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
}
.boxtitle {
  width: 272px;
  height: 71px;
}
.titletop {
  width: 272px;
  height: 16px;
}
.titletop li {
  list-style: none;
  float: left;
  font-size: 3px;
  color: #909090;
  margin-right: 3px;
  position: relative;
  margin-right: 9px;
}
.titletop li:nth-child(1) {
  color: #f70;
  font-weight: 500;
}
.titletop li:nth-child(2) {
  color: #b71ed7;
}
.titletop li:last-child::after {
  content: "";
}
.title-row {
  margin: 5px 0 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
}
.action-list {
  width: 100px;
  height: 20px;
  border: 1px solid rgba(178, 186, 194, 0.4);
  display: flex;
  color: #909090;
  font-weight: 600;
  margin-top: 10px;
}
.action-list img {
  margin-right: 3px;
}
.action-list li {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.action-list li:nth-child(1) {
  border-right: 1px solid rgba(178, 186, 194, 0.4);
}
</style>