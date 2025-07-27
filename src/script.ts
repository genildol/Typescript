function mostrarIdade(idade: number | string) {
  if (typeof idade === 'string') {
    console.log(idade.toUpperCase());
  } else {
    console.log(idade);
  }
}

mostrarIdade(20);
mostrarIdade('20');