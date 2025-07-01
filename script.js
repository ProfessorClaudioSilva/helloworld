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
lista.textContent = linguagens[2];

let alunos = [“Antônio”, “Eduardo”, “Julia”, “João”, “Maria”];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(alunos[4]);

const alunos = document.querySelector("#lista vazia");
alunos.textContent = alunos[0];