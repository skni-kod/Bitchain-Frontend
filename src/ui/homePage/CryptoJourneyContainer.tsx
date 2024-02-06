import { ReactNode } from 'react';

interface ContainerProps {
	children: ReactNode;
	imageSrc: string;
	imageAlt: string;
	type: 'textOnLeft' | 'textOnRight';
}

function CryptoJourneyContainer({
	children,
	imageSrc,
	imageAlt,
	type,
}: ContainerProps) {
	return (
		<div
			className={`flex ${
				type === 'textOnLeft' ? 'flex-row' : 'flex-row-reverse'
			} gap-5 flex-wrap-reverse justify-center p-2 md600:justify-around`}
		>
			<div className='flex flex-row items-center px-7 text-lg md600:w-1/2'>
				{children}
			</div>

			<div className='flex justify-center items-center lg:w-2/6'>
				<img className='w-[160px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)]' src={imageSrc} alt={imageAlt} />
			</div>
		</div>
	);
}

export default CryptoJourneyContainer;
