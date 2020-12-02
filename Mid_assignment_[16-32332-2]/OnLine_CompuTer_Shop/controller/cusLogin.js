var express 	= require('express');
const exValidator			= require ('express-validator');
var cusModel 	= require.main.require('./models/ocsCustomers');
//var userModel 	= require.main.require('./models/ocsUsers');
var router 		= express.Router();
//var upload = require('express-fileupload');

router.get('/', function(req, res){
	res.render('ocsLogin/ocsLogin');
});

router.post('/', function(req, res)
{

		var user = {
			username: req.body.username,
			password: req.body.password,
							userType: req.body.type
						};

						cusModel.validate(user, function(status)
						{
							if(status)
							{
									if(user.userType=="customer")
									{
										req.session.username = user.username;
										//console.log("iNVALiD user type SELECTED !! ");
										res.redirect('/customer_DASHBOARD');
									}
									else
									{
											res.redirect('/');
											console.log("iNVALiD user type SELECTED !! ");
									}
		 					}
							else
							{
			 						res.send('<br><br><br><center><font color="purple"><h1>~_~  iNVALiD USERNAME/PASSWORD  ~_~</h1></font><br><a href="/ocsLogin"><h1><font color="red">PLEASE TRY AGAiN</font></h1></a></center>');
							}

						});

});

module.exports = router;
