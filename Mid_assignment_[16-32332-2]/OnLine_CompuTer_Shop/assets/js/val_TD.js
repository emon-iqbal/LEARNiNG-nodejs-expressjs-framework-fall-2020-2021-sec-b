    /*ASCII code: 65-90>> UPPERCASE
    8>>   Backspace,
    95>>  underscore[_]*/

function onlyalphabets(e)
{
  var tdname=e.which||e.keycode;
  if((tdname>=65 && tdname<=90) || (tdname==95) || (tdname>=97 && tdname<=122) || tdname==8)
  {
    return true;
  }
  else
  {
    return false;
  }
}

  function insertCheck()
  {
    var name = document.getElementById('tdname').value;
    var email = document.getElementById('email').value;
    //var gender = document.getElementById('gender').value;
    var education = document.getElementById('education').value;

    if(name == "")
    {
      alert('PLEASE FILL THE TD_NAME to proceed');
      return false;
    }
    if(email == "")
    {
      alert('PLEASE FILL THE email area to proceed');
      return false;
    }
    			var at=email.indexOf('@');
    			var dot=email.lastIndexOf('.');
    			if(at<=0 || at+1 >= dot || dot+1 >=email.length-1)
    			{
    					alert("inVaLid Email Address !!");
    					return false;
    			}

    			var gender = document.forms["myform"]["gender"].value;
    			if(gender=="")
    			{
    				alert("Gender is BLANK !!");
    				return false;
    			}
    //
    // if(gender == "")
    // {
    //   alert('PLEASE FILL THE gender to proceed');
    //   return false;
    // }
    if(education == "")
    {
      alert('PLEASE FILL THE education to proceed');
      return false;
    }

    if(name.length<4)
    {
      alert('TDName must be at least 4 characters to be valid in this field');
      return false;
    }
    if(name.length>15)
    {
      alert('TDName must be less than 15 characters to be valid in this field');
      return false;
    }
    else
    {
      return true;
    }

  }
