import SettingsTableRow from './SettingsTableRow';
import { useUser } from '../Authentication/useUser';
import { useState } from 'react';
import EditingPopUp from './EditingPopUp';

// interface User {
// 	email: string;
// 	full_name: string;
// 	nick_name: string;
// 	date_of_birth: string;
// 	pesel: string;
// 	image: string;
// }

function SettingsTable() {
	const [clickedModify, setClickedModify] = useState<string | null>(null);
	const { data } = useUser();

	return (
		<>
			<div className='flex flex-col border-slate-200 dark:border-stone-700 md600:border-[1px] rounded-lg px-2 md600:px-6 md800:px-10 py-10 mb-10'>
				<SettingsTableRow
					avatar={data?.image}
					setClickedModify={setClickedModify}
				>
					Avatar
				</SettingsTableRow>
				<SettingsTableRow
					content={data?.nick_name}
					setClickedModify={setClickedModify}
				>
					Nickname
				</SettingsTableRow>
				<SettingsTableRow
					content={data?.pesel}
					isProtected={true}
					modifiable={false}
				>
					Id
				</SettingsTableRow>
				<SettingsTableRow
					content={data?.email}
					setClickedModify={setClickedModify}
				>
					E-mail
				</SettingsTableRow>
				<SettingsTableRow
					content={'password'}
					isProtected={true}
					setClickedModify={setClickedModify}
				>
					Password
				</SettingsTableRow>
				<SettingsTableRow
					content={data?.full_name}
					setClickedModify={setClickedModify}
				>
					Full Name
				</SettingsTableRow>
				<SettingsTableRow content={data?.date_of_birth} modifiable={false}>
					Date of Birth
				</SettingsTableRow>
			</div>
			{clickedModify && (
				<EditingPopUp
					field={clickedModify}
					SetClickeModify={setClickedModify}
				></EditingPopUp>
			)}
		</>
	);
}

export default SettingsTable;
