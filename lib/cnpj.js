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

	if (typeof value !== 'string') {
		return ('O parâmetro deve ser do tipo string')
	}

	if (value.length < 14) {
		return ('O parâmetro deve possuir 8 digitos')
	}

	return String(value)
		.replace(/\D/g, "")
		.slice(0, 14)
		.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
}