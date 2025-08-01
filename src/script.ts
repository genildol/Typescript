type Opcoes = {
  width: number;
  heigth: number;
}

// function configurar(props: { width: number, heigth: number } | 'auto') {

// }
function configurar(props: Opcoes | 'auto') {

}

configurar({ width: 100, heigth: 200 });
configurar('auto');
// configurar('automatico');



/* TypeScript é um superconjunto do JavaScript que adiciona tipagem estática opcional e outros recursos avançados.
   - Ele é compilado para JavaScript puro, o que significa que pode ser executado
*/

// type VerdadeFalso = true | false;

// function temNome(nome: string): true | false {
//   if (nome !== 'genildo') {
//     return true;
//   } else {
//     return false;
//   }
// }


/*
// TypeScript permite a sobrecarga de tipos,
*/

// function mostrarTexto(
//   texto: string,
//   alinhamento: 'left' | 'center' | 'right'
// ) {
//   return `<p style="text-align: ${alinhamento}">${texto}</p>`;
// }

// mostrarTexto('Ola, mundo!', 'center');
// mostrarTexto('Ola, mundo!', 'left');
// mostrarTexto('Ola, mundo!', 'teste');





/* 
// TypeScript permite a sobrecarga de interfaces,

*/
// let idadeField = document.getElementById('idade');
let idadeField = document.getElementById('idade') as HTMLInputElement;
console.log(idadeField.value);