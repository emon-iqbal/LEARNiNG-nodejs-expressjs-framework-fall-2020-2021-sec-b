var db = require('./db');

module.exports =
{
		get: (id, callback) =>
		{
			var sql = "select * from ram_table where id=?";
			db.getResults(sql, [id], (result) =>
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
				var sql = "select * from ram_table";
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
			 	var sql = "select * from user_table where username=? and password=? and userType='admin'";
			 	db.getResults(sql, [user.username, user.password, user.userType], (result) =>
			 	{
					 	if(result.length > 0)
						{
							console.log("YOU ARE LOGGED IN ~ TO THE HOME OF ~ ADMIN ~ S U C C E S F U L L Y !~_~! ");
							callback(true);
						}
						else
						{
							callback(false);
						}
			 	});
		 },

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

		insert: (ram, callback) =>
    {
        var sql = "insert into ram_table values(?, ?, ?, ?, ?, ?, ?, ?)";

				db.execute(sql, ['', ram.r_name, ram.r_type, ram.r_cap, ram.r_speed, ram.m_review, ram.r_cost, ram.filename], (status) =>
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

		update: (ram, callback) =>
		{
				var sql = "update ram_table set ram_name=?, type=?, capacity=?, speed=?, manufacturer_review=?, cost=? where id=?";

				db.execute(sql, [ram.r_name, ram.r_type, ram.r_cap, ram.r_speed, ram.m_review, ram.r_cost, ram.id], (status) =>
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

		delete: (id, callback) =>
		{
				var sql = "delete from ram_table where id=?";

				db.execute(sql, [id], (status) =>
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
