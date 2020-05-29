


function loginf(){
    window.alert(Uname)
    
    if(name=="admin"){
        window.alert("high admin")
    }
}

function usercorrect(){    
    var userName = document.getElementById("Uname").value;
    var userPass = document.getElementById("Pword").value;

    if (userName=='admin') {
        if (userPass=='admin') {
            document.getElementById('above').innerHTML= 'IT WORKS!!';
            document.getElementById('bellow').innerHTML= '';
        }
        else{
            document.getElementById('above').innerHTML= '';
            document.getElementById('bellow').innerHTML= '';
            window.alert("Incorect Credentials");
        }        
    }
    else if (userName=='user') {
        if (userPass=='user') {
            document.getElementById('above').innerHTML= '';
            document.getElementById('bellow').innerHTML= 'IT WORKS!!';
        }
        else{
            document.getElementById('above').innerHTML= '';
            document.getElementById('bellow').innerHTML= '';
            window.alert("Incorect Credentials");
        }        
    }
    else{
        document.getElementById('above').innerHTML= '';
        document.getElementById('bellow').innerHTML= '';
        window.alert("Incorect Credentials");
    }   
}

