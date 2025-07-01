function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["JavaScript", "HTML", "Python", "C", "C++"];
console.log(linguagnes[0]); // JavaScript
console.log(linguagnes[1]); // HTML
console.log(linguagnes[2]); // Python
console.log(linguagnes[3]); // C
console.log(linguagnes[4]); // C++

const lista = document.querySelector("#lista");
lista.textContent = lingugens[0];