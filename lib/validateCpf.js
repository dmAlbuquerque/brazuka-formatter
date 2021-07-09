/**
 * Esta função vai verificar se o CPF digitado é válido.
 *
 * @example
 * 	validateCpf("95018158034") or validateCpf("950.181.580-34")
 *
 * @param {value} obrigatorio Tipo String
 *
 */
module.exports = (value) => {

	if (typeof value !== 'string') {
		return ('O parâmetro deve ser do tipo string')
	}

	value = value.replace(/[^\d]+/g, "");

    if (value.length < 11) {
    	return ("O parâmetro deve possuir 8 digitos")
    }

    if (!!value.match(/(\d)\1{10}/)) {
    	return ("O parâmetro não pode possuir uma sequência de números repetidos")
    }

	value = value.split("")

	const validator = value
    .filter((digit, index, array) => index >= array.length - 2 && digit)
    .map((el) => +el)

	const toValidate = (pop) =>
	value
    .filter((digit, index, array) => index < array.length - pop && digit)
    .map((el) => +el)

    const rest = (count, pop) =>
    ((toValidate(pop).reduce((soma, el, i) => soma + el * (count - i), 0) *
      10) %
      11) %
    10

    return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])
}
