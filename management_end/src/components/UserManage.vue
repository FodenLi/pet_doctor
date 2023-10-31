<template>
  <div class="manage">
    <table>
      <tr>
        <th>医生名字</th>
        <th>工作时间</th>
        <th>科目</th>
        <th>职位</th>
        <th>技能</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.doctorname }}</td>
        <td>{{ item.workyears }}</td>
        <td>{{ item.subject }}</td>
        <td>{{ item.position }}</td>
        <td>{{ item.direction }}</td>
        <td>
          <button class="editbtn" @click="editDoctor(item)">编辑</button>
          <button class="delebtn" @click="deleteDoctor(item.id)">删除</button>
          <button class="addbtn" @click="addDoctor()">添加</button>
        </td>
      </tr>
    </table>
    <div class="update" v-if="editingDoctor">
      <h2>修改医生信息</h2>
      <div>
        <span>医生编号</span><input type="text" disabled v-model="editedDoctor.doctorid" />
      </div>
      <div>
        <span>医生名字：</span><input type="text" v-model="editedDoctor.doctorname" />
      </div>
      <div>
        <span>工作时间</span><input type="text" v-model="editedDoctor.workyears" />
      </div>
      <div>
        <span>科目</span><input type="tel" v-model="editedDoctor.subject" />
      </div>
      <div>
        <span>职位</span><input type="text" v-model="editedDoctor.position" />
      </div>
      <div>
        <span>技能</span><input type="text" v-model="editedDoctor.direction" />
      </div>
      <div>
        <button @click="back">取消</button>
        <button class="comfirm" @click="confirms">确认</button>
      </div>
    </div>
    <div class="update" v-if="addingDoctor">
      <h2>添加医生信息</h2>
      <div>
        <span>医生名字：</span><input type="text" v-model="addDoctors.doctorname" />
      </div>
      <div>
        <span>工作时间</span><input type="text" v-model="addDoctors.workyears" />
      </div>
      <div>
        <span>科目</span><input type="text" v-model="addDoctors.subject" />
      </div>
      <div>
        <span>职位</span><input type="text" v-model="addDoctors.position" />
      </div>
      <div>
        <span>线上问诊次数</span><input type="text" v-model="addDoctors.consultation_number" />
      </div>
      <div>
        <span>综合评分</span><input type="text" v-model="addDoctors.score" />
      </div>
      <div>
        <span>关注人数</span><input type="text" v-model="addDoctors.follower_number" />
      </div>
      <div>
        <span>技能</span><input type="text" v-model="addDoctors.direction" />
      </div>
      <div>
        <span>个人简介</span><input type="text" v-model="addDoctors.selfintruduce" />
      </div>
      <div>
        <span>出诊价格</span><input type="text" v-model="addDoctors.price" />
      </div>
      <div>
        <button @click="addback">取消</button>
        <button class="comfirm" @click="addconfirm">确认</button>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import { useRouter } from "vue-router";
import axios from "axios";
const url = "http://127.0.0.1:8081";

export default {
  setup() {
    const items = ref([]);
    const editingDoctor = ref(false);
    const addingDoctor = ref(false);
    const editedDoctor = ref({
      doctorid: "",
      doctorname: "",
      workyears: "",
      subject: "",
      position: "",
      direction: "",
    });
    const addDoctors = ref({
      doctorname: "",
      workyears: "",
      subject: "",
      position: "",
      consultation_number: "",
      score: "",
      follower_number: "",
      direction: "",
      selfintruduce: "",
      price: ""
    });
    axios.get(`${url}/search_doctor`)
      .then((response) => {
        items.value = response.data.des;
      })
      .catch((error) => {
        console.error(error);
      });
    const editDoctor = (item) => {
      editingDoctor.value = true;
      editedDoctor.value.doctorid = item.id;
      editedDoctor.value.doctorname = item.doctorname;
      editedDoctor.value.workyears = item.workyears;
      editedDoctor.value.subject = item.subject;
      editedDoctor.value.position = item.position;
      editedDoctor.value.direction = item.direction;
    };
    const addDoctor = () => {
      addingDoctor.value = true;
    };

    const deleteDoctor = (id) => {
      if(confirm('是否删除这条数据？')){
        axios
        .get(`${url}/deldoctor?&id=${id}`)
        .then(() => {
          alert("已删除该用户");
          window.location.reload(); // 刷新页面
        })
        .catch((error) => {
          console.error(error);
        });
      }else{
        return
      }
      
    };
    const back = () => {
      editingDoctor.value = false;
    };
    const addback = () => {
      addingDoctor.value = false;
    };
    const confirms = () => {
      const doctorid = editedDoctor.value.doctorid;
      const doctorname = editedDoctor.value.doctorname;
      const workyears = editedDoctor.value.workyears;
      const subject = editedDoctor.value.subject;
      const position = editedDoctor.value.position;
      const direction = editedDoctor.value.direction;
      editingDoctor.value = false;
      axios
        .get(
          `${url}/updatedoctor?&doctorid=${doctorid}&doctorname=${doctorname}&workyears=${workyears}&subject=${subject}&position=${position}&direction=${direction}`
        )
        .then((response) => {
          console.log(response);
          window.location.reload(); // 刷新页面
          alert("修改成功！");
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const addconfirm = () => {
      const doctorname = addDoctors.value.doctorname;
      const workyears = addDoctors.value.workyears;
      const subject = addDoctors.value.subject;
      const position = addDoctors.value.position;
      const consultation_number = addDoctors.value.consultation_number;
      const score = addDoctors.value.score;
      const follower_number = addDoctors.value.follower_number;
      const direction = addDoctors.value.direction;
      const selfintruduce = addDoctors.value.selfintruduce;
      const price = addDoctors.value.price;

      addingDoctor.value = false;
      axios
        .get(
          `${url}/adddoctor?&doctorname=${doctorname}&workyears=${workyears}&subject=${subject}&position=${position}
          &consultation_number=${consultation_number}&score=${score}&follower_number=${follower_number}&direction=${direction}
          &selfintruduce=${selfintruduce}&price=${price}`
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
      editingDoctor,
      editedDoctor,
      editDoctor,
      deleteDoctor,
      back,
      addback,
      addconfirm,
      confirms,
      addDoctor,
      addingDoctor,
      addDoctors,
    };
  },
};
</script>

<style scoped>
.addbtn {
  color: white;
  background-color: rgb(198, 213, 67);
  border:none;
  border-radius: 5px;
}
.delebtn{
  color: white;
  background-color: red;
  border:none;
  border-radius: 5px;
  margin: 0px 10px;
}
.editbtn{
  color: white;
  background-color: rgb(0, 115, 255);
  border:none;
  border-radius: 5px;
}
.update {
  width: 600px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  justify-content: space-around;
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
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 25px 0px;
  
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
.update>div>button{
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 5px;
}
.comfirm{
  background-color: rgb(26, 222, 26);
  color: white;
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