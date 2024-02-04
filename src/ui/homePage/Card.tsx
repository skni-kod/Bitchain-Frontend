import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProductCardProps {
	icon: ReactNode;
	title: string;
	children: string;
	link: string;
}

function Card({ icon, title, children, link }: ProductCardProps) {
	return (
		<div className='relative px-10 py-5 lg:w-1/4 flex flex-col gap-4 mx-5 justify-around'>
			<div className='absolute w-[0.5px] top-0 left-3 h-full bg-main'></div>
			<span className='text-5xl'>{icon}</span>
			<h3 className='text-3xl'>{title}</h3>
			<p>{children}</p>
			<NavLink to={link} className='flex flex-row items-center text-lg hover:text-main'>
				Learn more
				<span className='ml-2'>
					<FaExternalLinkAlt />
				</span>
			</NavLink>
		</div>
	);
}

export default Card;
