import { ReactNode } from 'react';
import Footer from './Footer';

interface ContentContainerProps {
	children?: ReactNode;
}

function ContentContainer({ children }: ContentContainerProps) {
	return (
		<div className='grid grid-rows-[1fr_auto] h-full dark:text-white text-bgDark'>
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default ContentContainer;
