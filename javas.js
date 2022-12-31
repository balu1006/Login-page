const form = document.querySelector('#login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === 'admin' && password === 'password') {
    alert('Login successful!');
  } else {
    alert('Invalid username or password');
  }
});
