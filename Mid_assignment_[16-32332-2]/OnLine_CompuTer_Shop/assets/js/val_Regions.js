
    /*ASCII code: 65-90>> UPPERCASE
    8>>   Backspace,
    95>>  underscore[_]*/

    function onlyalphabets(e)
    {
    var r_name=e.which||e.keycode;
      if((r_name>=65 && r_name<=90) || (r_name==95) || (r_name>=97 && r_name<=122) || r_name==8)
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
    var name = document.getElementById('r_name').value;
    var email = document.getElementById('country').value;
    var gender = document.getElementById('continent').value;
    var education = document.getElementById('r_code').value;

    if(name == "")
    {
      alert('PLEASE FILL THE Region_NAME to proceed');
      return false;
    }
    if(email == "")
    {
      alert('PLEASE FILL THE Country where this region is situated');
      return false;
    }
    if(gender == "")
    {
      alert('PLEASE FILL THE Continent  to proceed');
      return false;
    }
    if(education == "")
    {
      alert('PLEASE FILL THE Area Code/ ZIP Code to proceed');
      return false;
    }

    if(name.length<4)
    {
      alert('Name must be at least 4 characters to be valid in this field');
      return false;
    }
    if(name.length>15)
    {
      alert('Name must be less than 15 characters to be valid in this field');
      return false;
    }
    else
    {
      return true;
    }

  }
