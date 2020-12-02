const express 			= require ('express');
const upload 					= require ('express-fileupload');
const db 								= require.main.require ('./models/db');
const userModel		 = require.main.require ('./models/ocsUsers');
const comModel 			 = require.main.require ('./models/Components');
// const tdModel 			 = require.main.require ('./models/tdList');

const router		=		express.Router();

router.get('*', (req, res, next) =>
{
		if(req.session.username == null)
		{
			res.redirect('/ocsLogin');
		}
		else
		{
			next();
		}

});

router.get('/', (req, res) =>
{
		res.render('admin_DASHBOARD/admin_DASHBOARD', {username: req.session.username});
});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>get,post for admin_Profile>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

				router.get('/admin_Profile', (req, res) =>
				{
						var username = req.session.username;
						userModel.getByUname(username, (results) =>
						{
							res.render('admin_DASHBOARD/Admin_Profile', { ocsUsers : results, username: req.session.username});
								// 		res.render('dashboard/TP_Profile', { user : results, uname: req.session.username});
						});

				});

				router.get('/adminPHOTO', (req, res) =>
				{
					var username = req.session.username;
					userModel.getByUname(username, (results) =>
					{
						res.render('admin_DASHBOARD/adminPHOTO', { ocsUsers : results, username: req.session.username});
					});

				});

				router.get('/Admin_Profile/update/:userID', (req, res) =>
				{
						userModel.get(req.params.userid, (result) =>
						{
								res.render('admin_DASHBOARD/Admin_ProfileUpdate', {ocsUsers: result});
						});

				});

				router.post('/Admin_Profile/update/:userID', (req, res) =>
				{
							var user = {
							username: req.body.username,
							password: req.body.password,
							userType: req.body.type,
							email: req.body.email,

						    userID: req.params.userID
							};

					 userModel.update(user, (status) =>
					 {
							if(status)
							{
								res.redirect('/admin_DASHBOARD/Admin_Profile');
							}
							else
							{
								res.redirect('/admin_DASHBOARD/Admin_Profile');
							}
						});

				});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>get,post for Components>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

				router.get('/Components', (req, res) =>
				{
						comModel.getAll(function(result)
						{
								res.render('admin_DASHBOARD/Components', { td : result, username: req.session.username});
						});

				});

				router.get('/Components/insert', (req, res) =>
				{
						res.render('admin_DASHBOARD/Components/com_insert');
				});

				router.post('/Components/insert', (req, res) =>
				{
									var td =	{
									c_name				: req.body.c_name,
									c_cat						:	req.body.c_cats,
									c_type					: req.body.c_types,
									c_brand					: req.body.c_brands,
									cm_reviews		: req.body.cm_reviews,
									c_cost		 				: req.body.c_cost
									}

								comModel.insert(td, (status) =>
								{
											if(status)
											{
													res.redirect('/admin_DASHBOARD/Components');
											}
											else
											{
													res.redirect('/admin_DASHBOARD/com_insert');
											}
								});
				});

				router.get('/Components/edit/:userID', (req, res) =>
				{
						comModel.get(req.params.userID, (result) =>
						{
								res.render('admin_DASHBOARD/com_edit', {td: result});
						});
				});

				router.post('/Components/edit/:userID', (req, res) =>
				{
						var td =	{
						c_name				: req.body.c_name,
						c_cat						:	req.body.c_cats,
						c_type					: req.body.c_types,
						c_brand					: req.body.c_brands,
						cm_reviews		: req.body.cm_reviews,
						c_cost		 				: req.body.c_cost,

							userID		: req.params.userID

						};

					comModel.update(td, (status) =>
					{
					 	if(status)
						{
						 	res.redirect('/admin_DASHBOARD/Components');
					 	}
						else
						{
						 	res.redirect('/admin_DASHBOARD/Components');
					 	}
					});

				});

				router.get('/Components/delete/:userID', (req, res) =>
				{

					comModel.get(req.params.userID, (result) =>
					{
						res.render('admin_DASHBOARD/com_delete', {td: result});
					});

				});

				router.post('/Components/delete/:userID', (req, res) =>
				{
							comModel.delete(req.body.userID, (status) =>
							{
								if(status)
								{
									res.redirect('/admin_DASHBOARD/Components');
								}
								else
								{
									res.redirect('/admin_DASHBOARD/Components');
								}
							});
				});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


module.exports = router;
