import { useQueryClient } from '@tanstack/react-query';
import SettingsTableRow from './SettingsTableRow';

interface User {
	email: string;
	full_name: string;
	nick_name: string;
	date_of_birth: string;
	pesel: string;
	image: string;
}

function SettingsTable() {
	const queryClient = useQueryClient();
	const user: User | undefined = queryClient.getQueryData(['user']);
	return (
		<div className='flex flex-col border-slate-200 dark:border-stone-700 md600:border-[1px] rounded-lg px-2 md600:px-6 md800:px-10 py-10 mb-10'>
			<SettingsTableRow avatar={user?.image}>Avatar</SettingsTableRow>
			<SettingsTableRow content={user?.nick_name}>Nickname</SettingsTableRow>
			<SettingsTableRow
				content={user?.pesel}
				isProtected={true}
				modifiable={false}
			>
				Id
			</SettingsTableRow>
			<SettingsTableRow content={user?.email}>E-mail</SettingsTableRow>
			<SettingsTableRow content={'password'} isProtected={true}>
				Password
			</SettingsTableRow>
			<SettingsTableRow content={user?.full_name}>Full Name</SettingsTableRow>
			<SettingsTableRow content={user?.date_of_birth} modifiable={false}>
				Date of Birth
			</SettingsTableRow>
		</div>
	);
}

export default SettingsTable;
