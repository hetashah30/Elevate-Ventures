const card = document.querySelector('.card');
const toSignup = document.getElementById('to-signup');
const toLogin = document.getElementById('to-login');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

toSignup.addEventListener('click', () => {
  card.style.transform = 'rotateY(180deg)';
});

toLogin.addEventListener('click', () => {
  card.style.transform = 'rotateY(0deg)';
});

// Handle login submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Assuming validation is successful
  if (email && password) {
    alert('Login successful!');
    window.location.href = 'https://elevateventures.odoo.com/';
  } else {
    alert('Please fill in both email and password.');
  }
});

// Handle signup submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  // ...existing code...
});
// // Handle login submission
// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('login-email').value;
//   const password = document.getElementById('login-password').value;

//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       alert('Login successful!');
//       window.location.href = 'index.html';
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// });

// // Handle signup submission
// signupForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const name = document.getElementById('signup-name').value;
//   const email = document.getElementById('signup-email').value;
//   const password = document.getElementById('signup-password').value;

//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       alert('Signup successful!');
//       window.location.href = 'homepage.html';
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// });
