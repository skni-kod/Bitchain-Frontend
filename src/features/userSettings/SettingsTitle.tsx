import { ReactNode } from 'react';

interface settingsTitleProps {
	children: ReactNode;
}

function SettingsTitle({ children }: settingsTitleProps) {
	return (
		<div className='relative lg:ml-10 mb-8 md600:mb-16'>
			<div className='absolute w-1 h-full bg-main rounded-full'></div>
			<h2 className='text-xl md600:text-3xl px-4 '>{children}</h2>
		</div>
	);
}

export default SettingsTitle;
