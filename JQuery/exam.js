
function validate()
{
   var isNameEmpty=checkEmpty("name" , "Name is empty");

    if(isNameEmpty == true)
    {
        checkfortext("name", "Name should contain letters");
    }

    var isConEmpty=checkEmpty("contry" , "Country name is empty");

    if(isConEmpty == true)
    {
        checkfortext("contry", "Country name should contain letters");
    }

    var isAgeEmpty=checkEmpty("age" , "Age is not given");
    
    if(isAgeEmpty == true)
    {
        checkRange("age", 18, 60,"Age out of bound");
    }
   
    function checkRange (controlID, min, max, msg)
    {
        var element=document.getElementById(controlID);
        if(element.value<min || element.value>60)
        {
            element.value=msg;
            return false;
        }
        else
        {
           // element.value="";
            return true;
        }
    }
    function checkfortext(controlID, msg)
    {
        var element=document.getElementById(controlID);
        if(!isNaN(element.value))
        {
            element.value=msg;
            return false;
        }
        else
        {
           // element.value="";
            return true;
        }
    }
    function checkEmpty (controlID, msg)
    {
        var element=document.getElementById(controlID);
        if(element.value == "")
        {
            element.value=msg;
            return false;
        }
        else
        {
         //   element.value="";
            return true; 
        }
    }
}