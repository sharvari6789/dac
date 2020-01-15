<?php


    if(isset($_POST["txtName"]))    
    {
        echo  "Welcome" . $_POST["txtName"];
    }
    else{
        //echo "You are not welcome.Register first";
        header("location:Register.html");
    }


// if(isset($_GET["txtName"]))    
// {
//     echo  "Welcome" . $_GET["txtName"];
// }
// else{
//     echo "You are not welcome.Register first";
// }


    // if(isset($_POST["txtName"]))    
    // {
    //     echo  "Welcome" . $_POST["txtName"];
    // }
    // else{
    //     echo "You are not welcome.Register first";
    // }

    // header("Content-Type:application/json");
    // echo "{'Name': 'Mahesh'}";

    // header("Content-Type:text/plain");
    // echo "Hello ABC";

?>