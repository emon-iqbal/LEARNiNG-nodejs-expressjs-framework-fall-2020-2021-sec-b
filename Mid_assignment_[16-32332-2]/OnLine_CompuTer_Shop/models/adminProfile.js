var db = require('./db');

module.exports =
{
		get: (userID, callback) =>
		{
			var sql = "select `userID`, `username`, `password`,  `userType`,  `email` from user_table where userID=?";
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

		getAll: (callback) =>
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


		update: (user, callback) =>
		{
				var sql = "update user_table set username=?, password=?,  userType=?, email=? where userID=?";
				db.execute(sql, [user.username, user.password, user.userType, user.email, user.userID], (status) =>
				{
						if(status)
						{
							console.log("D A T A ~ U P D A T E D ~ S U C C E S F U L L Y !~_~! ");
							callback(true);
						}
						else
						{
							callback(false);
						}
				});
		}

}
