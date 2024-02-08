import React, { useState } from 'react';
import {
	UseFormRegister,
	FieldValues,
	FieldError,
	Merge,
	FieldErrorsImpl,
} from 'react-hook-form';
import { easeInOut, motion } from 'framer-motion';

interface FormInputProps {
	placeholder: string;
	icon: React.ReactNode;
	type?: 'password' | 'text' | 'email' | 'date' | 'file';
	error:
		| string
		| FieldError
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		| Merge<FieldError, FieldErrorsImpl<any>>
		| undefined;
	register: UseFormRegister<FieldValues>;
	id: string;
	validateFunction?: () => boolean | string;
}

export default function FormInput({
	placeholder,
	icon,
	type = 'text',
	error,
	id,
	register,
	validateFunction,
}: FormInputProps) {
	const [onFocus, setOnFocus] = useState(false);
	const motionBarVariants = {
		hidden: {
			x: '-100%',
		},
		open: {
			x: 0,
		},
	};

	return (
		<div
			className={`relative flex justify-between items-start w-full h-[85px]  flex-col dark:text-white gap-2 text-bgDark1 overflow-x-hidden`}
		>
			<div
				className={`relative flex justify-center items-center w-full  dark:text-white  text-bgDark1 overflow-x-hidden`}
			>
				<div
					className={`flex justify-center items-center p-2 h-full text-xl transition-colors duration-300  ${
						onFocus ? 'text-main' : 'text-black dark:text-white'
					}`}
				>
					{icon}
				</div>
				<input
					className='w-full bg-transparent outline-none py-2  text-md mt-[1px]'
					type={type}
					placeholder={placeholder}
					{...register(id, {
						required: 'This field is required',
						validate: validateFunction,
					})}
					onFocus={() => setOnFocus(true)}
					onBlur={() => setOnFocus(false)}
				/>
				<div className='absolute bottom-0 left-0 w-full h-[0.8px] bg-bgDark1 dark:bg-bgWhite1'></div>
				<motion.div
					variants={motionBarVariants}
					transition={{ ease: easeInOut }}
					animate={onFocus ? 'open' : 'hidden'}
					initial='hidden'
					className='absolute bottom-0 left-0 w-full h-[1px] bg-main'
				></motion.div>
			</div>
			{error && (
				<p className='absolute top-12 block text-xs text-main'>
					{error.toString()}
				</p>
			)}
		</div>
	);
}
