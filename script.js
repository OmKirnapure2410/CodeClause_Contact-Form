function generateCaptcha() {
    var captcha = Math.random().toString(36).substr(2, 6);
    document.getElementById("captcha").textContent = captcha;
  }
  
  function validateForm() {
    var userCaptcha = document.getElementById("txtCaptcha").value;
    var generatedCaptcha = document.getElementById("captcha").textContent;
  
    if (userCaptcha === generatedCaptcha) {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
  
      // Perform form submission or any other desired action here
      // Redirect to a specific link
      window.location.href = "https://www.linkedin.com/in/om-kirnapure-a33108226";
  
      document.getElementById("contactForm").reset();
      generateCaptcha();
      document.getElementById("success").textContent = "Form submitted successfully!";
    } else {
      document.getElementById("error").textContent = "Invalid captcha. Please try again.";
      generateCaptcha();
      return false;
    }
  }
  