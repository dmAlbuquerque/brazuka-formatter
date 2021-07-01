/**
 * Esta função vai retornar o PIS/PASEP no formato 123.23129.49-1
 *
 * @example
 * 	formatPisPasep("12323129491")
 *
 * @param {value} obrigatorio Tipo String
 *
 */
module.exports = (value) => {

	if (typeof value !== 'string') {
		return ('O parâmetro deve ser do tipo string')
	}

	if (value.length < 11) {
		return ('O parâmetro deve possuir 8 digitos')
	}

	return String(value)
		.replace(/\D/g, "")
		.slice(0, 11)
		.replace(/(\d{3})(\d{5})(\d{2})(\d{1})/, "$1.$2.$3-$4")
}