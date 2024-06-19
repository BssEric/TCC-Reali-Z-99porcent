
import { getAuth  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import auth from "./config.js";

const user = getAuth();


const logoutButton = document.querySelector('#botaoSair');
logoutButton?.addEventListener("click", async() => {
  await user.signOut();
  window.location.href = "/pages/login.html"
});