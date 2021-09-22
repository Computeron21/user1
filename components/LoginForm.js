const LoginForm = () => {
  const $form = document.createElement("form");
  $form.classList.add("login-form");
  $form.innerHTML = `
  <h2>Login</h2>
  <label for="username">Username:</label>
  <input type="text" name="username" id="username" required/>
  <label for="password">Password:</label>
  <input type="text" name="password" id="password" required/>
  <div class="login-form-btns">
    <input type="submit" name="submit" id="submit" value="Submit"/>
    <input type="button" name="cancel" id="cancel" value="Cancel"/>
  </div>
  `;
  return $form;
};

export default LoginForm;
