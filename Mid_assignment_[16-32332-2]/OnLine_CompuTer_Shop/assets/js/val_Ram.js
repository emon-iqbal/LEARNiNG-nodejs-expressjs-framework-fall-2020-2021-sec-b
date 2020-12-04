
  function insertCheck()
  {
    var name = document.getElementById('rname').value;
    var type = document.getElementById('type').value;
    var cap = document.getElementById('cap').value;
    var speed = document.getElementById('speed').value;
    var review = document.getElementById('review').value;
    var cost = document.getElementById('cost').value;
    var file = document.getElementById('file').value;

    if(name == "")
    {
      alert('PLEASE FILL THE ComponentName to proceed');
      return false;
    }
    if(type == "")
    {
      alert('PLEASE FILL THE TYPE OF COMPONENT to proceed');
      return false;
    }
    if(cap == "")
    {
      alert('PLEASE FILL THE  ComponentCAPACITY to proceed');
      return false;
    }
    if(speed == "")
    {
      alert('PLEASE FILL THE ComponentSPEED to proceed');
      return false;
    }
    if(review == "")
    {
      alert('PLEASE FILL THE REVIEW field to proceed');
      return false;
    }
    if(cost == "")
    {
      alert('PLEASE FILL THE COST to proceed');
      return false;
    }
    if(file == "")
    {
      alert('PLEASE UPLOAD A PHOTO OF THE COMPONENT TO PROCEED');
      return false;
    }

    if(name.length<3)
    {
      alert('ComponentName must be at least 3 characters to be valid in this field');
      return false;
    }
    else
    {
      return true;
    }

  }
