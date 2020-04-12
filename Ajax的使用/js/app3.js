const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const students = [
    { id: 1, name: 'list'},
    { id: 2, name: 'giao'}
]

// 设置跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/student', (req, res) => {
    // 根据请求参数中ID 决定发回的内容
    if(req.query.id) {
        const student = students.find(s => s.id == req.query.id)
         res.send(student)
    } else {
         res.send(student)
    
    }
})

app.get('/time', (req, res) => {
    // res.send(Date() + '');
    var date = new Date();
    res.status(200),
    res.json(date.toLocaleString() + '');
    
})

app.use(express.static(__dirname + '/public'));


app.listen(8081, () => {
    console.log('server run at http://localhost:8081');
});