import LoginForm from "./LoginForm.js";

const LoginModal = () => {
  const $modal = document.createElement("div");
  $modal.classList.add("login-modal");
  document.querySelector("main").appendChild($modal);
  $modal.appendChild(LoginForm());
};

export default LoginModal;
