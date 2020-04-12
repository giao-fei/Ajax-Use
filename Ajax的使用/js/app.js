const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/public'));
// 设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "application/json");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

const students = [
    { id: 1, name: 'list'},
    { id: 2, name: 'giao'},
]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended:true} ))


app.get('/student', (req, res) => {
    // 根据请求参数中ID 决定发回的内容
    if(req.query.id) {
        const student = students.find(s => s.id == req.query.id)
         res.send(student)
    } else {
         res.send(students)
    
    }
})

app.post('/add_student', (req, res) => {
    students.push(req.body)
    res.send(students);    
})

app.post('/add', (req, res) => {
    console.log(req.body);
    res.send('ok');
})


app.get('/time', (req, res) => {
    // res.send(Date() + '');
    res.status(200),
    res.json(Date() + '');
    
})


app.listen(8081, () => {
    console.log('server run at http://localhost:8081');
});