import { useQuery } from '@tanstack/react-query';
import { getUser as getUserApi } from '../../services/apiAuth';

export function useUser() {
	const { data, isPending } = useQuery({
		queryFn: getUserApi,
		queryKey: ['user'],
	});

	const userAuthenticated = data !== null;

	return { data, isPending, userAuthenticated };
}
