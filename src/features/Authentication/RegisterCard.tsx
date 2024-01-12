import { GoPerson } from 'react-icons/go';
import { FiEdit2 } from 'react-icons/fi';
import { PiIdentificationCard } from 'react-icons/pi';
import useDarkMode from '../../hooks/useDarkMode';
import { CiCalendarDate, CiLock } from 'react-icons/ci';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';
import { useRegister } from './useRegister';
import FormInput from '../../ui/FormInput';
import {
	validateAge,
	validateEmail,
	validateId,
	validatePassword,
} from './isInputCorrect';
import { MdAlternateEmail } from 'react-icons/md';

function RegisterCard() {
	const { register: registerAccount, isRegisterPending } = useRegister();
	const {
		register,
		formState: { errors },
		handleSubmit,
		getValues,
	} = useForm<FieldValues>();
	const { isDarkMode } = useDarkMode();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		registerAccount({
			email: data.email,
			password: data.password,
			fullName: data.fullName,
			nickname: data.nickname,
			dateOfBirth: data.dateOfBirth,
			pesel: data.pesel,
		});
	};

	return (
		<div className='relative flex items-center justify-center gap-5 z-10 w-full rounded-lg  bg-white dark:bg-bgDark dark:text-white text-bgDark sm:h-[750px] sm:w-full overflow-hidden'>
			<form
				className='flex flex-col justify-center items-center w-5/6 sm:w-[400px] gap-1 sm:p-10  bg-white dark:bg-bgDark '
				onSubmit={handleSubmit(onSubmit)}
			>
				<h3 className='text-xl xs:text-2xl mb-4'>Register Your Account</h3>

				<FormInput
					placeholder='Email'
					id='email'
					icon={<MdAlternateEmail />}
					type='email'
					error={errors?.email?.message}
					register={register}
					validateFunction={() => validateEmail(getValues().email)}
				/>
				<FormInput
					id='password'
					placeholder='Password'
					icon={<CiLock />}
					type='password'
					error={errors?.password?.message}
					register={register}
					validateFunction={() => validatePassword(getValues().password)}
				/>
				<FormInput
					placeholder='Full name'
					id='fullName'
					icon={<GoPerson />}
					type='text'
					error={errors?.fullName?.message}
					register={register}
				/>
				<FormInput
					placeholder='Nickname'
					id='nickname'
					icon={<FiEdit2 />}
					type='text'
					error={errors?.nickname?.message}
					register={register}
				/>
				<FormInput
					placeholder='Date of birth'
					id='dateOfBirth'
					icon={<CiCalendarDate />}
					type='date'
					error={errors?.dateOfBirth?.message}
					register={register}
					validateFunction={() => validateAge(getValues().dateOfBirth)}
				/>
				<FormInput
					placeholder='Id'
					id='pesel'
					icon={<PiIdentificationCard />}
					type='text'
					error={errors?.pesel?.message}
					register={register}
					validateFunction={() => validateId(getValues().pesel)}
				/>

				<Button size='medium' to='' type='button' disabled={isRegisterPending}>
					{isRegisterPending ? <Spinner type='button' /> : 'Log in'}
				</Button>
				<Link
					to='/login'
					className=' text-sm p-2 hover:text-main transition-colors duration-300'
				>
					Do you have an account? Click here.
				</Link>
			</form>
			<div className='hidden sm:block absolute top-[0%] -left-10 h-40 w-40 rotate-[10deg]'>
				{isDarkMode ? (
					<img src='/logo-icon-dark.svg' />
				) : (
					<img src='/logo-icon-white.svg' />
				)}
			</div>
			<div className='hidden sm:block absolute top-[60%] left-[85%] h-40 w-40 rotate-[-10deg]'>
				{isDarkMode ? (
					<img src='/logo-icon-dark.svg' />
				) : (
					<img src='/logo-icon-white.svg' />
				)}
			</div>
		</div>
	);
}

export default RegisterCard;
