const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, "../backend/public"), // 빌드 위치
    devServer: { // 프록시서버 
        proxyTable : {
            '/api' : { // api 주소로 들어왔을 때 서버로 연결
                target : "http://localhost:3000/api",
                changeOrigin : true,
                pathRewrite : {
                    "^/api" : "" 
                }
            }
        }
    }
}