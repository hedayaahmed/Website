function Insert ()
{
    document.getElementById("passalert").innerHTML="";
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var pw = document.getElementById("pw").value;
    var pwc = document.getElementById("pwc").value;
    var mob = document.getElementById("mob").value;
    
    if (pw == pwc && pw.length > 5)
    {
        
    }
    else
    {
        document.getElementById("passalert").innerHTML="*wrong";
    }
    for (int i=0 ; i < name.length ;i++)
    {
        
    }
    
    var req = new XMLHttpRequest();
    req.open("GET","adduser.php?name="+name+"&email="+email+"&pw="+pw+"&mob="+mob,false);
    req.send();
}