function menu() {
    var escolha_menu = parseInt(prompt("Olá esse é o menu da aplicação, escolha um número; 1. tarefa || 2. tarefa || 3. tarefa || 4. tarefa || 5.tarefa || 6. tarefa"));

    switch (escolha_menu) {
        case 1:
            CalcularIdadePet();
            break;
        case 2:
            CalcularIdadePet2();
            break;
        case 3:
            CalcularMeuLanche();
            break;
        case 4:
            calcularCircunferencia();
            break;
        case 5:
            calcularArea();
            break;
        case 6:
            convertCelsiusFahrenheit();
            break;
        default:
           erro();
            break;
    }
}

// Primeira questão

function CalcularIdadePet () {
    for(i = 0; i < 3 ; i++) {
    var pet = parseInt(prompt("Qual a idade do seu cachorro?"));
    if(pet > 0 && pet <= 2) {
        var conversao = pet * 10.5;
        console.log(conversao);
        alert(`Seu pet tem ${conversao} anos em anos humanos!`); 
    }else if (pet > 2) {
        var result = alert(`Seu pet tem ${((pet - 2) * (5.7) + (21))} anos em anos humanos!`);
        console.log(result);
    } else {
        alert("Não consigo fazer a conta desse valor!");
    }
} menu();}

// Segunda questão

function CalcularIdadePet2 () {
    const meus_pets = [];
    meus_pets.push(["baleia", 30]);
    console.log(meus_pets[0][0]);
    meus_pets.push(["cavalo", "6,5"]);
    console.log(meus_pets[[1]]);
    meus_pets.push(["gatos", "15"]);
    console.log(meus_pets[[2]]);
    console.log(meus_pets);

    var g = 0;
    console.log(meus_pets[g[0]]);
    for(i = 0; i < 3; i++) {
        var name_pet = prompt("Qual o nome do seu pet?");       
        var especie_pet = parseInt(prompt("Qual a espécie do seu pet?"));               
        var idade_do_pet = prompt("Quantos anos tem o seu pet?");
        if(idade_do_pet > 0 && idade_do_pet <= 2) {
            var conversao = idade_do_pet * 10.5;
            console.log(conversao);
            alert(`${name_pet} tem ${conversao} anos em anos de verdade! Um(a) ${meus_pets[g][0]} tem uma relação de ${meus_pets[g][1]} anos para cada 1 ano humano.`); 
        }else if (idade_do_pet > 2) {
            var result = alert(`${name_pet} tem ${((idade_do_pet - 2) * (5.7) + (21))} anos em anos de verdade! Um(a) ${meus_pets[g][0]} tem uma relação de ${meus_pets[g][1]} anos para cada 1 ano humano.`);
            
        } else {
            alert("Não consigo fazer a conta desse valor!");
        }        
        console.log(meus_pets);
        g++;
    } menu();
}

function CalcularMeuLanche () {
    var g = 0;
    const qual_sua_idade = parseInt(prompt("Quantos anos você tem agora?"));
    const idade_calculo = parseInt(prompt("Até que idade eu devo fazer o calculo?"));
    const idade = (idade_calculo - qual_sua_idade);
    for(i = 0; i <3; i++) {
        var lanches = parseInt(prompt("Quantos lanches você vai comer por dia?"));
        var conta = (idade * 365) * lanches;
        console.log(conta);
        alert(`Você precisará de ${parseFloat(conta)} para durar até os ${idade_calculo} anos.`)
        g++;
    }
}

function calcularCircunferencia () {
    var gg = 0;
    for(gg ; gg < 3; gg++) {
        var pi = 3.14;
        var raio = parseFloat(prompt("Qual o valor do raio?"));
        alert(`A circunferência é ${(2*pi)* raio}`);
    }
    menu();
}

function calcularArea () {
    var jj = 0;
    for(jj ; jj < 3; jj++) {
        var pi = 3.14;
        var raio = parseFloat(prompt("Qual o valor do raio?"));
        alert(`A área do círculo é de ${(Math.pow(raio, 2)) * pi} cm${"\262"}.`);
    }
    menu();
}

function convertCelsiusFahrenheit () {
    var celsius = parseFloat(prompt("Qual a temperatura em Celsius?"));
    alert(`${celsius}${"\260"}C é igual a ${(celsius * 1.8) + 32}${"\260"}F.`);
    convertFahrenheitCelsius();
}
function convertFahrenheitCelsius () {
    var fahrenheit = parseFloat(prompt("Qual a temperatura em Fahrenheit?"));
    alert(`${fahrenheit}${"\260"}F é igual a ${(fahrenheit - 32) /1.8}${"\260"}C.`);
    menu();
}

function erro () {
    alert("Essa não é uma opção, tente novamente!");
    menu();
}
menu();

