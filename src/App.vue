<template>
  <Index />
</template>

<script>
/**
 * 查看的时候，放开需要的部分就可以了
 */

// import Index from "./pages/setup.vue"; // setup
// import Index from "./pages/ref.vue"; // ref定义响应式数据
import Index from "./pages/reactive.vue"; // reactive定义对象类型数据响应

export default {
  components: {
    Index,
  },
};
</script>
