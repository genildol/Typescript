function resumo(usuario: { nome: string, idade: number }) {
  return 'Ola, $(usuario.nome). Você tem $(usuario.idade) anos.';
}

let u = {
  nome: 'Genildo',
  idade: 50,
};

console.log(resumo(u));