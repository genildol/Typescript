<<<<<<< HEAD
// var numero1 = document.getElementById('numero1');
// var numero2 = document.getElementById('numero2');
// var botao = document.getElementById('calcular');
// var res = document.getElementById('resultado');
// function calcular(n1, n2) {
//     return n1 + n2;
// }
// botao.addEventListener('click', function () {
//     res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
// });
=======
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let botao = document.getElementById("calcular");
let res = document.getElementById("resultado");

function calcular(n1, n2) {
    return n1 + n2;

}

botao.addEventListener("click", function () {
    res.innerHTML = calcular(numero1.value, numero2.value);

});
>>>>>>> 2daf27adfa0f5f93b57c7d52b57b874280e35d58
