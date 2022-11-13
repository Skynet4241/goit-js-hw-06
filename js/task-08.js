const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  const data = new FormData(e.target);

  if (email.value === '' || password.value === '') {
    alert('Error! All fields must be filled in');
  } else {
    let values = {};
    data.forEach((value, key) => {
      values[key] = value;
    });
    console.log(values);
    alert('You are successfully logged in ');
  }
  e.currentTarget.reset();
});
