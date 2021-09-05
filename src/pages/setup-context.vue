<template>
  <button @click="doEmit()">点击我</button>
</template>
<script>
export default {
  props: ["key2"],
  emits: ["myclick"],
  setup(props, context) {
    //   使用组件的时候，有二个属性key1和key2
    console.log(context.attrs); // 由于key2被定义在props中了，只剩下key1（相当于vue2中的this.$attrs）
    console.log(props); // 在props中定义的key2

    console.log(context.slots); // 收到的插槽内容，相当于vue2中的this.$slots

    return {
      doEmit() {
        //   相当于vue2的this.$emit()方法
        context.emit("myclick", "我传递的数据");
      },
    };
  },
};
</script>
