<template>
  <div class="manage">
    <table>
      <tr>
        <th>宠物名</th>
        <th>性别</th>
        <th>种类</th>
        <th>年龄</th>
        <th>问诊号</th>
        <th>体重</th>
        <th>是否绝育</th>
        <th>备注</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.nickName }}</td>
        <td>{{ item.sex }}</td>
        <td>{{ item.species }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.cardNumber }}</td>
        <td>{{ item.weight }}</td>
        <td>{{ item.isJueyu }}</td>
        <td>{{ item.remark }}</td>
        <td>
          <button class="editbtn" @click="editPet(item)">编辑</button>
          <button class="delebtn" @click="deletePet(item.id)">删除</button>
          <button class="addbtn" @click="addPets()">添加</button>
        </td>
      </tr>
    </table>
    <div class="update" v-if="editingPet">
      <h2>修改宠物信息</h2>
      <div>
        <span>编号：</span><input type="text" disabled v-model="editedPet.id" />
      </div>
      <div>
        <span>宠物名：</span><input type="text" v-model="editedPet.nickName" />
      </div>
      <div>
        <span>性别：</span><input type="text" v-model="editedPet.sex" />
      </div>
      <div>
        <span>种类：</span><input type="text" v-model="editedPet.species" />
      </div>
      <div>
        <span>年龄：</span><input type="tel" v-model="editedPet.age" />
      </div>
      <div>
        <span>问诊号：</span><input type="text" v-model="editedPet.cardNumber" />
      </div>
      <div>
        <span>体重：</span><input type="text" v-model="editedPet.weight" />
      </div>
      <div>
        <span>是否绝育：</span><input type="text" v-model="editedPet.isJueyu" />
      </div>
      <div>
        <span>备注：</span><input type="text" v-model="editedPet.remark" />
      </div>
      <div class="operate">
        <button @click="back">取消</button>
        <button class="comfirm" @click="confirms">确认</button>
      </div>
      
    </div>
    <div class="update" v-if="addingPet">
      <h2>添加宠物信息</h2>
      <div>
        <span>宠物名：</span><input type="text" v-model="addPet.nickName" />
      </div>
      <div>
        <span>性别：</span><input type="text" v-model="addPet.sex" />
      </div>
      <div>
        <span>种类：</span><input type="text" v-model="addPet.species" />
      </div>
      <div>
        <span>年龄：</span><input type="tel" v-model="addPet.age" />
      </div>
      <div>
        <span>问诊号：</span><input type="text" v-model="addPet.cardNumber" />
      </div>
      <div>
        <span>体重：</span><input type="text" v-model="addPet.weight" />
      </div>
      <div>
        <span>是否绝育：</span><input type="text" v-model="addPet.isJueyu" />
      </div>
      <div>
        <span>备注：</span><input type="text" v-model="addPet.remark" />
      </div>
      <div class="operate">
        <button @click="addback">取消</button>
        <button class="comfirm" @click="addconfirm">确认</button>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
const url = "http://127.0.0.1:8081";

export default {
  setup() {
    const items = ref([]);
    const editingPet = ref(false);
    const addingPet = ref(false);
    const editedPet = ref({
      id: '',
      nickName: "",
      sex: "",
      species: "",
      age: "",
      cardNumber: "",
      weight: "",
      isJueyu: "",
      remark: "",
    });
    const addPet = ref({
      nickName: "",
      sex: "",
      species: "",
      age: "",
      cardNumber: "",
      weight: "",
      isJueyu: "",
      remark: "",
    });

    axios
      .get(`${url}/petinfo`)
      .then((response) => {
        if (response.data.des != "无任何宠物数据！") {
          items.value = response.data.des;
        }
      })
      .catch((error) => {
        console.error(error);
      });
    const editPet = (item) => {
      editingPet.value = true;
      editedPet.value.id = item.id;
      editedPet.value.nickName = item.nickName;
      editedPet.value.sex = item.sex;
      editedPet.value.species = item.species;
      editedPet.value.age = item.age;
      editedPet.value.cardNumber = item.cardNumber;
      editedPet.value.weight = item.weight;
      editedPet.value.isJueyu = item.isJueyu;
      editedPet.value.remark = item.remark;
    };
    const addPets = () => {
      addingPet.value = true;
    };
    const deletePet = (id) => {
      if (confirm('是否删除这条数据？')) {
        axios
          .get(`${url}/delPet?&id=${id}`)
          .then(() => {
            alert("已删除该条宠物信息");
            window.location.reload(); // 刷新页面
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        return
      }
    };
    const back = () => {
      editingPet.value = false;
    };
    const addback = () => {
      addingPet.value = false;
    };

    const confirms = () => {
      const id = editedPet.value.id;
      const nickName = editedPet.value.nickName;
      const sex = editedPet.value.sex;
      const species = editedPet.value.species;
      const age = editedPet.value.age;
      const cardNumber = editedPet.value.cardNumber;
      const weight = editedPet.value.weight;
      const isJueyu = editedPet.value.isJueyu;
      const remark = editedPet.value.remark;
      editingPet.value = false;
      axios
        .get(
          `${url}/updatepet?&id=${id}&nickName=${nickName}&sex=${sex}&species=${species}&age=${age}&cardNumber=${cardNumber}
          &weight=${weight}&isJueyu=${isJueyu}&remark=${remark}`
        )
        .then((response) => {
          console.log(response);
          alert("修改成功！");
          location.reload(); // 刷新页面
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const addconfirm = () => {
      const nickName = addPet.value.nickName;
      const sex = addPet.value.sex;
      const species = addPet.value.species;
      const age = addPet.value.age;
      const cardNumber = addPet.value.cardNumber;
      const weight = addPet.value.weight;
      const isJueyu = addPet.value.isJueyu;
      const remark = addPet.value.remark;
      axios
        .get(
          `${url}/addpets?&nickName=${nickName}&sex=${sex}&species=${species}&age=${age}&cardNumber=${cardNumber}
          &weight=${weight}&isJueyu=${isJueyu}&remark=${remark}`
        )
        .then(() => {
          alert("已添加");
          window.location.reload(); // 刷新页面
        })
        .catch((error) => {
          console.error(error);
        });
    };
    return {
      items,
      editingPet,
      editedPet,
      editPet,
      deletePet,
      back,
      addback,
      addconfirm,
      confirms,
      addPets,
      addingPet,
      addPet,
    };
  },
};
</script>

<style scoped>
.addbtn {
  color: white;
  background-color: rgb(198, 213, 67);
  border: none;
  border-radius: 5px;
}

.delebtn {
  color: white;
  background-color: red;
  border: none;
  border-radius: 5px;
  margin: 0px 10px;
}

.editbtn {
  color: white;
  background-color: rgb(0, 115, 255);
  border: none;
  border-radius: 5px;
}

.update {
  width: 600px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  justify-content: space-between;
  top: 22%;
  left: 40%;
  color: black;
  padding: 10px 0px;
  background-color: whitesmoke;
  box-shadow: 0 0 15px 10px whitesmoke; 
}

.update h2 {
  text-align: center;
  width: 100%;
}

.update div {
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.update>div>span {
  display: inline-block;
  text-align: left;
  width: 100px;
}
.update div input {
  width: 60%;
  height: 40px;
  border: none;
  border-radius: 4px;
  outline: none;
}
.update>div>button {
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 5px;
}
.update .operate{
  width: 100%;
}
.comfirm {
  background-color: rgb(26, 222, 26);
  color: white;
}

.update input {
  border: none;
  border-radius: 4px;
  height: 18px;
}

.manage {
  padding: 35px;
}

table {
  margin: 0 auto;
  border: 1px solid rgb(161, 161, 161);
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: center;
  border: 1px solid rgb(161, 161, 161);
  height: 57px;
}
</style>