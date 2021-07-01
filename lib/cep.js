/**
 * Esta função vai retornar o CEP no formato 12345-678
 * 
 * @example
 * 	formatCep(12345678) ou formatCEP("12345678")
 * 
 * @param {value} obrigatorio Cep a ser formatado
 *
 */
module.exports = (value) => {

	if (typeof value !== 'string') {
		return ('O parâmetro deve ser do tipo string')
	}

	if (value.length < 8) {
		return ('O parâmetro deve possuir 8 digitos')
	}

	return String(value)
		.replace(/\D/g, "")
		.slice(0, 8)
		.replace(/(\d{5})(\d)/, "$1-$2")
}