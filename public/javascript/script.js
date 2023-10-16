const loginToggle = document.getElementById('login-toggle');
const registerToggle = document.getElementById('register-toggle');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');




loginToggle.addEventListener('click', () => {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
});

registerToggle.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
});
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return re.test(String(email).toLowerCase());
  }
  
function signin_validation(){
    var nam=document.getElementById("name").value;
    var mail=document.getElementById("mail").value;
    var pass=document.getElementById("pass").value;
    var conpass=document.getElementById("conpass").value;
    var flag=true;

    if(nam==""){
      document.getElementById("s1").innerHTML="Name is required";
      flag=false; }
     else if(/[0-9]/.test(nam)==true){ 
         document.getElementById("s1").innerHTML="Invalid name";
         flag=false;}
     else{
         document.getElementById("s1").innerHTML="";
     }


        if(mail==""){
          document.getElementById("s3").innerHTML="Email is required";
          flag=false; }
     else if(!validateEmail(mail) || mail==""){
          document.getElementById("s3").innerHTML="invalid email";
           flag=false;}
     else{
             document.getElementById("s3").innerHTML="";
         }

         if(pass==""){ 
          document.getElementById("s5").innerHTML="Password is required";
          flag=false; }
         else if(pass.length < 8) {  
            document.getElementById("s5").innerHTML = "Password length must be atleast 8 characters";  
            flag=false;  
         }
         else if(pass.length > 15) {  
            document.getElementById("s3").innerHTML = "Password length must not exceed 15 characters";  
            flag=false;  
         } 
         else{
          document.getElementById("s5").innerHTML="";
              }
          
          if(pass != conpass) {  
                document.getElementById("s4").innerHTML = "Passwords are not same";  
                flag=false;  
              } 

            
}
function login_validate(){
    var email=document.getElementById("mail").value;
    var pin=document.getElementById("pin").value;
    
    var flag=true;
  
    if(email==""){
      document.getElementById("s3").innerHTML="Email is required";
      flag=false; }
  else if(!validateEmail(email) || email==""){
      document.getElementById("s3").innerHTML="invalid email";
       flag=false;}
  else{
    document.getElementById("s3").innerHTML="";
     }
  
  
  if(pin==""){ 
    document.getElementById("s5").innerHTML="Password is required";
    flag=false; }
   else if(pin.length < 8) {  
      document.getElementById("s5").innerHTML = "Password length must be atleast 8 characters";  
      flag=false;  
   }
   else if(pin.length > 15) {  
      document.getElementById("s3").innerHTML = "Password length must not exceed 15 characters";  
      flag=false;  
   } 
   else{
    document.getElementById("s5").innerHTML="";
        }
  
    if(flag==false){
       window.alert('error');
  
     }
  
  }
var additemid=0;
function addtocart(item){
  additemid +=1;
  var selecteditem=document.createElement('div');
  selecteditem.classList.add('cartimg');
  selecteditem.setAttribute('id',additemid);
  var img=document.createElement('img');
  img.setAttribute('src',item.children[2].currentSrc);
  var title=document.createElement('div'); 
  title.innerText=item.children[0].innerText;
  title.style="display:inline;margin:50px;";
  var label=document.createElement('div');
  label. innerText=item.children[1].children[1].innerText;
  label.style="display:inline;margin:50px;";
  var select=document.createElement('span');
  select.innerText=item.children[1].children[1].value;
  var delbtn=document.createElement('button');
  delbtn.innerText='DELETE';
  delbtn.setAttribute('onclick','del('+additemid+')');
  var cartitem=document.getElementById('title');
  selecteditem.append(img);
  selecteditem.append(title);
  selecteditem.append(label);
  selecteditem.append(delbtn);
  cartitem.append(selecteditem);
}

function del(item){
  document.getElementById(item).remove();
}