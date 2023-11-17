document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("openFormButton").addEventListener("click", function() {
      document.getElementById("popup").style.display = "block";
      history.pushState(null, null, "#popup");
    });
  
    document.querySelector(".close").addEventListener("click", function() {
      document.getElementById("popup").style.display = "none";
      history.pushState(null, null, " ");
    });
  
    window.addEventListener("popstate", function(event) {
      if (event.state !== null) {
        document.getElementById("popup").style.display = "block";
      } else {
        document.getElementById("popup").style.display = "none";
      }
    });
  
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
      event.preventDefault();
      var inputs = document.querySelectorAll("#feedbackForm input, #feedbackForm textarea");
      var isEmptyField = false;
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
        isEmptyField = true;
        inputs[i].classList.add("error");
        } else {
        inputs[i].classList.remove("error");
        }
    }

var emailField = document.getElementById("fc-generated-1-email");
var phoneField = document.getElementById("fc-generated-1-phone");
var isInvalidEmail = !emailField.checkValidity();
var isInvalidPhone = !phoneField.checkValidity();

if (isEmptyField || isInvalidEmail || isInvalidPhone) {
  alert("Пожалуйста, заполните все поля правильно.");
  return;
}
      var form = event.target;
      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", form.action, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          alert("Сообщение успешно отправлено!");
          form.reset();
        } else if (xhr.readyState === 4 && xhr.status === 500) {
          alert("Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.");
        }
      };
      xhr.send(formData);
    });
  
    var inputs = document.querySelectorAll("input, textarea");
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      var value = localStorage.getItem(input.id);
      if (value) {
        input.value = value;
      }
      input.addEventListener("input", function(event) {
        localStorage.setItem(event.target.id, event.target.value);
      });
    }
  });