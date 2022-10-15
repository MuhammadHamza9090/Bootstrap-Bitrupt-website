var form = document.getElementById('form');

form.addEventListener('click',function(event){
    event.preventDefault()
     
   
    alert("username");
});



function login(){
  
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
var email=document.getElementById("Email").value;
var password=document.getElementById("Password").value;

if(email===""  ||  password===""){
alert("You must have to fill inpt fields");
}
else{

  if(email.match(mailformat)){
    window.location="./index.html";
}
  else{
    alert("Your email is pattern sould be example@gmail.com")
  }
}
}