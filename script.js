function validateForm() {

  let x = document.getElementById("pass1").value; 
  let y = document.getElementById("pass2").value;
  let text;
  if (x != y) {
    text = "Password Didn't Match";
  }
  document.getElementById("passMatch").innerHTML = text;
}
