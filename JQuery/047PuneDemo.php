<?php 

    if(isset($_POST["btnLogin"]))
    {
        if($_POST["uname"] == "abc"  
                && $_POST["password"] == "def")
        {
                echo "Welcome ". $_POST["uname"];
        }
        else
        {
                header("location:046PuneDemo.html");
        }
        //echo "You clicked on Login Button";
    }
    else
    {
        header("location:048PuneDemo.html");
        //echo "You clicked on Register Button";
    }
?>