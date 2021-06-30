function formatCEP(value) {
	return String(value)
		.replace(/\D/g, "")
		.slice(0, 8)
		.replace(/(\d{5})(\d)/, "$1-$2")
}

module.exports = {
	formatCEP
}

