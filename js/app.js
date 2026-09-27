// Seleciona a div principal onde o conteúdo será injetado
const app = document.querySelector("#app");

// Objeto que guarda o conteúdo HTML de cada "página"
const paginas = {
  inicio: `
    <h2>Sobre o MiaCasa MiaVida</h2>
    <p>O MiaCasa MiaVida nasceu com um proposito simples...</p>
  `,
  projetos: `
    <h2>Ajude o MiaCasa MiaVida</h2>
    <p>Cada doacao pode fazer a diferenca na vida de um gato</p>
  `,
  cadastro: `
    <h2>Cadastro</h2>
    <form id="form-cadastro">
      <label for="nome">Nome completo:</label>
      <input type="text" id="nome" name="nome" required>
    </form>
  `
};

// Função principal: limpa o container e injeta o novo fragmento HTML
function renderizarPagina(nomePagina) {
  const conteudo = paginas[nomePagina] || "<h2>Página não encontrada</h2>";
  app.innerHTML = conteudo;
}

// Função que lê o hash da URL e decide qual página mostrar
function tratarNavegacao() {
  const hash = window.location.hash.replace("#", "") || "inicio";
  renderizarPagina(hash);
}

// Escuta o evento "hashchange": dispara toda vez que a URL muda (#inicio, #cadastro...)
window.addEventListener("hashchange", tratarNavegacao);

// Executa uma vez ao carregar a página, pra já mostrar o conteúdo certo
window.addEventListener("DOMContentLoaded", tratarNavegacao);

function tratarNavegacao() {
  const hash = window.location.hash.replace("#", "") || "inicio";
  renderizarPagina(hash);

  // Depois de renderizar a página "projetos", popula a lista de gatos
  if (hash === "projetos") {
    renderizarListaGatos();
  }
}
const app = document.querySelector("#app");
const paginas = {...}
function renderizarPagina(nomePagina) {...}
function tratarNavegacao() {...}

window.addEventListener("hashchange", tratarNavegacao);
window.addEventListener("DOMContentLoaded", tratarNavegacao);

// Eventos de clique no menu
document.querySelectorAll("nav a").forEach(link => {...});

// Evento do menu hambúrguer
menuToggle.addEventListener("change", function() {...});

// Evento de submit do formulário (usa validarCampo de validacao.js)
formCadastro.addEventListener("submit", function(evento) {...});

// Event delegation nos cards de gatos
document.querySelector("#lista-gatos").addEventListener("click", function(evento) {...});

// Listeners de input em cada campo (usa validarCampo de validacao.js)
document.querySelector("#nome").addEventListener("input", function() {...});
document.querySelector("#email").addEventListener("input", function() {...});
document.querySelector("#cpf").addEventListener("input", function() {...});

function mostrarAlerta(tipo, mensagem) {...}

// Salva os dados do formulário no localStorage
function salvarCadastro(dados) {
  const cadastrosExistentes = JSON.parse(localStorage.getItem("cadastros")) || [];
  cadastrosExistentes.push(dados);
  localStorage.setItem("cadastros", JSON.stringify(cadastrosExistentes));
}

// Recupera todos os cadastros salvos
function recuperarCadastros() {
  return JSON.parse(localStorage.getItem("cadastros")) || [];
}

// Integrando ao submit do formulário
formCadastro.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const dados = {
    nome: document.querySelector("#nome").value,
    email: document.querySelector("#email").value,
    cpf: document.querySelector("#cpf").value,
    data: new Date().toLocaleDateString("pt-BR")
  };

  salvarCadastro(dados);
  mostrarAlerta("sucesso", "Cadastro salvo com sucesso!");
  formCadastro.reset();
});
const dados = {
  nome: campos.nome.value,
  email: campos.email.value,
  cpf: campos.cpf.value,
  data: dayjs().format("DD/MM/YYYY [às] HH:mm")
};
import { renderizarListaGatos } from "./templates.js";
import { regras, validarCampo } from "./validacao.js";

const app = document.querySelector("#app");
// ... resto do código continua igual, agora usando as funções importadas