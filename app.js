import LoginModal from "./components/LoginModal.js";

document.addEventListener("DOMContentLoaded", () => {
  const $btn = document.querySelector(".log-btn");

  document.addEventListener("click", (e) => {
    // Si el click es en el botón de login/logout
    if (e.target.matches(".log-btn")) {
      if (e.target.dataset.log === "in") {
        // shows login form
        LoginModal();
      } else {
        alert("GoodBy! Adéu! Txau! Adiós! Ciao!");
        document.querySelector(".user").textContent = "unknown";
        e.target.dataset.log = "in";
        e.target.textContent = "Login";
      }
    }

    // Si el click es en el botón Submit
    if (e.target.matches("#submit")) {
      e.preventDefault();
      const $modal = document.querySelector(".login-modal");
      document.querySelector("main").removeChild($modal);
      document.querySelector(".user").textContent = "Loged";
      document.querySelector(".log-btn").dataset.log = "out";
      document.querySelector(".log-btn").textContent = "Logout";
    }

    // Si el click es en el botón Cancel del formulario
    if (e.target.matches("#cancel")) {
      const $modal = document.querySelector(".login-modal");
      document.querySelector("main").removeChild($modal);
    }

    // Si el click es en register
    if (e.target.matches(".register")) {
      alert("Register Form");
    }
  });
});
