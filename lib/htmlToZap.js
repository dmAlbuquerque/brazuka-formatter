//var bRegex = /<(?:b|strong)>([\s\S]*?)<\/\w*>/gim
//var iRegex = /<(?:i|em)>([\s\S]*?)<\/\w*>/gim
var bRegex = /<b>([\s\S]*?)<\/b>/gim
var sRegex = /<strong>([\s\S]*?)<\/strong>/gim
var iRegex = /<i>([\s\S]*?)<\/i>/gim
var uRegex = /<u>([\s\S]*?)<\/u>/gim
var ttRegex = /<tt>([\s\S]*?)<\/tt>/gim
var brRegex = /<br>([\s\S]*?)<\/br>/gim

/**
 * @description executes a regex to replace matched text with
 * selected group with optional pre and postfix
 * @method makeRegex
 * @param  {String}  regex  [description]
 * @param  {String}  doc    [description]
 * @param  {String}  before [description]
 * @param  {String}  after  [description]
 * @return {String}         [description]
 */
function makeRegex(regex, doc, before, after, replaceFn) {
	var matches = [];
	var newDoc = doc;
	var replaceString;
	while (matches = regex.exec(doc)) {
		if (matches && matches[1]) {
			replaceString = before || '';
			var replaceText = matches[1].trim()
			if (replaceFn && typeof (replaceFn) === 'function') {
				replaceText = replaceFn(matches)
			}
			replaceString += replaceText + "\n";
			replaceString += after || '';
			newDoc = newDoc.replace(matches[0], replaceString);
		}
	}
	return newDoc
}

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

	console.log("msgFormatada --> " + msgFormatada)


	return msgFormatada
}