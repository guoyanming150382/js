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
		{
			food:'米饭',
			cao:[
				{id:1,food:'青菜',egg:'鸡蛋'},
				{id:1,food:'芹菜',egg:'鸭蛋'},
				{id:1,food:'波菜',egg:'皮蛋'}
			]
		},
		{
			food:'面条',
			cao:[
				{id:1,food:'青菜',egg:'鸡蛋'},
				{id:1,food:'芹菜',egg:'鸭蛋'},
				{id:1,food:'波菜',egg:'皮蛋'}
			]
		},
		{
			food:'鸡蛋汤',
			cao:[
				{id:1,food:'青菜',egg:'鸡蛋'},
				{id:1,food:'芹菜',egg:'鸭蛋'},
				{id:1,food:'波菜',egg:'皮蛋'}
			]
		}
	]
	res.json({code:200,msg:'成功',data:data,token:'asdasdfasdasd'})
})

app.listen(3000,'127.0.0.1')