const regras = {...}
function validarCampo(campo, regra) {...}
export const regras = {
  nome: /^.{3,100}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
};

export function validarCampo(campo, regra) {
  const valor = campo.value.trim();
  const valido = regra.test(valor);

  campo.classList.remove("campo-valido", "campo-invalido");
  if (valor === "") return;

  campo.classList.add(valido ? "campo-valido" : "campo-invalido");
  return valido;
}