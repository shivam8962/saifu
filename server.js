const exprss=require('express');
const hbs=require('hbs');
const fs=require('fs');


var app=exprss();
const port = process.env.PORT || 3000;

//Dyanamic//

hbs.registerPartials(__dirname + '/views/Partials')
app.set('View engine','hbs');
app.use(exprss.static(__dirname+'/public'));

app.use((req,res,next)=>{
	var now =new Date().toString();
	var log=`${now}: ${req.method} ${req.url}`;

	console.log(log);
	fs.appendFileSync('server.log',log +'\n');
	next();
})


//here//
hbs.registerHelper('getCurrentYear', () =>  {
  return new Date().getFullYear()
});

//here//
hbs.registerHelper('screamIt', (text) =>  {
  return text.toUpperCase();
});

app.get('/',(req,res)=>{
	res.render('home.hbs',{
		pageTitle:'Home Page',
		WelcomeMessage:'Welcome to my Message',
		currentYear: new Date().getFullYear()
	});
});
app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		pageTitle:'About Page',
		currentYear: new Date().getFullYear()
	});
});

// /bad -send back json with error message

app.get('/bad',(req,res)=>{
	res.send({
		errorMessage:'Unable to handle request'
	});
});
/*
app.listen(3000,()=>{
	console.log('Server is up on port 3000');
	});

	*/
	app.listen(port,() => {
		console.log('server is up to on port $ {port}');
	})