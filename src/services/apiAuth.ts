import toast from 'react-hot-toast';

const API_KEY = 'http://localhost:8000';

interface LoginProps {
	email: string;
	password: string;
}

interface registerProps {
	email: string;
	password: string;
	fullName: string;
	nickname: string;
	dateOfBirth: string;
	pesel: string;
}

interface updateUserProps {
	fieldToUpdate: string;
	valueToUpdate: string;
	password?: string;
}

interface updateAvatarProps {
	image: File;
}

export async function getUser() {
	const token = localStorage.getItem('accessToken');
	if (!token) {
		return null;
	}
	const response = await fetch(API_KEY + '/api/user/me/', {
		method: 'GET',
		headers: {
			Authorization: `Token ${token}`,
			'Content-Type': 'application/json',
		},
	});
	const imgResponse = await fetch(API_KEY + '/api/user/me/image', {
		method: 'GET',
		headers: {
			Authorization: `Token ${token}`,
			'Content-Type': 'application/json',
		},
	});

	if (response.ok && imgResponse.ok) {
		const data = await response.json();
		const imgData = await imgResponse.json();
		const image = API_KEY + imgData.image;
		return { ...data, image };
	} else {
		throw new Error(`Get user error: ${response.status}`);
	}
}

export async function deleteAccount(password: string) {
	const data = await checkPassword(password);
	if (!data.password_maches) {
		throw new Error('Invalid password');
	}

	const token = localStorage.getItem('accessToken');
	if (!token) {
		return null;
	}
	const response = await fetch(API_KEY + '/api/user/me/', {
		method: 'DELETE',
		headers: {
			Authorization: `Token ${token}`,
		},
	});

	if (response.ok) {
		return null;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function checkPassword(password: string) {
	const token = localStorage.getItem('accessToken');
	if (!token) {
		return null;
	}
	const response = await fetch(API_KEY + '/api/user/me/check-password/', {
		method: 'POST',
		headers: {
			Authorization: `Token ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			password: password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function updateUser({
	fieldToUpdate,
	valueToUpdate,
	password,
}: updateUserProps) {
	if (fieldToUpdate === 'password' && password) {
		const data = await checkPassword(password);
		if (!data.password_maches) {
			toast.error('Invalid password');
			throw new Error('Invalid password');
		}
	}
	const token = localStorage.getItem('accessToken');
	if (!token) {
		return null;
	}

	const response = await fetch(API_KEY + '/api/user/me/', {
		method: 'PATCH',
		headers: {
			Authorization: `Token ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			[fieldToUpdate]: valueToUpdate,
		}),
	});
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function updateAvatar({ image }: updateAvatarProps) {
	const token = localStorage.getItem('accessToken');
	if (!token) {
		return null;
	}
	const formData = new FormData();
	formData.append('image', image);

	const response = await fetch(API_KEY + '/api/user/me/image/', {
		method: 'PATCH',
		headers: {
			Authorization: `Token ${token}`,
		},
		body: formData,
	});
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function login({ email, password }: LoginProps): Promise<void> {
	const response = await fetch(API_KEY + '/api/user/token/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	});
	if (response.ok) {
		const data = await response.json();
		localStorage.setItem('accessToken', data.token);
		const userData = getUser();
		return userData;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function register({
	email,
	password,
	fullName,
	nickname,
	dateOfBirth,
	pesel,
}: registerProps): Promise<void> {
	const response = await fetch(API_KEY + '/api/user/create/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email,
			password: password,
			full_name: fullName,
			nick_name: nickname,
			date_of_birth: dateOfBirth,
			pesel: pesel,
		}),
	});
	if (response.ok) {
		const userData = login({ email, password });
		return userData;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function addFavoriteCrypto(favorites: string[]) {
	const token = localStorage.getItem('accessToken');
	if (!token) {
		toast.error('Log in to your accout to add favorite crypto');
		return null;
	}
	const response = await fetch(
		API_KEY + '/api/user/me/favorite-cryptocurrency/',
		{
			method: 'PUT',
			headers: {
				Authorization: `Token ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				favorite_crypto_symbol: favorites,
			}),
		}
	);
	if (response.ok) {
		const data = await response.json();
		console.log(data);
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}

export async function getFavoriteCrypto() {
	const token = localStorage.getItem('accessToken');
	if (!token) {
		return null;
	}
	const response = await fetch(
		API_KEY + '/api/user/me/favorite-cryptocurrency/',
		{
			method: 'GET',
			headers: {
				Authorization: `Token ${token}`,
				'Content-Type': 'application/json',
			},
		}
	);
	if (response.ok) {
		const data = await response.json();
		return data;
	} else {
		const bodyText = await response.text();
		throw new Error(`${bodyText}`);
	}
}
