var nameError = document.getElementById("nameError");
var phoneError = document.getElementById("numberError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("messageError");


function validationname(){
    var user = document.getElementById("name").value;
      if(user.length == 0){
        nameError.innerHTML = 'fill the input please';
        return false;
      }

      if(user.length<5)
      {
        nameError.innerHTML = '*more than 5 character required';
        return false;
      }

      nameError.innerHTML = 'valide name';
      return true;
}



function validationnumber(){
    var phone = document.getElementById("number").value;

    if(phone.length == 0)
    {
  phoneError.innerHTML = 'enter the number';
  return false;
    }

    if(phone.length<=9)
     {
      phoneError.innerHTML = 'more than 9digits required';
      return false;
     }
       
    phoneError.innerHTML = 'valide';
    return true;
}




function validationemail(){

  var email = document.getElementById("Email").value;

  if(email.length == 0)
  {
       emailError.innerHTML = 'Enter the email';
       return false;
  }
  if(email.length <= 5)
  {
       emailError.innerHTML = 'enter atleast 6char';
       return false;
  }
     
  emailError.innerHTML = 'valide';
  return true;
   
}


function validationmessage(){
   var usermessage = document.getElementById("usermessage").value;
    if(usermessage.length == 0){
      messageError.innerHTML = 'please enter the message';
    }

    if(usermessage.length<=10)
    {
      messageError.innerHTML = 'enter more than 10 char';
      return false;
    }

    messageError.innerHTML = 'valide';
    return true;
}

                        //  check the all function is return is true
        
function validateform(){
  if (validationname(),validationnumber(),validationemail(),validationmessage()) 
  {
      window.alert("success form submited");
      return true;
  } 
  else 
  {
    window.alert("please fill the details");
    return false;
  }
}