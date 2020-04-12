const express = require('express');
const path = require('path');
const app = express();

// 设置跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 把所有数据返回给客户端
const db = require('../json/demo02.json');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))  // 解析 urlencoded 格式
app.use(bodyParser.json())  // 解析 json 格式

app.get('/comment', (req, res) => {
    res.send(db)
})

app.post('/reply', (req, res) => {
    const date = new Date();
    const item = {
        name: req.body.name,
        poem: req.body.poem,
        content: req.body.content,
        dynasty: req.body.dynasty,
        created: date.toLocaleString()
    }
    db.push(item)
    res.send('ok')
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(8080, () => console.log('ok'))