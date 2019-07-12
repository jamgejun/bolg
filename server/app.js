const Express = require('express')
const bodyParser = require('body-parser')

const app = Express()

app.get('/', (req, res) => {
    res.end('hello word')
})
app.get('/jsp', (req, res) => {
    let { callback } = req.query
    let data = {
        time: new Date(),
        content: 'jsp is ok'
    }
    // jsonp返回设置
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(callback + '(' + JSON.stringify(data) + ')');

    res.end();
    
    // res.setHeader('Content-Type', 'text/javascript')
    // res.write(callback + '(' + JSON.stringify(data) + ')');
    // res.end()
})
app.use(bodyParser())
app.listen(3000,() => {
    console.log(`start on 3000`)
})
