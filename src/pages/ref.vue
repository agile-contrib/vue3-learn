<template>
  {{ tips }} {{ info }}
  <hr />
  <button @click="doit1">改变info</button>
  <button @click="doit2">改变tips</button>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let tips = ref("-");

    function doit2() {
      // 位置一
      // getter setter [value]
      tips.value = "[当前毫秒值]";

      // 如果是对象，使用的是proxy
    }

    return {
      info: ref("-"),
      tips,
      doit1() {
        //   注意和位置一的区别，两者都有效
        this.info = new Date().valueOf();
      },
      doit2,
    };
  },
};
</script>
