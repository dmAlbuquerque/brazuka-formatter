/**
 * Esta função vai retornar o CPF no formato 123.456.789-09
 *
 * @example
 * 	formatCpf("1234567809")
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
		.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}