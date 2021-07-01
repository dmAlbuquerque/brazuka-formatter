/**
 * Esta função vai retornar a CNS - Carteira Nacional de Saúde no formato 119 0224 4902 1144
 *
 * @example
 * 	formatCns("119022449021144")
 *
 * @param {value} obrigatorio Tipo String
 *
 */
module.exports = (value) => {

	if (typeof value !== 'string') {
		return ('O parâmetro deve ser do tipo string')
	}

	if (value.length < 15) {
		return ('O parâmetro deve possuir 15 digitos')
	}

	return String(value)
		.replace(/\D/g, "")
		.slice(0, 15)
		.replace(/(\d{3})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4")
}