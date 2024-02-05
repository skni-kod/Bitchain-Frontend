import { ReactNode } from 'react';

interface CardProps {
	title: string;
	element: ReactNode;
	isBlack?: boolean;
}

function SectionContainer({ title, element, isBlack }: CardProps) {
	return (
		<div
			className={`flex max-w-7xl mx-auto flex-col w-full lg:px-10 ${
				isBlack && 'text-white pb-8'
			}`}
		>
			<h2 className='text-center text-4xl px-4'>
				{title}
				<span className='text-main text-5xl'>.</span>
			</h2>
			<div className='flex justify-center mt-12 lg:mt-20'>{element}</div>
		</div>
	);
}

export default SectionContainer;
