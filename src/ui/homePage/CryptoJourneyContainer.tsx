import { useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

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
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	return (
		<div
			className={`flex ${
				type === 'textOnLeft' ? 'flex-row' : 'flex-row-reverse'
			} gap-5 flex-wrap-reverse justify-center p-2 md600:justify-around overflow-x-hidden`}
		>
			<div
				className='flex flex-row items-center px-7 text-lg md600:w-1/2'
				ref={ref}
				style={{
					transform: inView
						? 'none'
						: `${
								type === 'textOnLeft'
									? 'translateX(-150px)'
									: 'translateX(150px)'
					}`,
					opacity: inView ? 1 : 0,
					transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
				}}
			>
				{children}
			</div>

			<div
				className='flex justify-center items-center lg:w-2/6 py-6'
				ref={ref}
				style={{
					transform: inView
						? 'none'
						: `${
								type === 'textOnLeft'
									? 'translateX(150px)'
									: 'translateX(-150px)'
					}`,
					opacity: inView ? 1 : 0,
					transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
				}}
			>
				<img
					className='w-[160px] drop-shadow-[0_5px_20px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_5px_15px_rgba(255,255,255,0.15)]'
					src={imageSrc}
					alt={imageAlt}
				/>
			</div>
		</div>
	);
}

export default CryptoJourneyContainer;
