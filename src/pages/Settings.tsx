import ContentContainer from '../ui/ContentContainer';
import SettingsTitle from '../features/userSettings/SettingsTitle';
import SettingsTable from '../features/userSettings/SettingsTable';

export default function Settings() {
	return (
		<ContentContainer>
			<div className='flex mx-auto max-w-7xl flex-col h-full px-4 md600:px-10 md800:px-14 md600:mt-5 pt-8'>
				<SettingsTitle>Account Settings</SettingsTitle>
				<SettingsTable></SettingsTable>
			</div>
		</ContentContainer>
	);
}
