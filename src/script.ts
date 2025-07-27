let nomes = ['joão', 'maria', 'josé', 'ana', 'pedro', 90];

nomes.forEach(function (nome) {
  if (typeof nome === 'string') {
    console.log(nome.toUpperCase());
  } else {
    console.log(nome);
  }
});