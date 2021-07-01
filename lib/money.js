/**
 * Esta função vai retornar o Dinheiro no padrão Brasileiro, com ou sem símbolo 'R$'
 *
 * @example1 - Com Simbolo R$
 * 	formatMoney(1250.54, true) //R$ 1.250,54
 * 
 * @example2 - Sem Simbolo R$
 * 	formatMoney(1250.54) // 1.250,54
 *
 * @param {value} obrigatorio valor a ser formatado - Tipo Int ou Double
 * @param {symbol} opcional   se o retorno vai possuir o símbolo R$ ou não - True or False
 *
 */
module.exports = (value, symbol) => {

    if (typeof value !== 'number') {
        return ('O parâmetro deve ser do tipo int, float ou double!')
    }


    symbol = (symbol == undefined || symbol == false) ? false : true;

    if (symbol == true) {
        //com R$
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    } else {
        //sem R$
        return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    }
}