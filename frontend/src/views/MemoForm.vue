<template>
  <div class="about">
    <h1>메모를 작성하는 공간입니다</h1>

      <input type="text" v-model="title"> <br>
      <textarea cols="30" rows="10" v-model="memo"></textarea> <br>
      <button @click="addMemo">전송</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "",
      memo: "",
    }
  },
  methods : {
    addMemo() {
        this.$http.post('/api/memo', {
            data : { 
                title : this.title,
                memo : this.memo,
            }
        }).then( (response)=> console.log(response.data));
        this.$router.push('/');
    }
    },
  
}
</script>