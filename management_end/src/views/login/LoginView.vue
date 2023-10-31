<template>
  <div class="body">

    <div class="wrap">
      <h1>管理员登录</h1>
      <p>
        <label for="username">账号</label>
        <input type="text" name="username" v-model="username" placeholder="请输入用户名" />
        <span>请输入正确的用户名</span>
      </p>
      <p>
        <label for="password">密码</label>
        <input type="password" name="password" v-model="password" placeholder="请输入密码" />
        <span>请输入正确的用户名</span>
      </p>
      <div class="btn-function">
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const url = "http://127.0.0.1:8081";

export default {
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");

    const login = () => {
      console.log(username.value, password.value)
      axios
        .post(
          `${url}/adminlogin`, { tel: username.value, password: password.value }
        )
        .then((response) => {
          console.log(response.data);
          if (response.data.des) {
            if (response.data.des === "无任何用户数据！") {
              alert('该用户尚未注册');
            } else {
              const name = response.data.des[0].adminname;
              localStorage.setItem("admin", name);
              localStorage.setItem('token',response.data.token)
              alert("欢迎您！" + name);
              router.push({ name: "home" });
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      username,
      password,
      login,
    };
  },
};
</script>

<style scoped>
.body {
  width: 100%;
  height: 660px;
  padding-top: 300px;
  background: url("../../image/pet.jpg") no-repeat;
  background-size: 100% 100%;
}

h1 {
  color: rgb(0, 153, 255);
}

p {
  width: 400px;
}

p span {
  display: none;
}

.wrap {
  width: 430px;
  height: 400px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  opacity: .9;
}

label {
  font-size: 25px;
  color: rgb(0, 153, 255);
}

input {
  border: none;
  outline: none;
  width: 400px;
  height: 60px;
  border-radius: 10px;
}

::-webkit-input-placeholder {
  font-size: 20px;
}

button {
  width: 180px;
  height: 60px;
  background-color: rgb(0, 170, 255);
  border-radius: 10px;
  text-align: center;
  line-height: 60px;
  font-size: 25px;
  color: #fff;
  border: none;
}
</style>