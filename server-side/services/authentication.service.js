exports.decodePassword = (password => {
	let decodedPass = '';
	for (let i = 0; i < password.length; i++) {
		const newCode = (password.charCodeAt(i) + 3 * 4);
		decodedPass += String.fromCharCode(newCode);
	}
	return decodedPass;
});

exports.encodePassword = (password => {
	let encodedPass = '';
	for (let i = 0; i < password.length; i++) {
		const newCode = (password.charCodeAt(i) - 3 * 4);
		encodedPass += String.fromCharCode(newCode);
	};
	return encodedPass;
});

exports.verifyPassword = ((userPass, systemPass) => {
	const encodedPass = this.encodePassword(systemPass);
	return userPass === encodedPass;
});