export function validateAge(age: Date) {
	const currentDate = new Date();
	const userDate = new Date(age);
	const userAge = currentDate.getFullYear() - userDate.getFullYear();

	if (userAge > 18) return true;
	if (userAge === 18) {
		if (userDate.getMonth() >= currentDate.getMonth()) {
			if (userDate.getMonth() === currentDate.getMonth()) {
				if (userDate.getDate() > currentDate.getDate()) {
					return `You are too young, come back in ${
						userDate.getDate() - currentDate.getDate()
					} days.`;
				} else return true;
			}
			return `You are too young, come back in ${
				userDate.getMonth() - currentDate.getMonth()
			} months.`;
		}
		return true;
	}
	if (userAge < 18 && userAge > 0)
		return `You are too young, come back in ${
			18 - (currentDate.getFullYear() - userDate.getFullYear())
		} years.`;
	if (userAge === 0) {
		if (userDate.getMonth() < currentDate.getMonth())
			return `You are too young, come back in ${
				18 - (currentDate.getFullYear() - userDate.getFullYear())
			} years.`;
		if (
			userDate.getMonth() === currentDate.getMonth() &&
			userDate.getDate() <= currentDate.getDate()
		)
			return `You are too young, come back in ${
				18 - (currentDate.getFullYear() - userDate.getFullYear())
			} years.`;
	}
	return `You are from the future`;
}

export function validatePassword(password: string) {
	const passwordRegex =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!passwordRegex.test(password))
		return 'Incorrect password (min. 8 characters, at least 1 uppercase and lowercase letter, 1 number, 1 special character)';
	else return true;
}

export function validateRepeatPassword(password: string, repeatPassword: string) {
	if (password !== repeatPassword) return "Passwords don't match";
	else return true;
}

export function validateEmail(email: string) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) return 'Incorrect e-mail';
	else return true;
}

export function validateId(id: string) {
    const idRegex = /^\d{11,11}$/;
	if (!idRegex.test(id)) return 'Incorrect ID (min. 11 numbers)';
	else return true;
}
