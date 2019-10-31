btnLogin.onclick=function(){
   req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPass.value);
    if (req1.status == 200) {
        lblSuccess.value = "The authentication code is " + req1.responseText
        ChangeForm(favFoods)
    } else {
        lblSuccess.value = "Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;
    }
}

btnNextPage1.onclick=function(){
  ChangeForm(favFoods)
}
