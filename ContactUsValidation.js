function validateForm()
{
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;

  var isValid = true;

  // Validate first Name
  isValid &= checkNameLength(firstName, "First name must be more than 2 characters");
  isValid &= checkNameLetters(firstName, "Please only enter letters for first name");

  // Validate last name
  isValid &= checkNameLength(lastName, "Last name must be more than 2 characters");
  isValid &= checkNameLetters(lastName, "Please only enter letters for last name");

  isValid &= checkEmail(email, "Please enter a valid email");
}

// Given a name, check if the name contains
// only letters.
function checkNameLetters(name, errMessage)
{
  if(!/^[a-zA-Z]*$/.test(name))
  {
    alert(errMessage);
    return false;
  }
  return true;
}

// Given a name, check if the length
// of the name is greater than 1.
function checkNameLength(name, errMessage)
{
  if (name.length < 2)
  {
    alert(errMessage);
    return false;
  }
  return true;
}

// Given an email, test if the email
// is a valid email.
function checkEmail(email, errMessage)
{
  console.log("Here");
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email))
  {
    alert(errMessage);
    return false;
  }
  return true;
}
