/**
 * Esta função vai localizar e substituir uma string de acordo com os parâmetros passados.
 * 
 * @param value - { string } obrigatorio Mensagem que deve ter partes substituidas
 * @param search - { string | [ ] } obrigatório String que deve ser localizada
 * @param replace - { string | [ ] } obrigatório String de substituição
 */
module.exports = (value, search, replace) => {

	if (typeof value === 'string') {
		if (typeof search != 'string' && typeof replace != 'string') {
			if (search.length == replace.length) {
				for (var i = 0; i < value.length; i++) {
					value = value.split(search[i]).join(replace[i])
				}
			} else {
				return "Os parâmetros 'search' e 'replace' devem ter a mesma quantidade de elementos."
			}
		} else {
			value = value.replace(search, replace)
		}
	}

	return value
}