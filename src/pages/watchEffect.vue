<template>
  {{ name }}/{{ age }}
  <br />
  <input type="text" v-model="name" />
  <input type="text" v-model="age" />
</template>
<script>
import { watchEffect, ref } from "vue";
export default {
  setup() {
    let name = ref("张三");
    let age = ref(17);

    watchEffect(() => {
      // 只有name被使用了，所以age改变的时候不会触发
      let newName = name.value + "";

      console.log("watchEffer被调用了");
    });

    return {
      name,
      age,
    };
  },
};
</script>
