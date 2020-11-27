const express 			= require ('express');
const upload					= require ('express-fileupload');
const exSession			= require ('express-session');
const exValidator		= require ('express-validator');
const bodyParser		= require ('body-parser');
const apiResponse 	= require("express-api-response");
//------------------------------------------------------
const ocsLogin 								= require ('./controller/ocsLogin');
const ocsRegistration 			= require ('./controller/ocsReg');
const admin_dashboard 			= require  ('./controller/admin_DASHBOARD');
const admin_logout 						= require  ('./controller/admin_LogouT');
const customer_dashboard 			= require  ('./controller/customer_DASHBOARD');
const customer_logout 						= require  ('./controller/customer_LogouT');
const app 											= express ();																//app variables


//config
app.set ('view engine', 'ejs');

//middleware
app.use ('/DEALit', express.static('assets'));
app.use (upload());
app.use (bodyParser.urlencoded({extended: true}));
app.use (exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use ('/ocsReg', ocsRegistration);
app.use ('/ocsLogin', ocsLogin);
app.use ('/admin_LogouT', admin_logout);
app.use ('/admin_DASHBOARD', admin_dashboard);
//app.use(express.static(__dirname+"/"));

//router definition
app.get ('/', (req, res) => {

	res.send ("<br><br><br><center><table><tr><td><center><h1><font color='red'><u><b>EXPLORE YOUR PC TAKING THE LATEST COMPONENTS</b></u></h1></font><br><font color='blue'><h2>[[ Already a MEMBER? Hit The Login link<br>Not a MEMBER? no worries, make a Registration your way...]] </h2></font></center></td></tr><br><br><tr><td><center><h1><font color='red'><a href='/ocsLogin'> LOGiN</a> ~ ~ ~ <a href='/ocsReg'> Registration</a></center></h1></font></td></tr></table></center> ");

});

//server activation
app.listen (3000, () => {

	console.log('EXPRESS http SERVER BEGiNS...3000');

});









//app.use('/Halloween-IN-Rockport-MA', express.static('assets'));
//app.use('/tpic', express.static('assets'));
//app.use('/deL', express.static('assets'));
//app.use('/Windows-10-Wallpapers-20-1920-x-1080', express.static('assets'));
