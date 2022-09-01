import React, { useContext, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AuthContext } from '../../context/Authentication';
import { useRouter } from 'next/router';
import UnauthenticatedLayout from '../../layouts/UnauthenticatedLayout';

const RegisterAdminPage = () => {
	const { push } = useRouter();
	const { register } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const authenticated = await register(email, password, name);
			if (authenticated) {
				push('/admin');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Head>
				<title>Register an admin account</title>
			</Head>
			<UnauthenticatedLayout>
				<div className='flex flex-col items-center justify-center py-20'>
					<div className='mb-5'>
						<Image
							src='/assets/logo.png'
							alt='business logo'
							width={102}
							height={60}
						/>
					</div>
					<h1 className='text-3xl font-bold mb-5'>Register an admin account</h1>
					<form onSubmit={onSubmit} className='border p-5 rounded w-96'>
						<div className='flex flex-col mb-2'>
							<label className='mb-1'>Name:</label>
							<input
								className='border rounded p-2'
								type='text'
								placeholder='Your name here'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className='flex flex-col mb-2'>
							<label className='mb-1'>Email:</label>
							<input
								className='border rounded p-2'
								type='email'
								placeholder='youremail@email.com'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='flex flex-col mb-4'>
							<label className='mb-1'>Password:</label>
							<input
								className='border rounded p-2'
								type='password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button className='bg-orange-300 px-4 py-2 rounded' type='submit'>
							Register
						</button>
					</form>
					<div className='mt-2'>
						<span className='mr-2'>Have an account?</span>
						<Link href='/login/admin'>
							<a className='text-red-400 underline'>Sign in here</a>
						</Link>
					</div>
				</div>
			</UnauthenticatedLayout>
		</>
	);
};

export default RegisterAdminPage;
