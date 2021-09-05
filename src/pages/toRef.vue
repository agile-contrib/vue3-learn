<template>
  {{ person }}<br />
  <input type="text" v-model="person.name" />
  <input type="text" v-model="person.info.hobby" />
  <hr />
  <input type="text" v-model="myname" />
  {{ myname }}
  <hr />
  <input type="text" v-model="myhobby" />
  {{ myhobby }}
</template>
<script>
import { reactive, toRef } from "vue";
export default {
  setup() {
    let person = reactive({
      name: "李四",
      age: 18,
      info: {
        hobby: "我没有爱好",
        remark: "这是一个普通的人",
      },
    });

    // 如果你直接使用person.name,那么person.name改了，不会同步
    // 这里相当于ref(name)，只是这个name同时和person.name保持一致
    let myname = toRef(person, "name");

    // 第二种特殊情况
    let myhobby = toRef(person.info, "hobby");

    // 此外，还有一个toRefs
    // 和toRef类似，只是一次转换多个

    return {
      person,
      myname,
      myhobby,
    };
  },
};
</script>
