import { useMutation } from '@tanstack/react-query';
import { updateAvatar as updateAvatarApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdateImage() {
	const {
		mutate: updateAvatar,
		isPending: isUpdatePending,
		data,
	} = useMutation({
		mutationFn: (variables: { image: File }) => {
			return updateAvatarApi(variables);
		},
		onSuccess: () => {
			toast.success('Upadated successfully');
		},
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error('' + Object?.values(error)[0]);
		},
	});

	return { data, updateAvatar, isUpdatePending };
}
