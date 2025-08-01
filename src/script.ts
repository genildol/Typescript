// type User = {
//   nome: string;
//   idade: number;
// };

interface User {
  nome: string;
  idade: number;
}
interface User {
  email: string;
}

function resumo(usuario: User) {
  return 'Ola, ${usuario.nome}, voce tem ${usuario.idade} anos.';
}
resumo({
  nome: 'Genildo',
  idade: 90,
  email: 'gsmicros@gsmicros.com'
});