const gatos = [
  { nome: "Mimi", idade: "2 anos", status: "Disponível" },
  { nome: "Tom", idade: "1 ano", status: "Disponível" },
  { nome: "Luna", idade: "3 anos", status: "Urgente" }
];

function criarCardGato(gato) {
  const corBadge = gato.status === "Urgente" ? "badge-alerta" : "badge-sucesso";
  
  return `
    <article class="card">
      <h3>${gato.nome}</h3>
      <p>Idade: ${gato.idade}</p>
      <span class="badge ${corBadge}">${gato.status}</span>
    </article>
  `;
}

function renderizarListaGatos() {
  const htmlGerado = gatos.map(criarCardGato).join("");
  document.querySelector("#lista-gatos").innerHTML = htmlGerado;
}
const gatos = [...]
function criarCardGato(gato) {...}
function renderizarListaGatos() {...}
export const gatos = [
  { nome: "Mimi", idade: "2 anos", status: "Disponível" },
  { nome: "Tom", idade: "1 ano", status: "Disponível" },
  { nome: "Luna", idade: "3 anos", status: "Urgente" }
];

export function criarCardGato(gato) {
  const corBadge = gato.status === "Urgente" ? "badge-alerta" : "badge-sucesso";
  return `
    <article class="card">
      <h3>${gato.nome}</h3>
      <p>Idade: ${gato.idade}</p>
      <span class="badge ${corBadge}">${gato.status}</span>
    </article>
  `;
}

export function renderizarListaGatos() {
  const htmlGerado = gatos.map(criarCardGato).join("");
  document.querySelector("#lista-gatos").innerHTML = htmlGerado;
}
