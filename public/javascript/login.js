// logs user in
const loginFormHandler = async (event) => {
  
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/api/recipes/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  // creates new user
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && phone && password) {
      console.log(username, email, phone, password);
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, phone, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response);
        document.location.replace('/api/recipes/dashboard');
      }
       else {
        alert(response.statusText);
      }
    }
  };
  // event listers
  document
    .querySelector('#login')
    .addEventListener('click', loginFormHandler);
  
  document
    .querySelector('#sign-up')
    .addEventListener('click', signupFormHandler);