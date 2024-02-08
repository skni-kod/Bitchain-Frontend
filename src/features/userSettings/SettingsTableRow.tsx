import Button from '../../ui/Button';

interface SettingsTableRowProps {
	children: string;
	isProtected?: boolean;
	avatar?: string;
	content?: string;
	modifiable?: boolean;
	setClickedModify?: (clickedModify: string) => void;
}

function SettingsTableRow({
	children,
	isProtected,
	avatar,
	content,
	modifiable = true,
	setClickedModify,
}: SettingsTableRowProps) {
	return (
		<div className='flex flex-row flex-wrap gap-2 justify-between items-center py-5 px-2  md600:px-5 border-b-[1px] border-slate-200  dark:border-stone-700 last:border-b-0'>
			<p>{children}</p>
			<div className='flex flex-col md600:flex-row md:400 justify-between gap-2 items-center md400:min-w-[250px] md600:min-w-[300px]  w-full md400:w-auto min-h-[52px]'>
				{avatar ? (
					<img
						src={avatar}
						alt='avatar'
						className='h-[52px] w-[52px] rounded-full border-[1px] border-slate-200 dark:bg-stone-700'
					/>
				) : (
					<p className='flex items-center'>
						{isProtected ? `******` : content}
					</p>
				)}
				{modifiable && (
					<Button
						type='button'
						to='naprawictrzebaprzycisk'
						onClick={() => {
							setClickedModify && setClickedModify(children);
						}}
					>
						Modify
					</Button>
				)}
			</div>
		</div>
	);
}

export default SettingsTableRow;
