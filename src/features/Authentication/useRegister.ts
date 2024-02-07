import { useMutation, useQueryClient } from '@tanstack/react-query';
import { register as registerApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useRegister() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate: register, isPending: isRegisterPending } = useMutation({
		mutationFn: (variables: {
			email: string;
			password: string;
			fullName: string;
			nickname: string;
			dateOfBirth: string;
			pesel: string;
		}) => {
			return registerApi(variables);
		},
		onSuccess: (data) => {
			toast.success('Logged successfully');
			queryClient.setQueryData(['user'], data);
			navigate('/homepage');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error('' + Object?.values(error)[0]);
		},
	});

	return { register, isRegisterPending};
}
