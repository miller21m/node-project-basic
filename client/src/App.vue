<template>
  <div>
    <label for="userId">Enter user id: </label>
    <input type="text" name="" id="userId" v-model="userId">
    <button @click="this.try">Click</button>

    <div v-if="displayOptions">
      <div>
        <button @click="this.startWork">Start work day</button>
        <br>
        <button @click="this.endWorkDay">End work day</button>
      </div>
      <br>
      <div>
        <button  @click="this.startBraek">start break</button>
        <br>
        <button  @click="this.endBraek">End break</button>
      </div>

    </div>


    <div v-if="error">Wrong userID</div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      userId: undefined,
      error: false,
      displayOptions: false

    }
  },
  methods:{
    try(){
      axios.post("http://localhost:3001/users",{
        id:this.userId
      })
      .then((res)=>{
        console.log(res);
        this.error = false
        this.displayOptions = true
      })
      .catch(error=>{
        console.log(error);
        this.error = true

      })
    },
    startWork(){
      axios.post("http://localhost:3001/startWorkDay",{
        id: this.userId
      })
      .then((res)=>{
        console.log(res);
      })
      .catch((error)=>{
        console.log(error);
      })
    },

        endWorkDay(){
      axios.post("http://localhost:3001/endWorkDay",{
        id: this.userId
      })
      .then((res)=>{
        console.log(res);
      })
      .catch((error)=>{
        console.log(error);
      })
    },

        startBraek(){
      axios.post("http://localhost:3001/startBraek",{
        id: this.userId
      })
      .then((res)=>{
        console.log(res);
      })
      .catch((error)=>{
        console.log(error);
      })
    },

        endBraek(){
      axios.post("http://localhost:3001/endBraek",{
        id: this.userId
      })
      .then((res)=>{
        console.log(res);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>
