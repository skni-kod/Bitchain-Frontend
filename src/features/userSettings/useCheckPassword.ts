import { useMutation } from '@tanstack/react-query';
import { checkPassword as checkPasswordApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useCheckPassword() {
	const {
		mutate: checkPassword,
		isPending,
		data,
	} = useMutation({
		mutationFn: (password: string) => {
			return checkPasswordApi(password);
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error?.non_field_errors?.at(0));
		},
	});

	return { checkPassword, isPending, data };
}
