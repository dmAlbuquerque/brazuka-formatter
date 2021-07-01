/**
 * Esta função vai retornar o CEP no formato 12345-678
 * 
 * @example
 * 	formatCep(12345678) ou formatCEP("12345678")
 * 
 * @param {value} obrigatorio Tipo Int ou String
 * 
 */
module.exports = (value) => {
	return String(value)
		.replace(/\D/g, "")
		.slice(0, 8)
		.replace(/(\d{5})(\d)/, "$1-$2")
}