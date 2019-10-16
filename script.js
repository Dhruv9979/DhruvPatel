function validation(){
    var name = document.getElementById("name").value;
    var companyName = document.getElementById("company-name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var text;
    
    document.getElementById("error_message").style.padding = "10px";

    if(name.length < 2){
    text = "Please Enter valid Name";
    document.getElementById("error_message").innerHTML = text;
    return false;
    }
    if(companyName.length < 2){
    text = "Please Enter valid Company Name";
    document.getElementById("error_message").innerHTML = text;
    return false;
    }
    if(email.indexOf("@") == -1 || email.length < 0){
    text = "Please Enter valid Email";
    document.getElementById("error_message").innerHTML = text;
    return false;
    }
    if(subject.length < 2){
    text = "Please Enter Correct Subject";
    document.getElementById("error_message").innerHTML = text;
    return false;
    }
    if(message.length <= 10){
    text = "Please Enter More Than 10 Characters";
    document.getElementById("error_message").innerHTML = text;
    return false;
    }
    alert("Form submitted successfully!!!");
    return true;
}
const menuIcon = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () =>{
    navbar.classList.toggle('change');
});