var express = require('express');
var router = express.Router();
// 메모데이터 가져오기
const memos = require('../memo.json');
let count = 2;

/* GET 으로 메모 보내주기 */
router.get('/', function(req, res, next) {
    console.log(memos);
    res.send(memos);
});

/* post로 메모 받아오기 */
router.post('/', function (req, res, next) {
    const memo = req.body.data;
    count++;
    const m = {
        id : count,
        writer : "익명",
        title : memo.title,
        memo : memo.memo
    }; 
    memos.push(m);
});

/* get 으로 메모페이지 보내주기 */
router.get('/:id', (req, res, next)=>{
    // id 값 들고오기
    const id = req.params.id;
    const memo = memos.filter( (memo)=> { if ( memo.id == id ) {
        return true
    }} ); // memo는 filter 후 참인 객체들의 배열
    res.send(memo[0]);
});


module.exports = router;