/**
 * Esta função vai retornar o RENAVAM no formato 4185.449852-6
 *
 * @example
 * 	formatRenavam("41854498526")
 *
 * @param {value} obrigatorio Tipo String
 *
 */
module.exports = (value) => {

	if (typeof value !== 'string') {
		return ('O parâmetro deve ser do tipo string')
	}

	if (value.length < 11) {
		return ('O parâmetro deve possuir 11 digitos')
	}

	return String(value)
		.replace(/\D/g, "")
		.slice(0, 11)
		.replace(/(\d{4})(\d{6})(\d{1})/, "$1.$2-$3")
}