/**
 * Esta função vai retornar o Processo Judicial no formato 0042022.68.2021.7.22.1520
 *
 * @example
 * 	formatProcessosJudiciais("00420226820217221520")
 *
 * @param {value} obrigatorio Tipo String
 *
 */
module.exports = (value) => {

	if (typeof value !== 'string') {
		return ('O parâmetro deve ser do tipo string')
	}

	if (value.length < 20) {
		return ('O parâmetro deve possuir 20 digitos')
	}

	return String(value)
		.replace(/\D/g, "")
		.slice(0, 20)
		.replace(/(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/, "$1.$2.$3.$4.$5.$6")
}