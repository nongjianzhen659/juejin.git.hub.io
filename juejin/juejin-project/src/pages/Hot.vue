<template>
  <div :class="['Hot',{Hots:inlei}]">
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
                <div class="meta-box">
                  <div class="ellipsis">啊手动阀打发发答复</div>
                  <div class="time-box" v-text="item.times"></div>
                </div>
              </div>
              <button>关注</button>
            </div>
            <div class="conten">
              <div v-text="item.martter"></div>
              <div class="Img" @click="Gallery">
                <img src="../static/16e461f37438dcf8.jpg" alt />
              </div>
            </div>
          </div>
          <div data-v-667182a6 class="pin-action-row">
            <div data-v-1658033d data-v-667182a6 class="action-box action-box">
              <div data-v-1658033d class="like-action action">
                <div data-v-1658033d class="action-title-box">
                  <svg
                    data-v-1658033d
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    class="icon like-icon"
                  >
                    <g data-v-1658033d fill="none" fill-rule="evenodd">
                      <path data-v-1658033d d="M0 0h20v20H0z" />
                      <path
                        data-v-1658033d
                        stroke="#8A93A0"
                        stroke-linejoin="round"
                        d="M4.58 8.25V17h-1.4C2.53 17 2 16.382 2 15.624V9.735c0-.79.552-1.485 1.18-1.485h1.4zM11.322 2c1.011.019 1.614.833 1.823 1.235.382.735.392 1.946.13 2.724-.236.704-.785 1.629-.785 1.629h4.11c.434 0 .838.206 1.107.563.273.365.363.84.24 1.272l-1.86 6.513A1.425 1.425 0 0 1 14.724 17H6.645V7.898C8.502 7.51 9.643 4.59 9.852 3.249A1.47 1.47 0 0 1 11.322 2z"
                      />
                    </g>
                  </svg>
                  <span data-v-1658033d class="action-title">8</span>
                </div>
              </div>
              <div data-v-1658033d class="comment-action action">
                <div data-v-1658033d class="action-title-box">
                  <svg
                    data-v-1658033d
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    class="icon comment-icon"
                  >
                    <g data-v-1658033d fill="none" fill-rule="evenodd">
                      <path data-v-1658033d d="M0 0h20v20H0z" />
                      <path
                        data-v-1658033d
                        stroke="#8A93A0"
                        stroke-linejoin="round"
                        d="M10 17c-4.142 0-7.5-2.91-7.5-6.5S5.858 4 10 4c4.142 0 7.5 2.91 7.5 6.5 0 1.416-.522 2.726-1.41 3.794-.129.156.41 3.206.41 3.206l-3.265-1.134c-.998.369-2.077.634-3.235.634z"
                      />
                    </g>
                  </svg>
                  <span data-v-1658033d class="action-title">评论</span>
                </div>
              </div>
            </div>
          </div>
          <div class="gallery" v-if="isgallery">
            <div class="close" @click="Closegallery">关闭</div>
            <div class="gallery">
              <img src="../static/16e461f37438dcf8.jpg" alt />
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
      restaurants: [],
      inlei: false,
      isgallery: false
    };
  },
  created() {
    //在创建后获取传入的参数
    var param = this.$route.params;
    this.params = param.id;
    this.$store.dispatch("setAuthor", {
      value: this.params
    });
    axios.get("http://localhost:3000/RecomList").then(({ data }) => {
      this.restaurants = this.restaurants.concat(data);
    });
  },
  methods: {
    Gallery() {
      this.inlei = true;
      this.isgallery = true;
    },
    Closegallery() {
      this.inlei = false;
      this.isgallery = false;
    }
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
.Hot {
  height: 505px;
  top: 61px;
  position: relative;
  z-index: 2;
  background: #f4f5f5;
  word-break: break-all;
}
.Hots {
  z-index: 10;
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
  height: 900px;
  position: absolute;
  top: 20px;
  background: #f4f5f5;
}
.shadowCon {
  width: 100%;
  background: #f4f5f5;
  position: relative;
}
li {
  margin: auto;
  display: inline-block;
  margin-top: 10px;
  background: #fff;
}
.con {
  width: 100%;
  width: 272px;
  padding: 23px;
}
.author-info-block {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.avater {
  width: 40px;
  height: 40px;
}
.avater img {
  width: 100%;
  height: 100%;
}
.avatername {
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
  font-size: 15px;
  margin-bottom: 4px;
}
.meta-box {
  width: 162px;
  height: 16px;
  color: #8a9aa9;
}
.ellipsis {
  width: 99px;
  height: 100%;
  float: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.time-box {
  width: 60px;
  height: 100%;
  float: right;
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
  left: 35px;
}
.conten {
  font-size: 15px;
}
.Img {
  width: 50%;
}
.Img img {
  width: 100%;
}
.gallery {
  width: 100%;
  height: 568px;
  background: #000;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
}
.gallery img {
  width: 100%;
}
.close {
  display: inline-block;
  padding: 4px 10px;
  font-size: 15px;
  position: absolute;
  right: 15px;
  top: 17px;
  z-index: 10;
  color: #fff;
  border-radius: 3px;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  background: rgba(0, 0, 0, 0.3);
}
#app .action-box {
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}
.action {
  flex: 1;
  display: flex;
  justify-content: center;
}
.like-action {
  border-right: 1px solid #ebebeb;
}
.action-title-box {
  display: flex;
  justify-content: center;
}
.action-title {
  font-size: 16px;
  color: #8a93a0;
  margin-left: 6px;
}
</style>