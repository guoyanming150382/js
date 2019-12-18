const express =require('express')

const app=new express()

app.all("*",function (req,res,next) {
    
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");

    next();
});

app.get('/list',(req,res)=>{
	var data=[
			{name:'盖伦',job:'saber',date:1236547896524},
			{name:'盖伦',job:'saber',date:1236547899524},
			{name:'xiao盖伦',job:'saber',date:1234567890000},
			{name:'xiao盖伦',job:'saber',date:1234567890},
			{name:'盖伦',job:'saber',date:1234567899000},
			{name:'盖伦',job:'saber',date:1234567899}
	]
	res.json({code:200,msg:'successs',data:data})
})

app.listen(3000,'127.0.0.1')