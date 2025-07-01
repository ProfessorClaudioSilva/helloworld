function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["JavaScript", "HTML", "Python", "C", "C++"];
console.log(linguagnes[0]);
console.log(linguagnes[1]);
console.log(linguagnes[2]);
console.log(linguagnes[3]);
console.log(linguagnes[4]);