import { IoMdClose } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import Button from '../../ui/Button';
import { useUpdateUser } from './useUpdateUser';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormInput from '../../ui/FormInput';
import Spinner from '../../ui/Spinner';
import { useGetNewUserData } from './useGetNewUserData';
import { MdAlternateEmail } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { CiLock } from 'react-icons/ci';
import { useUser } from '../Authentication/useUser';
import { useUpdateImage } from './useUpdateImage';
import {
	validateEmail,
	validatePassword,
	validateRepeatPassword,
} from '../Authentication/isInputCorrect';
import toast from 'react-hot-toast';
// import { FileUploader } from 'react-drag-drop-files';
import { useState } from 'react';
import { useDeleteAccount } from './useDeleteAccount';
import FileUploader from './FileUploader';

interface EditingPopUpProps {
	SetClickeModify: (ClickModify: string | null) => void;
	field: string;
}

function EditingPopUp({ SetClickeModify, field }: EditingPopUpProps) {
	const { updateUser, isUpdatePending } = useUpdateUser();
	const { updateAvatar } = useUpdateImage();
	const { data: userData } = useUser();
	const { getUser } = useGetNewUserData();
	const { deleteAccount } = useDeleteAccount();
	const [file, setFile] = useState<File | null>(null);

	const {
		register,
		formState: { errors },
		handleSubmit,
		getValues,
	} = useForm<FieldValues>();

	const validateFunc = (input: string | number, oldPassword?: string) => {
		if (field === 'E-mail') {
			if (input === userData?.email)
				return 'You entered the same email address';
			return validateEmail(String(input));
		}
		if (field === 'Nickname') {
			if (input === userData?.nick_name) return 'You entered the same Nickname';
			return true;
		}
		if (field === 'Full Name') {
			if (input === userData?.full_name)
				return 'You entered the same Full Name';
			return true;
		}
		if (field === 'Password') {
			if (input === oldPassword)
				return 'The new password must be different from the old one';
			return validatePassword(String(input));
		}
		return true;
	};

	const inputIcon =
		field === 'E-mail' ? (
			<MdAlternateEmail />
		) : field === 'Avatar' ? (
			<RxAvatar />
		) : field === 'Nickname' ? (
			<FiEdit2 />
		) : field === 'Full Name' ? (
			<GoPerson />
		) : field === 'Password' ? (
			<CiLock />
		) : undefined;
	const inputType =
		field === 'E-mail'
			? 'email'
			: field === 'Avatar'
			? 'file'
			: field === 'Nickname' || field === 'Full Name'
			? 'text'
			: field === 'Password'
			? 'password'
			: undefined;
	const inputId =
		field === 'E-mail'
			? 'email'
			: field === 'Avatar'
			? 'avatar'
			: field === 'Nickname'
			? 'nick_name'
			: field === 'Password'
			? 'password'
			: field === 'Full Name'
			? 'full_name'
			: '';
	const inputPlaceholder = field === 'Password' ? 'New Password' : field;

	const handleChange = (file: File) => {
		setFile(file);
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		if (field === 'Avatar') {
			if (file !== null) {
				updateAvatar({ image: file });
			} else {
				toast.error('Choose a file');
			}
		} else if (field === 'Password') {
			updateUser({
				fieldToUpdate: 'password',
				valueToUpdate: data.password,
				password: data.old_password,
			});
		} else if (field === 'Delete account') {
			deleteAccount(data.old_password);
		} else {
			const [key, value] = Object.entries(data)[0];
			updateUser({ fieldToUpdate: key, valueToUpdate: value });
		}
		getUser();
		SetClickeModify(null);
	};

	return (
		<div className='fixed h-screen w-screen z-50 top-0 left-0 flex justify-center items-center px-4 bg-bgDark/20 md400:px-10 md600:px-20 '>
			<div className='flex flex-col py-5 px-8  w-full bg-white dark:bg-bgDark1 rounded-lg md800:w-4/5 max-w-3xl'>
				<div className='flex flex-row justify-between w-full '>
					<p className='flex items-center text-xl'>Settings</p>
					<Button
						to='s'
						type='button'
						bgType='transparent'
						onClick={() => {
							SetClickeModify(null);
						}}
					>
						<span className='text-3xl'>
							<IoMdClose />
						</span>
					</Button>
				</div>
				<form
					className='flex flex-wrap justify-between py-10'
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className='w-full flex-col flex justify-center'>
						{field === 'Password' && (
							<FormInput
								placeholder='Your password'
								id='old_password'
								icon={<CiLock />}
								type='password'
								error={errors?.old_password?.message}
								register={register}
								additionalStyles='pb-[75px] md600:pb-[40px]'
							/>
						)}
						{field === 'Delete account' && (
							<FormInput
								placeholder='Your password'
								id='old_password'
								icon={<CiLock />}
								type='password'
								error={errors?.old_password?.message}
								register={register}
							/>
						)}
						{field === 'Avatar' ? (
							<div className='mb-10 '>
								<FileUploader
									handleChange={handleChange}
									file={file}
									types={['JPG', 'PNG', 'GIF', "JPEG"]}
								/>
							</div>
						) : field !== 'Delete account' ? (
							<FormInput
								placeholder={inputPlaceholder}
								id={inputId}
								icon={inputIcon}
								type={inputType}
								error={errors?.[inputId]?.message}
								register={register}
								validateFunction={() =>
									validateFunc(getValues()?.[inputId], getValues().old_password)
								}
								additionalStyles='pb-[75px] md600:pb-[40px]'
							/>
						) : (
							''
						)}
						{field === 'Password' && (
							<FormInput
								id='repeatPassword'
								placeholder='Repeat password'
								icon={<CiLock />}
								type='password'
								error={errors?.repeatPassword?.message}
								register={register}
								validateFunction={() =>
									validateRepeatPassword(
										getValues().password,
										getValues().repeatPassword
									)
								}
							/>
						)}
					</div>

					<div className='w-full flex justify-center items-center '>
						<Button
							size='medium'
							to=''
							type='button'
							bgType={field === 'Delete account' ? 'important' : undefined}
						>
							{isUpdatePending ? (
								<Spinner type='button' />
							) : field === 'Delete account' ? (
								field
							) : (
								'Modify'
							)}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EditingPopUp;
