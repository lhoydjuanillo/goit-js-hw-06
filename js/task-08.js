const formEl = document.querySelector('.login-form');
const allInputs = document.querySelectorAll('input');


formEl.addEventListener('submit', formSubmit);

    function formSubmit(event) {
        event.preventDefault();
        let formItems = event.currentTarget.elements;
        let email = formItems.email.value;
        let password = formItems.password.value;
        let trimmedPassword = password.trim();

        if (email === "" || trimmedPassword === "") {
            return alert("All fields must be filled in!");
          }
        
          console.log(`Email: ${email}, Password: ${trimmedPassword}`);
          event.currentTarget.reset();
        };
