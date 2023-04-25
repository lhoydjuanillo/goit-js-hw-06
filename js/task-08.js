const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formSubmit);

    function formSubmit(event) {
        event.preventDefault();
        let formItems = event.currentTarget.elements;
        let email = formItems.email.value;
        let password = formItems.password.value;
        let trimmedPassword = password.trim();

        if (email === "" || password === "") {
            return alert("All fields must be filled in!");
          }
        
          console.log(`Email: ${email}, Password: ${trimmedPassword}`);
          event.currentTarget.reset();
        };
