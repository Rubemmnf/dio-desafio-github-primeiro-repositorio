function sintaxeOperadores (num1, num2){
    if (!num1 || !num2) return "Defina dois números";
    
    const iguais = num1 === num2;
    let saoOuNao = iguais ? '' : 'não ';

    const soma = num1 + num2;
    const menor10 = soma < 10;
    const menor20 = soma < 20;

    if(menor10 && menor20){
        return "Os números " + num1 + " e " + num2 + " " + saoOuNao + "são iguais. Sua soma é " + soma + " que é menor que 10 e menor que 20.";
    } else if(menor10 || menor20){
        return "Os números " + num1 + " e " + num2 + " " + saoOuNao + "são iguais. Sua soma é " + soma + " que é maior que 10 e menor que 20.";
    } else {
        return "Os números " + num1 + " e " + num2 + " " + saoOuNao + "são iguais. Sua soma é " + soma + " que é maior que 10 e maior que 20.";
    }
}

//Testes

console.log(sintaxeOperadores());
console.log(sintaxeOperadores(2,));
console.log(sintaxeOperadores(2,3));
console.log(sintaxeOperadores(5,7));
console.log(sintaxeOperadores(11,13));
console.log(sintaxeOperadores(3,3));
console.log(sintaxeOperadores(7,7));
console.log(sintaxeOperadores(13,13));