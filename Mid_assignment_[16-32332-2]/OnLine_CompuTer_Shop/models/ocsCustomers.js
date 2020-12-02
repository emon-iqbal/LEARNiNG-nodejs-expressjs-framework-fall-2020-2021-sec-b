var db = require('./db');

module.exports =
{
		get: (userID, callback) =>
		{
			var sql = "select * from user_table where userID=?";
			db.getResults(sql, [userID], (result) =>
			{
				if(result.length > 0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

			});
		},

		getAll: function(callback)
		{
				var sql = "select * from user_table";
				db.getResults(sql, (result) =>
				{
						if(result.length > 0)
						{
							callback(result);
						}
						else
						{
							callback([]);
						}

				});
		},

		admin: function(callback)
		{
					var sql = "select * from user_table where userType='admin'";
					db.getResults(sql, null, (result) =>
					{
								if(result.length > 0)
								{
									callback(result);
								}
								else
								{
									callback([]);
								}
					});
		},

		customer: function(callback)
		{
					var sql = "select * from user_table where userType='customer'";
					db.getResults(sql, null, (result) =>
					{
								if(result.length > 0)
								{
									callback(result);
								}
								else
								{
									callback([]);
								}
					});
		},

		getByUname: (username, callback) =>
		{
					var sql = "select * from user_table where username=?";
					db.getResults(sql, [username], (results) =>
					{
								if(results.length > 0)
								{
									console.log('USERNAME FOUND in DataBase');
									callback(results[0]);
								}
								else
								{
									callback(null);
								}
					});
		 },

		validate: (user, callback) =>
		{
			 	var sql = "select * from user_table where username=? and password=? and userType='customer'";
			 	db.getResults(sql, [user.username, user.password, user.userType], (result) =>
			 	{
					 	if(result.length > 0)
						{
							console.log("YOU ARE LOGGED IN ~ TO THE HOME OF ~ CUSTOMER ~ S U C C E S F U L L Y !~_~! ");
							callback(true);
						}
						else
						{
							callback(false);
						}
			 	});
		 },

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

		insert: (user, callback) =>
		{
				var sql = "insert into user_table values(?, ?, ?, ?, ?, ?)";

				db.execute(sql, ['', user.username, user.password, user.userType, user.email, user.filename], (status) =>
				{
						if(status)
						{
							console.log("N E W ~ D A T A ~ I N S E R T E D ~ S U C C E S F U L L Y !~_~! ");
							callback(true);
						}
						else
						{
							callback(false);
						}
				});
		},

		update: (user, callback) =>
		{
				var sql = "update user_table set username=?, password=?, userType=?, email=? where userID=?";

				db.execute(sql, [user.username, user.password, user.userType, user.email, user.userID], (status) =>
				{
						if(status)
						{
							console.log( " D A T A ~ U P D A T E D ~ S U C C E S F U L L Y !~_~! " );
							callback(true);
						}
						else
						{
							callback(false);
						}
				});
		},

		delete: (userID, callback) =>
		{
				var sql = "delete from user_table where userID=?";

				db.execute(sql, [userID], (status) =>
				{
						if(status)
						{
							console.log("D A T A ~ D E L E T E D  !! ");
							callback(true);
						}
						else
						{
							callback(false);
						}
				});
			}

}
