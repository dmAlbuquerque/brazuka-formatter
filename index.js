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
 * @example 1 - Com Simbolo R$
 * 	formatMoney(1250.54, true) //R$ 1.250,54
 * 
 * @example 2 - Sem Simbolo R$
 * 	formatMoney(1250.54) // 1.250,54
 *
 * @param {value} obrigatorio valor a ser formatado - Tipo Int ou Double
 * @param {symbol} opcional   se o retorno vai possuir o símbolo R$ ou não - True or False
 *
 */
function formatMoney(value, symbol) {

	symbol = (symbol == undefined || symbol == false) ? false : true;

	if (symbol == true) {
		//com R$
		return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
	} else {
		//sem R$
		return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
	}
}

/**
 * Esta função vai retornar o CPF no formato 123.456.789-09
 *
 * @example
 * 	formatCPF("1234567809")
 *
 * @param {value} obrigatorio Tipo String
 *
 */
function formatCPF(value) {
	return String(value)
		.replace(/\D/g, "")
		.slice(0, 11)
		.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

/**
 * Esta função vai retornar o CNPJ no formato 12.345.678/0001-09
 *
 * @example
 * 	formatCNPJ("12345678000109")
 *
 * @param {value} obrigatorio Tipo String
 *
 */
function formatCNPJ(value) {
	return String(value)
		.replace(/\D/g, "")
		.slice(0, 14)
		.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
}

module.exports = {
	formatMoney,
	formatCEP,
	formatCPF,
	formatCNPJ,
}

