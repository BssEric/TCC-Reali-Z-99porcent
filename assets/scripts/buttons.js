// Button cadastrar
function validarEmail() {
  //Verifca se campo  e-mail é vazio e válido
  const email = document.getElementById("email").value;

  if (!email) {
    alert("E-mail não álido");
  } else {

  }

  function validarEmail(email) {
    return /\s+@\s+\.\s+/.teste(email);
  }

} 