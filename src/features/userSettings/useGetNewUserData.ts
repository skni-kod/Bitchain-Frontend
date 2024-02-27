import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getUser as getUserApi } from '../../services/apiAuth';

export function useGetNewUserData() {
	const queryClient = useQueryClient();

	const { mutate: getUser } = useMutation({
		mutationFn: () => {
			return getUserApi();
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});

	return { getUser };
}
