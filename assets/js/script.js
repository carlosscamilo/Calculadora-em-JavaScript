function calculadora() {

    let OPERACAO = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtracao (-)\n 3 - multiplicação (*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação'));
    console.log(OPERACAO);

    if (!OPERACAO || OPERACAO >= 7 || OPERACAO <= 0) {
        alert('Opção digitada é inválida');
        calculadora();
    }
    else {

        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperacao();
        }

        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperacao();
        }

        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperacao();
        }

        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperacao();
        }

        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é = ${resultado}`);
            novaOperacao();
        }

        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é = ${resultado}`);
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = Number(prompt('Deseja realizar uma nova operação? \n 1 - Sim \n 2 - Não'));
            if (opcao == 1) {
                calculadora();
            }
            else if (opcao == 2) {
                alert('Até mais');
            }
            else {
                alert('Informe uma opcão válida');
                novaOperacao();
            }

        }

        if (OPERACAO == 1) {
            soma();
        }

        else if (OPERACAO == 2) {
            subtracao();
        }
        else if (OPERACAO == 3) {
            multiplicacao();
        }
        else if (OPERACAO == 4) {

            divisaoReal();
        }
        else if (OPERACAO == 5) {
            divisaoInteira();
        }
        else if (OPERACAO == 6) {
            potenciacao();
        }
    }
}
calculadora();