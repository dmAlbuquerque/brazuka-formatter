/**
 * Esta função vai retornar o CNPJ no formato 12.345.678/0001-09
 *
 * @example
 * 	formatCnpj("12345678000109")
 *
 * @param {value} obrigatorio Tipo String
 *
 */
module.exports = (value) => {
	return String(value)
		.replace(/\D/g, "")
		.slice(0, 14)
		.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
}