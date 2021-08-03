<template>
  {{ info }}
  <button @click="doit">改变值</button>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    let info = reactive({
      name: "李四",
      age: 17,
    });

    function doit() {
      info.name = "张三";
    }

    return {
      info,
      doit,
    };
  },
};
</script>
