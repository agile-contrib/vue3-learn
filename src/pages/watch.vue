<template>
  {{ count }}
  <button @click="count++">新增+1</button>
</template>
<script>
import { ref, watch } from "vue";
export default {
  setup() {
    let count = ref(0);

    /**
     * [特别注意]
     * 如果监听的数据是对象,
     * 可能考虑到深度复制有代价,
     * 新旧的值都是最新的
     *
     * 如果是监听一个对象中的某个属性:
     * watch(()=>obj.key, (newvalue, oldvalue) => {});
     *
     * 监听一个对象中的多个属性:
     * watch([()=>obj.key1,()=>obj.key2], (newvalue, oldvalue) => {});
     *
     * 如果监听的对象的那个属性值是对象
     * watch(()=>obj.key, (newvalue, oldvalue) => {},{deep:true});
     *
     */
    watch(count, (newvalue, oldvalue) => {
      console.log(newvalue, oldvalue);
    });

    return {
      count,
    };
  },
};
</script>
