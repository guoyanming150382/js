const express =require('express')
const app= new express()

// 接收前端传输的数据使用========================
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
// 接收前端传输的数据使用========================

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.get('/list',(req,res)=>{
	var data=[
		{name:'天',old:19,idmesage:[
			{funy:'ball',like:'baseball',hobby:'bike'},
			{funy:'ball1',like:'baseball',hobby:'bike'},
			{funy:'ball2',like:'baseball',hobby:'bike'}
		]},
		{name:'地',old:19,idmesage:[
			{funy:'ball1',like:'baseball',hobby:'bike'},
			{funy:'ball2',like:'baseball',hobby:'bike'},
			{funy:'ball3',like:'baseball',hobby:'bike'}
		]},
		{name:'水',old:19,idmesage:[
			{funy:'ball1',like:'baseball',hobby:'bike'},
			{funy:'ball2',like:'baseball',hobby:'bike'},
			{funy:'ball3',like:'baseball',hobby:'bike'}
		]}
	]
	res.json({code:200,msg:'成功',data:data})
})

app.post('/po',(req,res)=>{
	console.log(req.body)
	res.json({code:200,data:req.body,msg:'成功'})
})

app.listen(3000,'127.0.0.1')