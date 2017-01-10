//Problem: Hints shown even when form is valid.
//Solution: Hide and show them at appropriate times.
var $password = $("#password");
var $confirmPassword = $("#confirm_password);
//Hide hints.
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val()
}

function canSubmit() {
 return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
  if ($password.val(). length > 8) {
      //Hide hint if valid.
      $password.next().hide();
    } else {
   //else show hint.
      $password.next().show();
    }
}

function enableSubmitEvent() {
 $("#submit").prop("disabled", !canSubmit()); 
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match.
  if(arePasswordsMatching()) {
    //Hide hint if match.
    $confirmPassword.next().hide();
  } else {
    //else show hint.
    $confirmPassword.next().show();
  }
}

//When event happens on password input.
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
    //Find out if password is valid.  

$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
