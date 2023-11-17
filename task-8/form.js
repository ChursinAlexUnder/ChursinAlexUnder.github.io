/* function openForm() {
    document.getElementById("popup").style.display = "block";
    history.pushState({ popupOpen: true }, "", "?popupOpen=true");
  }
  
  function closeForm() {
    document.getElementById("popup").style.display = "none";
    history.pushState({ popupOpen: false }, "", "/");
  }
  
  window.addEventListener("popstate", function(event) {
    if (event.state && event.state.popupOpen) {
      openForm();
    } else {
      closeForm();
    }
  });
  

  var feedbackForm = document.getElementById("slapform-feedbackForm");
  feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(feedbackForm);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", feedbackForm.action, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Success!", xhr.responseText);
          alert("Форма успешно отправлена!");
          feedbackForm.reset();
          closeForm();
        } else {
          console.log("Fail!", xhr.responseText);
          alert("Ошибка при отправке формы!");
        }
      }
    };
    xhr.send(formData);
  });

  feedbackForm.addEventListener("submit", function(event) {
    localStorage.setItem("name", feedbackForm.name.value);
    localStorage.setItem("email", feedbackForm.email.value);
    localStorage.setItem("phone", feedbackForm.phone.value);
    localStorage.setItem("organization", feedbackForm.organization.value);
    localStorage.setItem("message", feedbackForm.message.value);
  });
  
  window.addEventListener("load", function() {
    feedbackForm.name.value = localStorage.getItem("name");
    feedbackForm.email.value = localStorage.getItem("email");
    feedbackForm.phone.value = localStorage.getItem("phone");
    feedbackForm.organization.value = localStorage.getItem("organization");
    feedbackForm.message.value = localStorage.getItem("message");
  }); */