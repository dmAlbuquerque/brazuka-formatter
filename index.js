/**
 * Esta função vai retornar o CEP no formato 12345-678
 * 
 * @example
 * 	formatCEP(12345678) ou formatCEP("12345678")
 * 
 * @param {value} obrigatorio Tipo Int ou String
 * 
 */
function formatCEP(value) {
	return String(value)
		.replace(/\D/g, "")
		.slice(0, 8)
		.replace(/(\d{5})(\d)/, "$1-$2")
}

/**
 * Esta função vai retornar o Dinheiro no padrão Brasileiro, com ou sem símbolo
 *
 * @example1 - Com Simbolo R$
 * 	formatMoney(1250.54, true) //R$ 1.250,54
 * 
 * @example2 - Sem Simbolo R$
 * ou formatMoney(1250.54) // 1.250,54
 *
 * @param {value} obrigatorio valor a ser formatado - Tipo Int ou Double
 * @param {symbol} opcional   se o retorno vai possuir o símbolo R$ ou não - True or False
 *
 */
function formatMoney(value, symbol) {

	symbol = (symbol == undefined || symbol == false) ? false : true;
	console.log("O simbol tem o valor de --> " + symbol);

	if (symbol == true) {
		//com R$
		return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
	} else {
		//sem R$
		return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
	}
}

console.log(formatMoney(489451681351))

module.exports = {
	formatCEP,
	formatMoney
}

