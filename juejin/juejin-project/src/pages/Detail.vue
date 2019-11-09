<template>
  <div class="Detail">
    <div class="shadow">
      <van-loading type="spinner" color="#1989fa" />
      <ul class="shadowCon">
        <li v-for="(item,index) in restaurantsComputer" :key="index">
          <div class="con">
            <div class="author-info-block">
              <div class="avater">
                <img class="avatername" src="../static/16d628c6339be450.jpg" alt />
              </div>
              <div class="writitle">
                <div class="wriname" v-text="item.author"></div>
                <div class="writime" style="float:left;margin-right:10px;">2019年11月7日</div>
                <div class="writer">阅读4324</div>
              </div>
              <button>关注</button>
            </div>
            <div class="conten">
              <img src="../static/16e3160b13cfaeac.jpg" alt />
              <div v-text="item.martter"></div>
            </div>
          </div>
          <div class="footer">
            <div class="praise-action action">
              <div class="action-title-box">
                <svg
                  data-v-db4cf912
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                >
                  <path
                    data-v-db4cf912
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#8A93A0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 8.692V21H3.372C2.616 21 2 20.131 2 19.064v-8.283c0-1.112.642-2.089 1.372-2.089H5zm6.705-6.027c.146-.99.962-1.683 1.856-1.665 1.278.025 2.039 1.11 2.303 1.647.482.98.495 2.595.165 3.632-.3.938-.993 2.171-.993 2.171h5.194c.549 0 1.058.275 1.399.752.345.487.458 1.12.302 1.695l-2.35 8.685c-.213.835-.922 1.418-1.72 1.418H7V8.864c2.346-.517 4.44-4.41 4.705-6.199z"
                  />
                </svg>
                <span class="action-title" v-text="item.praise"></span>
              </div>
            </div>
            <div class="comment-action action">
              <div class="action-title-box">
                <svg
                  data-v-db4cf912
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                >
                  <path
                    data-v-db4cf912
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#8A93A0"
                    stroke-linejoin="round"
                    d="M11.5 18.37c-5.247 0-9.5-3.664-9.5-8.185C2 5.665 6.253 2 11.5 2S21 5.665 21 10.185c0 1.783-.662 3.433-1.785 4.778-.164.196.518 4.037.518 4.037l-4.136-1.428c-1.263.465-2.63.798-4.097.798z"
                  />
                </svg>
                <span class="action-title" v-text="item.discuss"></span>
              </div>
            </div>
            <div class="collect-action action">
              <div class="action-title-box">
                <svg
                  data-v-db4cf912
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                >
                  <path
                    data-v-db4cf912
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#8A93A0"
                    d="M12.43 17.73c-.515-.286-1.347-.286-1.862 0L6.86 19.77c-1.029.565-1.702.05-1.507-1.148l.71-4.322c.098-.6-.159-1.43-.577-1.856l-2.998-3.06c-.833-.85-.572-1.682.576-1.856l4.143-.63c.575-.089 1.25-.602 1.507-1.148l1.853-3.933c.516-1.09 1.35-1.088 1.863 0l1.856 3.933c.256.546.93 1.06 1.507 1.148l4.144.63c1.15.174 1.406 1.009.575 1.856l-3 3.06c-.416.426-.674 1.256-.576 1.856l.709 4.322c.196 1.2-.481 1.713-1.507 1.148l-3.708-2.04z"
                  />
                </svg>
                <span class="action-title">收藏</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import { Loading } from "vant";
Vue.use(Loading);
export default {
  data() {
    return {
      params: "",
      restaurants: []
    };
  },
  created() {
    //在创建后获取传入的参数
    var param = this.$route.params;
    // var param = this.$route.query.id;
    // window.console.log(param);
    this.params = param.id;
    this.$store.dispatch("setAuthor", {
      value: this.params
    });
    axios.get("http://localhost:3000/RecomList").then(({ data }) => {
      // 拿到数据库的数赋给restaurants空数组中
      this.restaurants = this.restaurants.concat(data);
    });
  },
  computed: {
    detaiVlu() {
      return this.$store.getters.getAuthor;
    },
    restaurantsComputer() {
      if (this.detaiVlu.value) {
        //this.detaiVlu.value为点击后的到的值,如果值存在
        return this.restaurants.filter(item => {
          // window.console.log(item);
          //筛选、item.art为类型
          if (item._id.indexOf(this.detaiVlu.value) >= 0) {
            window.console.log(item);
            return item;
          }
        });
      } else {
        return this.restaurants;
      }
    }
  }
};
</script>
<style scoped>
.Detail {
  height: 505px;
  top: 61px;
  position: relative;
  z-index: 2;
  background: #f4f5f5;
  word-break: break-all;
}
#app .van-loading {
  margin: auto;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 0;
  right: 0;
  top: 200px;
}
.shadow {
  width: 100%;
  position: absolute;
  top: 20px;
  margin-bottom: 80px;
  background: #f4f5f5;
}
.shadowCon {
  width: 100%;
  background: #fff;
  position: relative;
}
li {
  width: 272px;
  margin: auto;
}
.con {
  width: 100%;
  display: inline-block;
}
.author-info-block {
  margin-top: 25px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.avater {
  width: 40px;
  height: 40px;
}
img {
  width: 100%;
  height: 100%;
}
#app .avatername {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.writitle {
  width: 150px;
  font-size: 13px;
  position: relative;
  left: 20px;
}
.wriname {
  font-size: 19px;
  font-weight: 600;
}
button {
  width: 51px;
  height: 26px;
  font-size: 13px;
  border: 1px solid #6cbd45;
  color: #6cbd45;
  background: #fff;
  border-radius: 2px;
  position: relative;
  left: 40px;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  background: #fff;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  justify-content: space-around;
  line-height: 49px;
}
.action-title-box {
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #8a93a0;
}
</style>