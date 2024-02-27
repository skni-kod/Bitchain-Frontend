import { deleteAccount as deleteAccountApi } from '../../services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export function useDeleteAccount() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { mutate: deleteAccount, isPending } = useMutation({
		mutationFn: (password: string) => {
			return deleteAccountApi(password);
		},
		onSuccess: () => {
			queryClient.removeQueries();
			localStorage.removeItem('accessToken');
			setTimeout(() => {
				location.reload();
			}, 100);
			navigate('/homepage');
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});

	return { deleteAccount, isPending };
}
