/**
 * Esta função vai retornar a Inscrição Estadual no formato 119.022.490.114
 *
 * @example
 * 	formatInscricaoEstadual("119022490114")
 *
 * @param {value} obrigatorio Tipo String
 *
 */
module.exports = (value) => {

	if (typeof value !== 'string') {
		return ('O parâmetro deve ser do tipo string')
	}

	if (value.length < 12) {
		return ('O parâmetro deve possuir 12 digitos')
	}

	return String(value)
		.replace(/\D/g, "")
		.slice(0, 12)
		.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, "$1.$2.$3.$4")
}