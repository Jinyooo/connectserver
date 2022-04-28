<template>
  <div>
    <table>
      <tr v-for="(memo, i) in memo" :key="i">
        <td>{{ memo.id }}</td>
        <td>{{ memo.writer }}</td>
        <td @click="$router.push(`/page/${memo.id}`)">{{ memo.memo }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    data () {
      return {
        memo : []
      }
  },
  // 메모 데이터 가져오기
  created () {
    // 해당주소로 get 요청 - 응답 받아와 memo에 할당
    // apimemo 서버로 가서 response 코드 작성해야함
    this.$http.get('/api/memo') 
    .then( (response)=>{
      console.log(response.data);
      this.memo = response.data;
    })
  },

}
</script>
