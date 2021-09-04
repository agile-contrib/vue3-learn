<template>
  <!-- <Index /> -->

  <!-- [1] -->
  <!-- <Index key1="value1" /> -->

  <!-- [2] -->
  <Index key1="value1" key2="value2" @myclick="doit">
    <span>这是一个span</span>
    <template v-slot:myname>
      <span>这是一个有名字的插槽</span>
    </template>
  </Index>
</template>

<script>
/**
 * 查看的时候，放开需要的部分就可以了
 */

// import Index from "./pages/setup.vue"; // setup
// import Index from "./pages/ref.vue"; // ref定义响应式数据
// import Index from "./pages/reactive.vue"; // reactive定义对象类型数据响应

// setup的两个形参
// import Index from "./pages/setup-props.vue"; // 传递数据给组件[1]
import Index from "./pages/setup-context.vue"; // [2] + [3]

export default {
  components: {
    Index,
  },
  setup() {
    return {
      // [3]
      doit(param1) {
        console.log(param1);
      },
    };
  },
};
</script>
