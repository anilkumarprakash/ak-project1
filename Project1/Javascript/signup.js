function validateform(){
    let x = document.forms['frm1']['username'].value;
    let y = document.forms['frm1']['Email'].value;
    let z = document.getElementById("password").value;
    if (x==""){
        alert("User Name cannot be Emtpy")
        return false;
    }

   
    if (z==""){ 
        alert("Password cannot be Emtpy");
        return false;
    }
}