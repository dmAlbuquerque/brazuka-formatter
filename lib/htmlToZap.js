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

	//Remove espaços extras das tags
	msgFormatada = msgFormatada.split('<b> ').join('<b>')
	msgFormatada = msgFormatada.split(' </b>').join('</b>')
	msgFormatada = msgFormatada.split('<strong> ').join('<strong>')
	msgFormatada = msgFormatada.split(' </strong>').join('</strong>')
	msgFormatada = msgFormatada.split('<i> ').join('<i>')
	msgFormatada = msgFormatada.split(' </i>').join('</i>')
	msgFormatada = msgFormatada.split('<u> ').join('<u>')
	msgFormatada = msgFormatada.split(' </u>').join('</u>')
	msgFormatada = msgFormatada.split('<tt> ').join('<tt>')
	msgFormatada = msgFormatada.split(' </tt>').join('</tt>')
	msgFormatada = msgFormatada.split(' <br>').join('<br>')
	msgFormatada = msgFormatada.split(' </br>').join('</br>')

	msgFormatada = msgFormatada.split('<b>').join('*')
	msgFormatada = msgFormatada.split('</b>').join('*')
	msgFormatada = msgFormatada.split('<strong>').join('*')
	msgFormatada = msgFormatada.split('</strong>').join('*')
	msgFormatada = msgFormatada.split('<i>').join('_')
	msgFormatada = msgFormatada.split('</i>').join('_')
	msgFormatada = msgFormatada.split('<u>').join('~')
	msgFormatada = msgFormatada.split('</u>').join('~')
	msgFormatada = msgFormatada.split('<tt>').join('```')
	msgFormatada = msgFormatada.split('</tt>').join('```')
	msgFormatada = msgFormatada.split('<br>').join('\n')
	msgFormatada = msgFormatada.split('</br>').join('\n')

	return msgFormatada
}