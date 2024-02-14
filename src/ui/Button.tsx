import React from 'react';
import { NavLink } from 'react-router-dom';

interface ButtonProps {
	children: React.ReactNode;
	type: 'link' | 'button';
	bgType?: 'transparent' | 'headerLink' | 'important';
	to: string;
	onClick?: () => void;
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
}

export default function Button({
	children,
	bgType,
	type,
	to,
	onClick,
	size = 'small',
	disabled,
}: ButtonProps) {
	if (type === 'button') {
		return (
			<button
				className={` rounded-3xl text-sm tracking-wider m-2 w-fit ${
					!bgType
						? 'bg-main hover:bg-mainHover text-white'
						: bgType === 'headerLink'
						? ''
						: bgType === 'important'
						? ' text-white bg-red-500'
						: bgType === 'transparent'
						? 'dark:hover:bg-bgDark1Hover hover:bg-bgWhite1'
						: ''
				} ${
					size === 'small'
						? 'px-4 py-2'
						: size === 'medium'
						? 'px-6 py-3'
						: size === 'large' && 'px-10 py-4'
				} transition-colors duration-300`}
				onClick={onClick}
				disabled={disabled}
			>
				{children}
			</button>
		);
	} else {
		return (
			<NavLink
				to={to}
				className={`block px-4 py-2 rounded-3xl text-sm tracking-wider m-2 ${
					!bgType
						? 'bg-main hover:bg-mainHover text-white'
						: bgType === 'headerLink'
						? 'bg-bgWhite text-black hover:bg-bgWhite1 '
						: bgType === 'transparent'
						? 'dark:hover:bg-bgDark1Hover hover:bg-bgWhite1'
						: ''
				} ${
					size === 'small'
						? 'px-4 py-2'
						: size === 'medium'
						? 'px-6 py-3'
						: size === 'large'
						? ' px-6 py-3'
						: ''
				}transition-colors duration-300`}
				onClick={onClick}
			>
				{children}
			</NavLink>
		);
	}
}
