import { ReactNode } from 'react';

interface CardProps {
	title: string;
	element: ReactNode;
}

function SectionContainer({ title, element }: CardProps) {
	return (
		<div className='flex flex-col w-full'>
			<h2 className='text-center text-4xl'>
				{title}
				<span className='text-main text-5xl'>.</span>
			</h2>
			<div className='flex justify-center mt-12 lg:mt-20'>{element}</div>
		</div>
	);
}

export default SectionContainer;
