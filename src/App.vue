<template>
  <ul>
    <li>
      <router-link to="/a"> Go to pageA </router-link>
    </li>
    <li>
      <router-link to="/b"> Go to pageB </router-link>
    </li>
  </ul>
  <div>
    <router-view />
  </div>
</template>
<style scoped>
ul > li {
  display: inline-block;
  margin: 20px;
  cursor: pointer;
  background-color: rgb(53, 149, 233);
  padding: 10px;
}
div {
  outline: 1px solid red;
}
</style>
