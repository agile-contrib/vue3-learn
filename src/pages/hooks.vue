<template>
  left:{{ point.x }}px<br />
  top:{{ point.y }}px
</template>
<script>
import usePoint from "../hooks/usePoint";
export default {
  setup() {
    //   hooks本质就是一个方法
    // 把setup中使用的组合api(比如ref、reactive、onMounted等)封装起来
    // 类似vue2中的mixin
    let point = usePoint();

    return {
      point,
    };
  },
};
</script>
