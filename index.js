console.log("Hello World");
const http = require("http"); // node.js의 http 모듈
const fs = require("fs") // 파일시스템 모듈
const path = require("path") // 경로처리를 위한 모듈

const server = http.createServer((req, res) => {
    // res.statusCode = 200; // 응답코드 (성공)
    // res.setHeader("Cotent-Type", "text-plain") // 응답헤더
    // res.end("Hello node.js") //  응답종료와 메세지 전송

    if (req.method === "GET") {
        if (req.url === "/") {
            // index.html 응답_
            fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
                if (err) {
                    //파일 불러올때 에러가 난 경우
                    res.statusCode = 500;
                    res.end("Error");
                } else {
                    // 정상 동작 구문
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html");
                    res.end(data);
                }
            });
        } 
    } else if  (req.url === "/about") {
        fs.readFile(path.join(__dirname, "about.html"), "utf-8", (err, data) => {
            if (err) {
                //파일 불러올때 에러가 난 경우
                res.statusCode = 500;
                res.end("Error");
            } else {
                // 정상 동작
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
            });
    } else {
        fs.readFile(path.join(__dirname, "contact.html"), "utf-8", (err, data) => {
            if (err) {
                //파일 불러올때 에러가 난 경우
                res.statusCode = 500;
                res.end("Error");
            } else {
                // 정상 동작 구문
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
        });
    }

});
 



// 서버 실행
server.listen(8080, () => {
    console.log("Server running");
});