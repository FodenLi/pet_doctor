<template>
  <div class="home">
    <div class="top">
      <header>
        <div class="left">宠物医生管理系统</div>
        <div class="right">
          管理员:{{ name }}
          <button @click="out">退出</button>
        </div>
        
      </header>
    </div>
    <main>
      <ul>
        <li :class="{ active: currentContent === 'UserManage' }" @click="changeContent('UserManage')">
          医生管理
        </li>
        <div class="line"></div>
        <li :class="{ active: currentContent === 'PetManage' }" @click="changeContent('PetManage')">
          宠物管理
        </li>
        <div class="line"></div>
      </ul>
      <div class="content">
        <component :is="currentContent"></component>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import UserManage from "@/components/UserManage.vue";
import PetManage from "@/components/PetManage.vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    UserManage,
    PetManage,
  },
  setup() {
    const router = useRouter();
    var name = localStorage.getItem("admin");
    const currentContent = ref("UserManage");
    const showDropdown = ref("");
    const isArrowDown = ref(true);
    const isSubMenuVisible = ref(false);

    const out = () =>{
      if(confirm('是否退出登录？')){
        localStorage.removeItem("admin");
      router.push({name:'login'})
      }
    }

    const changeContent = (content) => {
      if (content === "CateGory" || content === "HelpCategory") {
        isArrowDown.value = false;
        showDropdown.value = "RubbishManage";
      } else {
        isArrowDown.value = true;
        showDropdown.value = "";
      }
      currentContent.value = content;
    };

    const toggleDropdown = (item) => {
      if (showDropdown.value === item) {
        showDropdown.value = "";
        isArrowDown.value = true;
        isSubMenuVisible.value = false;
      } else {
        showDropdown.value = item;
        isArrowDown.value = false;
        isSubMenuVisible.value = true;
      }
    };

    return {
      out,
      currentContent,
      showDropdown,
      isArrowDown,
      isSubMenuVisible,
      changeContent,
      toggleDropdown,
      name,
    };
  },
});
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}

.top {
  width: 100%;
  height: 70px;
  background-color: rgb(0, 132, 255);
}

header {
  width: 95%;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.left {
  font-size: 28px;
}
.right{
  font-size: 20px;
}
.right button{
  border: none;
  border-radius: 5px;
  width: 50px;
  height: 30px;
  color: white;
  background-color: red;
  font-size: 20px;
}
main {
  width: 100%;
  margin: 0 auto;
  display: flex;
}

ul {
  width: 20%;
  height: 890px;
  background-color: whitesmoke;
  list-style: none;
  display: flex;
  flex-direction: column;
}

ul>ul {
  width: 100%;
}

ul>ul li {
  font-size: 16px;
}

img {
  width: 20px;
}

.line {
  width: 100%;
  border: 1px solid rgb(215, 215, 215);
}

li {
  font-size: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

li.active {
  background-color: white;
}

.content {
  width: 80%;
  background-color: white;
}
</style>
