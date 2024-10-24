export function generateRandomString(length: number) {
	const getRandomChar = () => {
		const charSets = [
			[97, 122], // Lowercase letters (a-z)
			[97, 122], // Lowercase letters (a-z)
			[97, 122], // Lowercase letters (a-z)
			[48, 57], // Numbers (0-9)
			[65, 90] // Uppercase letters (A-Z)
		];

		// Select a random character set
		const charSet = charSets[Math.floor(Math.random() * charSets.length)];
		// Generate a random character code from the selected set
		const charCode = Math.floor(Math.random() * (charSet[1] - charSet[0] + 1)) + charSet[0];
		// Convert the character code to a character
		return String.fromCharCode(charCode);
	};

	let password = '';
	for (let i = 0; i < length; i++) {
		password += getRandomChar();
	}

	return password;
}
