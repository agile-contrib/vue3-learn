<template>
  <div>
    key1:{{ infoObj.key1 }}
    <input type="text" v-model="infoObj.key1" />
    <br />
    key2:{{ infoObj.key2 }}
    <input type="text" v-model="infoObj.key2" />
  </div>
  {{ newKey }} | {{ infoObj.key3 }}
</template>
<script>
import { computed, reactive } from "vue";
export default {
  setup() {
    let infoObj = reactive({
      key1: "苹果",
      key2: 1000,
    });

    // 类似vue2的
    let newKey = computed(() => {
      return infoObj.key1 + ":" + infoObj.key2;
    });

    // 或者,新增到原有的对象上
    infoObj.key3 = computed(() => {
      return infoObj.key1 + ":" + infoObj.key2 + "[新增属性的]";
    });

    return {
      infoObj,
      newKey,
    };
  },
};
</script>
