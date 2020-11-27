    /*ASCII code: 65-90>> UPPERCASE
    8>>   Backspace,
    95>>  underscore[_]*/

    function onlyalphabets(e)
    {
    var v_name=e.which||e.keycode;
      if((v_name>=65 && v_name<=90) || (v_name==95) || (v_name>=97 && v_name<=122) || v_name==8)
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
    var name = document.getElementById('v_name').value;
    var email = document.getElementById('v_type').value;
    var gender = document.getElementById('v_distance').value;
    var education = document.getElementById('v_cost').value;

    if(name == "")
    {
      alert('PLEASE FILL THE VEHICLE_NAME to proceed');
      return false;
    }
    if(email == "")
    {
      alert('PLEASE FILL THE TYPES of VEHiCLES area to proceed');
      return false;
    }
    if(gender == "")
    {
      alert('PLEASE FILL THE Route  to proceed');
      return false;
    }
    if(education == "")
    {
      alert('PLEASE FILL THE expense of travel to proceed');
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
