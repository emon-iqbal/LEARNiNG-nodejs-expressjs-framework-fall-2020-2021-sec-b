const express 			= require ('express');
const upload 					= require ('express-fileupload');
const db 								= require.main.require ('./models/db');
const userModel		 = require.main.require ('./models/ocsUsers');
const comModel 			 = require.main.require ('./models/Components');
const proModel 			 = require.main.require ('./models/adminProfile');
const raModel 			 = require.main.require ('./models/Ram');

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

router.get('/COM_page', (req, res) =>
{
		res.render('admin_DASHBOARD/COM_page', {username: req.session.username});
});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>get,post for admin_Profile>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

				router.get('/Admin_Profile', (req, res) =>
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
						userModel.get(req.params.userID, (result) =>
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

					 proModel.update(user, (status) =>
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
						res.render('admin_DASHBOARD/com_insert');
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

//>>>>>>>>>>>>>>get,post for RAM_page>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

				router.get('/RAM_page', (req, res) =>
				{
						raModel.getAll(function(result)
						{
								res.render('admin_DASHBOARD/RAM_page', { ram : result, username: req.session.username});
						});

				});

				router.get('/RAM_page/insert', (req, res) =>
				{
						res.render('admin_DASHBOARD/ram_insert');
				});

				router.post('/RAM_page/insert', (req, res) =>
				{
						if(req.files)
						{
								console.log(req.files);
								var file = req.files.file;
								var filename = file.name;
								if(file.mimetype == "image/jpeg" || file.mimetype == "image/JPEG" || file.mimetype == "image/jpg" || file.mimetype == "image/JPG" || file.mimetype == "image/png" || file.mimetype == "image/PNG")
								{
										file.mv ('./assets/BackPics/'+file.name,  (err) =>
										{
													if(err)
													{
														res.send(err);
													}
													else
													{
																var ram =	{
																r_name				: req.body.r_name,
																r_type					: req.body.r_type,
																r_cap						:	req.body.r_cap,
																r_speed					: req.body.r_speed,
																m_review		: req.body.m_review,
																r_cost		 				: req.body.r_cost,

																			filename 	: filename
																		}

																raModel.insert(ram, (status) =>
																{
																			if(status)
																			{
																					console.log(" \n \n CONGRATS !! YOUR EXPECTED FILE IS UPLOADED !!" );

																					res.redirect('/admin_DASHBOARD/RAM_page');
																			}
																			else
																			{
																					res.redirect('/admin_DASHBOARD/ram_insert');
																			}
																});
													}
										})
								}
					else
					{
						alert('OOPSS !! YOUR UPLOADED FiLE IS INVALID !!  >>>>ONLY ## .jpg and ## .png extension is acceptable here  ~__~ ');
						return false;
						console.log(" \n \n OOPSS !! YOUR UPLOADED FiLE IS INVALID !! \n \n  >>>>ONLY ## .jpg and ## .png extension is acceptable here  ~__~" );
						res.redirect('/admin_DASHBOARD/ram_insert');
					}
			}

		});

				router.get('/RAM_page/edit/:id', (req, res) =>
				{
						raModel.get(req.params.id, (result) =>
						{
								res.render('admin_DASHBOARD/ram_update', {ram: result});
						});
				});

				router.post('/RAM_page/edit/:id', (req, res) =>
				{
							var ram =	{
									r_name				: req.body.r_name,
									r_type					: req.body.r_type,
									r_cap						:	req.body.r_cap,
									r_speed					: req.body.r_speed,
									m_review			: req.body.m_review,
									r_cost		 				: req.body.r_cost,

													id		: req.params.id
							};

							raModel.update(ram, (status) =>
							{
									 	if(status)
										{
										 	res.redirect('/admin_DASHBOARD/RAM_page');
									 	}
										else
										{
										 	res.redirect('/admin_DASHBOARD/RAM_page');
									 	}
							});
				});

				router.get('/RAM_page/delete/:id', (req, res) =>
				{

						raModel.get(req.params.id, (result) =>
						{
							res.render('admin_DASHBOARD/ram_delete', {ram: result});
						});

				});

				router.post('/RAM_page/delete/:id', (req, res) =>
				{
							raModel.delete(req.body.id, (status) =>
							{
										if(status)
										{
												res.redirect('/admin_DASHBOARD/RAM_page');
										}
										else
										{
												res.redirect('/admin_DASHBOARD/RAM_page');
										}
							});

				});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



module.exports = router;
