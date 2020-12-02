
  function insertCheck()
  {
    var name = document.getElementById('cname').value;
    var cats = document.getElementById('cats').value;
    var type = document.getElementById('type').value;
    var brand = document.getElementById('brand').value;
    var review = document.getElementById('review').value;
    var cost = document.getElementById('cost').value;

    if(name == "")
    {
      alert('PLEASE FILL THE Component/Product NAME to proceed');
      return false;
    }
    if(cats == "")
    {
      alert('PLEASE FILL THE CATAGORIES to proceed');
      return false;
    }
    if(type == "")
    {
      alert('PLEASE FILL THE Product TYPE to proceed');
      return false;
    }
    if(brand == "")
    {
      alert('PLEASE FILL THE BRAND of Product to proceed');
      return false;
    }
    if(review == "")
    {
      alert('PLEASE FILL THE REVIEW to proceed');
      return false;
    }
    if(cost == "")
    {
      alert('PLEASE FILL THE COST to proceed');
      return false;
    }

    if(name.length<4)
    {
      alert('ComponentName must be at least 4 characters to be valid in this field');
      return false;
    }
    else
    {
      return true;
    }

  }
