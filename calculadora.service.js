function CalculadoraService(){

    const SOMA = '+';
    const SUBTRACAO = '-';
    const DIVISAO = '/';
    const MULTIPLICACAO = '*';

    function calcular(numero1, numero2, operacao) {

        let resultado;

        // eslint-disable-next-line default-case
        switch(operacao) {
            case SOMA: 
                resultado = numero1 + numero2;
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case DIVISAO:
                resultado = numero1 / numero2;
                break; 
            case MULTIPLICACAO:
                resultado = numero1 * numero2;
                break; 
            default:
                resultado = 0;     
        }

        return resultado;
    }

    function concatenarNumero(numAtual, numConcat){
        // caso contenha apenas '0' ou null, renicia o valor
        if (numAtual ===  '0' || numAtual === null){
            numAtual = '';
        }

        // primeiro dígito for '.', concatena '0' antes de ponto
        if (numConcat === '.' && numAtual === ''){
            return '0.';
        }

        // caso '.' digitado já contenha um ponto '.', apenas retornar
        if (numConcat === '.' && numAtual.indexOf('.') > -1){
            return numAtual;
        }

        return numAtual + numConcat;
    }

    return [
        calcular,
        concatenarNumero,
        SOMA,
        SUBTRACAO,
        DIVISAO,
        MULTIPLICACAO
    ];
}

export default CalculadoraService;