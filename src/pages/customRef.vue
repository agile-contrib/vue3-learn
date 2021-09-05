<template>
  <input type="text" v-model="key1" />
  <span>{{ key1 }}</span>
  <hr />
  <input type="text" v-model="key2" />
  <span>{{ key2 }}</span>
</template>
<script>
import { ref, customRef } from "vue";
export default {
  setup() {
    function myRef(value) {
      return customRef((track, trigger) => {
        return {
          get() {
            track(); // 标记追踪数据的改变
            return value;
          },
          set(newValue) {
            value = newValue;
            trigger(); // 告诉对象，数据改变了
          },
        };
      });
    }

    return {
      key1: ref("原生的ref"),
      key2: myRef("我们的ref"),
    };
  },
};
</script>
