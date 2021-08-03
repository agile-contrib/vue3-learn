<template>
  {{ msg }}
  <button @click="doit">点击我</button>
</template>
<script>
// import { h } from "vue";

export default {
  setup() {
    let tips = "【温馨提示】";

    // 第一种：返回对象
    return {
      // data
      msg: "这是一段文字",

      //   methods
      doit() {
        alert(tips + this.msg);
      },
    };

    // 第二种：返回渲染函数
    // return () => {
    //   return h("h1", "我是返回的渲染函数哦~");
    // };
  },
};
</script>
