var expr=require('express');
var app = expr();

app.get('/',(reg, res) => {
    //res.send('<h1>This is our first!</h1>');
	var obj={
	'name':'shivam',
	'Section':'D1619'
}
res.send(obj);
});
app.get('/page1',(reg,res)=>{
res.send("here i am page-1");

});

app.get('/page2',(reg,res)=>{res.send("Here I am in pAge-2");
});

app.listen(3000);

