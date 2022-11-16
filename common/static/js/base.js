function validate() {

    var f_name = document.getElementById("f_name")
    var uname = document.getElementById("uname")
    var pas = document.getElementById("psw")
    var s_fname = document.getElementById("error1")
    var s_uname = document.getElementById("error2")
    var uname_valid = document.getElementById("error3")
    var lower = document.getElementById("error4")
    var upper = document.getElementById("error5")
    var number = document.getElementById("error6")
    var maxchar = document.getElementById("error7")
    var inverror = document.getElementById("inverror")
    var fname_patt = /^[a-z A-Z]+$/


    if (f_name.value == '') {
        s_fname.innerHTML = 'enter your name'
        s_fname.style.color = 'red'
        return false

    }
    else {
        if (f_name.value.match(fname_patt) == null) {
            s_fname.innerHTML = 'enter valid name'
            s_fname.style.color = 'red'
            return false
        }else{
        s_fname.innerHTML = ''
        }
        if(f_name.value.length<3){
            s_fname.innerHTML = 'Atleast 3 charecter'
            s_fname.style.color = 'red'
            return false
        }else{
            s_fname.innerHTML = ''
        }
    }
    // username
    if (uname.value == '') {
        s_uname.innerHTML = 'enter username'
        s_uname.style.color = 'red'
        uname_valid.style.color=''
        return false
    }
    else if ((uname.value.search(/[A-Z]/)==-1) || (uname.value.search(/[a-z]/)==-1)||(uname.value.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=\<\,\>\?]/)==-1)){
        uname_valid.style.color = 'red'
        s_uname.innerHTML= ''
        return false 
    
    }else{
        uname_valid.style.color='green'
        s_uname.innerHTML=''
    }
        // password  
}

var myInput = document.getElementById("psw");
var letter = document.getElementById("error4");
var capital = document.getElementById("error5");
var number = document.getElementById("error6");
var length = document.getElementById("error7");

myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}



