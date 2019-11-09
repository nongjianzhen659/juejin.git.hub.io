<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./pages/Main";

export default {
  name: "app",
  components: {
    Header,
    Main
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
