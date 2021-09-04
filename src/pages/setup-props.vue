<template>
  <h2>props</h2>
</template>
<script>
export default {
  props: ["key1"],
  setup(props) {
    console.log(props.key1);
  },
};
</script>
