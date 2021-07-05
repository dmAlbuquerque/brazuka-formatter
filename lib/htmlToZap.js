/**
 * Esta função vai retornar o texto formatado de tags html para WhatsApp
 * 
 * 
 * @param {value} obrigatorio formata para WhatsApp
 *
 */
module.exports = (value) => {

	if (typeof value !== 'string') {
		return ('O parâmetro deve ser do tipo string')
	}

	//Remove espaços desnecessários e deixa apenas um espaço.
	var msgFormatada = value.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ")

	//Remove espaço extra das tags
	msgFormatada = msgFormatada.replace('<b> ', '<b>')
	msgFormatada = msgFormatada.replace(' </b>', '</b>')
	msgFormatada = msgFormatada.replace('<strong> ', '<strong>')
	msgFormatada = msgFormatada.replace(' </strong>', '</strong>')
	msgFormatada = msgFormatada.replace('<i> ', '<i>')
	msgFormatada = msgFormatada.replace(' </i>', '</i>')
	msgFormatada = msgFormatada.replace('<u> ', '<u>')
	msgFormatada = msgFormatada.replace(' </u>', '</u>')
	msgFormatada = msgFormatada.replace('<tt> ', '<tt>')
	msgFormatada = msgFormatada.replace(' </tt>', '</tt>')
	msgFormatada = msgFormatada.replace(' <br>', '<br>')
	msgFormatada = msgFormatada.replace(' </br>', '</br>')
	msgFormatada = msgFormatada.replace(' <br/>', '<br/>')

	//Formata para WhatsApp
	msgFormatada = msgFormatada.replace('<b>', '*')
	msgFormatada = msgFormatada.replace('</b>', '*')
	msgFormatada = msgFormatada.replace('<i>', '_')
	msgFormatada = msgFormatada.replace('</i>', '_')
	msgFormatada = msgFormatada.replace('<u>', '~')
	msgFormatada = msgFormatada.replace('</u>', '~')
	msgFormatada = msgFormatada.replace('<tt>', '')
	msgFormatada = msgFormatada.replace('</tt>', '')
	msgFormatada = msgFormatada.replace('<br>', '\n')
	msgFormatada = msgFormatada.replace('</br>', '\n')
	msgFormatada = msgFormatada.replace('<br/>', '\n')

	return msgFormatada
}