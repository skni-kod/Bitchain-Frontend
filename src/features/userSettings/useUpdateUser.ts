import { useMutation } from '@tanstack/react-query';
import { updateUser as updateUserApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdateUser() {
	const {
		mutate: updateUser,
		isPending: isUpdatePending,
		data,
	} = useMutation({
		mutationFn: (variables: {
			fieldToUpdate: string;
			valueToUpdate: string;
			password?: string;
		}) => {
			return updateUserApi(variables);
		},
		onSuccess: () => {
			toast.success('Upadated successfully');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error('' + Object?.values(error)[0]);
		},
	});

	return { data, updateUser, isUpdatePending };
}
