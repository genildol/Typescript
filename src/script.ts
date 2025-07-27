function resumo(usuario: { nome: string, idade?: number }) {
  if (usuario.idade !== undefined) {
    return 'Ola, $(usuario.nome). Você tem $(usuario.idade) anos.';
  } else {
  } return 'Ola, $(usuario.nome). Você não informou a idade.';
}
let u = {
  nome: 'Genildo',
  idade: 50,
};

resumo(u);