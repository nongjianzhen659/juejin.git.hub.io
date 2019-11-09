<template>
  <div>
    <div class="juejinHea">
      <div class="heaLeft">
        <div class="jjlogo"></div>
        <div class="show-menu">
          <p @click="Dismenu" v-text="didata"></p>
          <div class="down-b"></div>
          <ul class="phone-hide" v-show="sidebool">
            <li @click="Home('首页')" :class="{active:actives=='首页'}">首页</li>
            <li @click="Hot('沸点')" :class="{active:actives=='沸点'}">沸点</li>
            <li @click="topic('话题')" :class="{active:actives=='话题'}">话题</li>
            <li>小册</li>
            <li>活动</li>
          </ul>
        </div>
      </div>
      <div class="heaRight" v-show="isclose">
        <p class="logonbtn" @click="clLogin">登录</p>
        <p class="registerbtn" @click="clReg">注册</p>
      </div>
      <div class="logRight" v-show="islog">
        <div class="message">
          <img src="../static/xiaoxi.png" alt />
        </div>
        <div class="portrait" @click="Setting">
          <img src="../static/16e4ae37433c2466d80.jpg" alt />
        </div>
        <div class="setting" v-show="isSetting">
          <div class="nav-menu-item-group">
            <li>写文章</li>
            <li>草稿</li>
          </div>
          <div class="nav-menu-item-group">
            <li>我的主页</li>
            <li>我赞过的</li>
            <li>我的收藏集</li>
            <li>已购</li>
            <li>标签管理</li>
          </div>
          <div class="nav-menu-item-group">
            <li>设置</li>
            <li>关于</li>
          </div>
          <div class="nav-menu-item-group">
            <li @click="dengchu">登出</li>
          </div>
        </div>
      </div>
    </div>
    <!-- 登录弹窗 -->
    <div class="login" v-show="logbool">
      <div class="loginlogo">
        <img src="../assets/log1.png" v-show="imgUrlone" class="imgone imglog" alt />
        <img src="../assets/log2.png" v-show="imgUrltow" class="imgtow imglog" alt />
        <img src="../assets/log3.png" v-show="imgUrlthere" class="imgthere imglog" alt />
      </div>
      <div class="loginp">
        <div class="logtop" style="display:inline-block;width:100%">
          <div style="display:inline-block;width:100%;margin-bottom:.2rem" @click="ImgUrlone">
            <span class="lo">登录</span>
            <span @click="clLogin">x</span>
          </div>
          <div class="input-group">
            <div class="input-box" :class="{'inbox':isok}">
              <input v-model="phone" type="text" placeholder="请输入手机号或邮箱" @click="ImgUrltow" />
            </div>
            <div class="input-box" :class="{'inpbox':istrue}">
              <input v-model="password" type="password" placeholder="请输入密码" @click="ImgUrlthere" />
            </div>
          </div>
          <button @click="loginbtn">登录</button>
          <div class="prompt-box">
            没有账号?
            <span @click="Goregister">注册</span>
            <span>忘记密码?</span>
          </div>
          <div class="oauth-box">
            <div class="hint">第三方账号登录：</div>
            <div class="oauth">
              <div class="oauth-bg">
                <img src="../assets/weibo.fa758eb.svg" class="sanfang" alt />
              </div>
              <div class="oauth-bg">
                <img src="../assets/wechat.e0ff124.svg" class="sanfang" alt />
              </div>
              <div class="oauth-bg">
                <img src="../assets/github.547dd8a.svg" class="sanfang" alt />
              </div>
            </div>
          </div>
          <div class="agreement-box">
            注册登录既表示同意
            <span>用户协议、隐私政策</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 注册弹窗 -->
    <div class="reginster" v-show="regbool">
      <div class="loginp">
        <div class="logtop" style="display:inline-block;width:100%">
          <div style="display:inline-block;width:100%;margin-bottom:.2rem" @click="ImgUrlone">
            <span class="lo">注册</span>
            <span @click="clReg">x</span>
          </div>
          <div class="input-group">
            <div class="input-box" :class="{'User':isUser}">
              <input
                v-model="username"
                type="text"
                class="aa"
                placeholder="请输入用户名"
                @click="Usercli"
              />
            </div>
            <div class="input-box" :class="{'Phone':isPhonetrue}">
              <input v-model="phone" type="text" placeholder="请输入手机号" @click="Phone" />
            </div>
            <div class="input-box" :class="{'Passw':isPasswtrue}">
              <input v-model="password" type="text" placeholder="请输入密码（不少于6位）" @click="Passw" />
            </div>
          </div>
          <button @click="registerbtn">注册</button>
          <div class="prompt-box" style="text-align: center">
            <span @click="Gologin">已有账号登录</span>
          </div>
          <div class="oauth-box">
            <div class="hint">第三方账号登录：</div>
            <div class="oauth">
              <div class="oauth-bg">
                <img src="../assets/weibo.fa758eb.svg" class="sanfang" alt />
              </div>
              <div class="oauth-bg">
                <img src="../assets/wechat.e0ff124.svg" class="sanfang" alt />
              </div>
              <div class="oauth-bg">
                <img src="../assets/github.547dd8a.svg" class="sanfang" alt />
              </div>
            </div>
          </div>
          <div class="agreement-box">
            注册登录既表示同意
            <span>用户协议、隐私政策</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "",
      password: "",
      username: "",
      cookiearr: [],
      arr: ["首页", "沸点", "话题", "小册", "活动"],
      sidebool: false,
      logbool: false,
      regbool: false,
      imgUrlone: false,
      imgUrltow: true,
      imgUrlthere: false,
      isok: true,
      istrue: false,
      isPhonetrue: false,
      isPasswtrue: false,
      isUser: true,
      didata: "首页",
      actives: "首页",
      isSetting: false,
      islog: false,
      isclose: true
    };
  },
  methods: {
    Dismenu() {
      this.sidebool = !this.sidebool;
    },
    //登录弹窗
    clLogin() {
      this.logbool = !this.logbool;
      this.isok = true;
      this.imgUrlone = false;
      this.imgUrltow = true;
      this.phone = "";
      this.password = "";
    },
    ImgUrlone() {
      this.imgUrlone = true;
      this.imgUrltow = false;
      this.imgUrlthere = false;
      this.isok = false;
      this.istrue = false;
    },
    ImgUrltow() {
      this.imgUrltow = true;
      this.imgUrlone = false;
      this.imgUrlthere = false;
      this.isok = true;
      this.istrue = false;
    },
    ImgUrlthere() {
      this.imgUrlthere = true;
      this.imgUrltow = false;
      this.imgUrlone = false;
      this.isok = false;
      this.istrue = true;
    },
    // 注册弹窗
    clReg() {
      this.regbool = !this.regbool;
    },
    Usercli() {
      this.isUser = true;
      this.isPhonetrue = false;
      this.isPasswtrue = false;
    },
    Phone() {
      this.isPhonetrue = true;
      this.isok = false;
      this.isPasswtrue = false;
      this.isUser = false;
    },
    Passw() {
      this.isPasswtrue = true;
      this.isPhonetrue = false;
      this.isok = false;
      this.isUser = false;
    },
    Goregister() {
      (this.logbool = false), (this.regbool = true);
    },
    Gologin() {
      (this.logbool = true), (this.regbool = false);
    },
    // 登录按钮
    loginbtn() {
      //登录存入cookie
      if (this.phone && this.password) {
        var cookies = document.cookie;
      }
      if (cookies) {
        window.console.log("登录成功");
        this.islog = true;
        this.isclose = false;
        this.logbool = false;
      } else {
        if (!this.phone) {
          window.console.log("请输入手机号码");
        } else if (!this.password) {
          window.console.log("请输入密码");
        } else {
          window.console.log("登陆失败");
        }
      }
    },
    // 注册按钮
    registerbtn() {
      // 注册状态，数据存在即可注册
      document.cookie = "username=" + this.username;
      document.cookie = "name=" + this.phone;
      document.cookie = "password=" + this.password;
      this.logbool = true;
      this.regbool = false;
    },
    Home(value) {
      //触发setAuthor
      this.$store.dispatch("setAuthor", {
        value: ""
      });
      //跳转路径
      this.$router.push({
        name: "recommend"
      });
      this.sidebool = !this.sidebool;
      this.didata = value;
      this.actives = value;
    },
    Hot(value) {
      this.$router.push({
        name: "hot"
      });
      this.sidebool = !this.sidebool;
      this.didata = value;
      this.actives = value;
    },
    topic(value) {
      this.$router.push({
        name: "topic"
      });
      this.sidebool = !this.sidebool;
      this.didata = value;
      this.actives = value;
    },
    Setting() {
      this.isSetting = !this.isSetting;
    },
    dengchu() {
      this.islog = false;
      this.isclose = true;
      this.imgUrlthere = false;
      this.istrue = false;
      this.phone = "";
      this.username = "";
      this.password = "";
      this.isSetting = false;
      this.isPasswtrue = false;
      this.isUser = true;
    }
  }
};
</script>
<style scoped>
.active {
  color: #006cff;
}
.juejinHea {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #f1f1f1;
  position: fixed;
  top: 0;
  z-index: 10;
  background: #fff;
}
.heaLeft {
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.jjlogo {
  width: 70px;
  height: 100%;
  background: url("../assets/jj.png") no-repeat center;
}
.show-menu {
  height: 100%;
  line-height: 60px;
  color: #006cff;
}
.down-b {
  width: 0;
  height: 0;
  border: 5px solid;
  border-color: #006cff transparent transparent;
  position: absolute;
  right: -16px;
  top: 30px;
}
.phone-hide {
  color: #909090;
  background: #fff;
  list-style: none;
  width: 68px;
  text-align: center;
  border: #dcdddf solid 1px;
  position: absolute;
  left: 67px;
  border-radius: 4px;
}
.phone-hide li {
  height: 48px;
}
.heaRight {
  width: 100px;
  float: right;
  display: flex;
  line-height: 60px;
}
.logRight {
  width: 100px;
  height: 60px;
  float: right;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
.message,
.portrait {
  width: 34px;
  height: 34px;
}
.portrait img {
  width: 30px;
  height: 30px;
  border-radius: 50px;
}
.setting {
  width: 147px;
  height: 400px;
  position: absolute;
  top: 60px;
  right: 7px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid rgba(177, 180, 185, 0.45);
  color: #71777c;
}
.nav-menu-item-group {
  padding: 10px 0;
  border-bottom: 1px solid rgba(177, 180, 185, 0.2);
}
.nav-menu-item-group:nth-last-child(1) {
  border-bottom: none;
}
.setting li {
  list-style: none;
  height: 32px;
  line-height: 32px;
  font-size: 17px;
  padding-left: 20px;
}
p {
  margin-left: 10px;
  font-size: 16px;
  color: #006cff;
}
.registerbtn {
  position: relative;
}
.registerbtn::after {
  content: "";
  width: 2px;
  height: 2px;
  background: #006cff;
  position: absolute;
  right: 35px;
  top: 30px;
}
.login,
.reginster {
  width: 100%;
  height: 100%;
  background: rgba(105, 105, 105, 0.4);
  position: fixed;
  z-index: 10;
  top: 0;
}
.loginp {
  height: 400px;
  background: #fff;
  padding: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  border-radius: 2px;
  box-sizing: border-box;
}
#app .inbox {
  border: 1px solid #006cff;
}
#app .inpbox {
  border: 1px solid #006cff;
}
.lo {
  float: left;
  font-weight: 600;
}
span:nth-child(2) {
  float: right;
  color: #adadad;
}
.imglog {
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
}
.imgone {
  width: 120px;
  height: 98px;
  top: 2px;
}
.imgtow {
  width: 122px;
  height: 115px;
  top: -3px;
}
.imgthere {
  width: 105px;
  height: 95px;
  top: 10px;
}
.input-box {
  width: 280px;
  height: 40px;
  border: 1px solid #ccc;
  margin-bottom: 0.8rem;
  text-align: center;
}
input {
  width: 255px;
  padding: 12px;
  border: none;
  font-size: 12px;
}
button {
  width: 280px;
  height: 40px;
  border: none;
  background: #007fff;
  font-size: 16px;
  color: #fff;
}
.prompt-box {
  margin-top: 10px;
  color: #767676;
  font-size: 14px;
}
.prompt-box span {
  color: #006cff;
}
.prompt-box span:nth-child(1) {
  padding-left: 10px;
}
.oauth-box {
  color: #767676;
  margin-top: 10px;
  font-size: 14px;
}
.oauth {
  width: 280px;
  height: 45px;
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
}
.oauth-bg {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f4f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sanfang {
  width: 23px;
  height: 23px;
}
.agreement-box {
  font-size: 14px;
  margin-top: 20px;
  color: #767676;
}
.agreement-box span {
  color: #006cff;
}
.Phone {
  border: 1px solid #006cff;
}
.Passw {
  border: 1px solid #006cff;
}
.User {
  border: 1px solid #006cff;
}
</style>