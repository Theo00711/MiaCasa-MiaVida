document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(evento) {
    // Evita o comportamento padrão do link, se necessário customizar
    console.log("Navegando para:", this.getAttribute("href"));
  });
});
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(evento) {
    // Evita o comportamento padrão do link, se necessário customizar
    console.log("Navegando para:", this.getAttribute("href"));
  });
});
const formCadastro = document.querySelector("#form-cadastro");

formCadastro.addEventListener("submit", function(evento) {
  evento.preventDefault(); // impede o recarregamento da página

  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;

  if (nome.trim() === "" || email.trim() === "") {
    mostrarAlerta("erro", "Preencha todos os campos obrigatórios.");
    return;
  }

  mostrarAlerta("sucesso", "Cadastro enviado com sucesso!");
  formCadastro.reset();
});

function mostrarAlerta(tipo, mensagem) {
  const alertaDiv = document.querySelector("#area-alerta");
  alertaDiv.innerHTML = `<div class="alerta alerta-${tipo}" role="alert">${mensagem}</div>`;
}
const campoCpf = document.querySelector("#cpf");

campoCpf.addEventListener("input", function() {
  const valido = this.checkValidity();
  this.style.borderColor = valido ? "#2e9e5b" : "#d64545";
});
document.querySelector("#lista-gatos").addEventListener("click", function(evento) {
  if (evento.target.classList.contains("badge")) {
    alert("Você clicou no status: " + evento.target.textContent);
  }
});
