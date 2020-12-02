var db = require('./db');

module.exports = {

	get: function(userID, callback)
	{
		var sql = "select * from components where userID=?";
		db.getResults(sql, [userID], function(result)
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
			var sql = "select * from components";
			db.getResults(sql, null, function(result)
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

// getByUname: function(username, callback){
// 		var sql = "select * from user where username='"+username+"'";
// 		db.getResults(sql, function(results){
// 			if(results.length > 0){
// 				callback(results[0]);
// 			}else{
// 				callback(null);
// 			}
// 		});
// 	},


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

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

update: function(td, callback)
{
	var sql = "update components set  c_name=?, c_catagories=?, c_types=?, c_brands=?, c_m_reviews=?, c_COST=? where userID=?";

  db.execute(sql, [td.c_name, td.c_cat, td.c_type, td.c_brand, td.cm_reviews, td.c_cost, td.userID], (status) =>
	{
    if(status)
		{
			console.log("D A T A ~ UPDATED ~ S U C C E S F U L L Y !~_~! ");
      callback(true);
    }
		else
		{
      callback(false);
    }
	});

},

insert: function(td, callback)
	{
		var sql = "insert into components values(?, ?, ?, ?, ?, ?, ?)";

		db.execute(sql, ['', td.c_name, td.c_cat, td.c_type, td.c_brand, td.cm_reviews, td.c_cost], (status) =>
		{
			if(status)
			{
				console.log("D A T A ~ INSERTED ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}
			else
			{
				callback(false);
			}
		});
	},

delete: function(td, callback)
	{
		var sql = "delete from components where userID=?";
		db.execute(sql, [td], (status) =>
		{
			if(status)
			{
				console.log("D A T A ~ REMOVED ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}
			else
			{
				callback(false);
			}
		});
	}
}
