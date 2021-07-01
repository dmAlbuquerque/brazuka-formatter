/**
 * Esta função vai retornar o Telefone no formato (88) 9 1234-4321
 *
 * @example
 * 	formatTelefone("88912344321")
 *
 * @param {value} obrigatorio Tipo String
 *
 */
module.exports = (value) => {
	return String(value)
		.replace(/\D/g, "")
		.slice(0, 11)
		.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4")
}