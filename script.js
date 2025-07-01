function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["JavaScript", "HTML", "Python", "C", "C++"];
console.log(linguagens[0]); // JavaScript
console.log(linguagens[1]); // HTML
console.log(linguagens[2]); // Python
console.log(linguagens[3]); // C
console.log(linguagens[4]); // C++

const lista = document.querySelector("#lista");
lista.textContent = linguagens[0];