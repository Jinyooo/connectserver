<template>
    <div>
        <h1>글을 수정하는 곳입니다</h1>
        <input type="text" v-model="memo.title"> <br>
        <textarea cols="30" rows="10" v-model="memo.memo"></textarea> <br>
        <button @click="updateMemo">수정</button>

    </div>
</template>

<script>
export default {
    data () {
        return {
            memo : {
                title : "",
                memo : ""
            }
        }
    },
    created () {
        // 클릭한 메모 아이디에 해당하는 메모 불러옴
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then( (response)=>{
            this.memo = response.data;
        })
    },
    methods : {
        // axios를 이용해 수정 버튼을 눌렀을때 값을 보내줌 - put
        updateMemo() {
            this.$http.put('/api/memo/updatememo',{
                data : {
                    memo : this.memo
                }
            });
            this.$router.push('/');
        }
    },
    
}
</script>