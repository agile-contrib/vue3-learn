<template>
  {{ p }}
  <hr />
  <button @click="p.key += '-'">改变key</button>
  <button @click="p.newKey.key1 += '-'">改变newKey.key1</button>
  <button @click="p.newKey = '新数据'">改变newKey</button>
</template>
<script>
import { markRaw, reactive, toRaw } from "vue";
export default {
  setup() {
    let p = reactive({
      key: "value",
    });

    console.log(p);

    // 把双向绑定的数据还原成普通数据
    // 只能处理reactive缔造的响应式数据
    console.log(toRaw(p));

    // 还有一个方法，markRaw
    // 比如在后来在p上新增属性，自动也是响应式的
    // p.xxx={}
    // 如果你希望新增的不是响应式的(数据可以修改，可是页面不会同步)
    // p.xxx=markRaw({})
    /**
     *  举例子：
     * p.newKey是响应式的
     * p.newKey.key1不是
     *
     * 不过，如果你修改了p.newKey.key1以后，修改了响应式的数据，页面会完全同步
     */
    p.newKey = markRaw({
      key1: "value1",
      key2: "value2",
    });

    return {
      p,
    };
  },
};
</script>
