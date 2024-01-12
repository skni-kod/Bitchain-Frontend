// import ReactDOM from "react-dom"
import FormInput from '../../ui/FormInput';
import { GoPerson } from 'react-icons/go';
import { CiLock } from 'react-icons/ci';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';
import { useLogin } from './useLogin';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Spinner from '../../ui/Spinner';

export default function LoginCard() {
	const { login, isPending } = useLogin();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FieldValues>();
	const { isDarkMode } = useDarkMode();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		login({ email: data.email, password: data.password });
	};

	return (
		<div className='relative flex items-center justify-center gap-5 z-10 w-full h-5/6 rounded-lg  bg-white dark:bg-bgDark dark:text-white text-bgDark sm:h-[500px] sm:w-full overflow-hidden'>
			<form
				className='flex flex-col justify-center items-center w-5/6 sm:w-[400px] gap-1 sm:p-10  bg-white dark:bg-bgDark '
				onSubmit={handleSubmit(onSubmit)}
			>
				<h3 className='text-xl xs:text-2xl mb-12'>Login Your Account</h3>
				<FormInput
					placeholder='Email'
					id='email'
					icon={<GoPerson />}
					type='email'
					error={errors?.email?.message}
					register={register}
				/>
				<FormInput
					id='password'
					placeholder='Password'
					icon={<CiLock />}
					type='password'
					error={errors?.password?.message}
					register={register}
				/>
				<div className='relative w-full'>
					<Link
						to=''
						className='absolute right-0 -top-8 text-sm p-1 hover:text-main transition-colors duration-300'
					>
						Forgot password?
					</Link>
				</div>
				<Button size='medium' to='' type='button' disabled={isPending}>
					{isPending ? <Spinner type='button' /> : 'Log in'}
				</Button>
				<Link
					to='/signup'
					className=' text-sm p-2 hover:text-main transition-colors duration-300'
				>
					Don't have an account? Click here
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
