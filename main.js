//classe
class Carro {
     constructor(nome,ano){
this.nome = nome;
this.ano = ano;
     }
}

// Intaciando Objetos a classe 
let meuCarro1 = new carro('Ford', 2018);
let meuCarro2 = new carro('Corsa',2003);

//Imprimindo as informações
console.log(meuCarro1);
console.log(meuCarro1.nome);
console.log(meuCarro1.ano);

//Imprimindo as informações
console.log(meuCarro2);
console.log(meuCarro2.nome);
console.log(meuCarro2.ano);

// Nova classe com mais de um metodo
class NovoCarro{
   constructor(nome, ano){
    this.nome = nome;
    this.ano = ano;

   }

   IdadeCarro(ano){
       return ano - this.ano;
   }

}

//Buscando a Data atual 
let dataHoje =  new Date();
let ano = dataHoje.getFullYear();

let meuNovoCarro = new novoCarro('Corsa', 2003)

console.log(meuNovoCarro.IdadeCarro(ano));


console.clear();
// Criando nova Classe
class ClassePessoa{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
}

   getBirthYear(){
        return this.dob.getFullYear();

}
//getFullName(){
//return '${this.firstName} ${this.lastName}';

//}

//Outro  Forma de criar um metodo(com this ou nome de variavel)
//const getFullName = () => {
  //  return '${this.firsName}' $'{this.lastName}';
//};

}

// Instanciar um objeto Pessoa
let pessoal = new ClassePessoa('Irmão do', 'Jorel','2007-05-08');
let pessoa2 = new ClassePessoa('Pipoca','Animada','1970-06-07');

console.log(pessoal);

console.log(pessoal.dob.getFullYear());
console.log(pessoal.getBirthYear());
console.log(pessoal.getFullName());



