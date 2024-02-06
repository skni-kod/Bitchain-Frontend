import { ReactNode, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useInView, motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProductCardProps {
	icon: ReactNode;
	title: string;
	children: string;
	link: string;
	delay?: number;
}

const Variants = {
	isInView: { x: 0, opacity: 1 },
	notInView: { x: 200, opacity: 0 },
};

function Card({ icon, title, children, link, delay = 0 }: ProductCardProps) {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<motion.div
			ref={ref}
			variants={Variants}
			animate={isInView ? 'isInView' : 'notInView'}
			transition={{
				duration: 0.5,
				delay: delay,
				ease: 'easeInOut',
				bounce: 0.1,
			}}
			className='relative px-10 py-5 lg:w-1/4 flex flex-col gap-4 mx-5 justify-around'
		>
			<div className='absolute w-[0.5px] top-0 left-3 h-full bg-main'></div>
			<span className='text-5xl'>{icon}</span>
			<h3 className='text-3xl'>{title}</h3>
			<p>{children}</p>
			<NavLink
				to={link}
				className='flex flex-row items-center text-lg hover:text-main'
			>
				Learn more
				<span className='ml-2'>
					<FaExternalLinkAlt />
				</span>
			</NavLink>
		</motion.div>
	);
}

export default Card;
