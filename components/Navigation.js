import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/Authentication';

const Navigation = () => {
	const { user, logout } = useContext(AuthContext);
	const { pathname } = useRouter();

	const activeLink = (path) => {
		return pathname === path;
	};

	return (
		<nav className='bg-sky-900 p-2'>
			<div className='container mx-auto flex items-center text-white'>
				<Link href='/'>
					<div className='flex items-center cursor-pointer'>
						<Image
							src={'/assets/logo.png'}
							alt='business logo'
							width={51}
							height={30}
						/>
						<span className='ml-2'>Business</span>
					</div>
				</Link>
				<div className='ml-auto'>
					<Link href='/'>
						<a className={`${activeLink('/') && 'text-sky-300'} ml-3`}>Home</a>
					</Link>
					<Link href='/jobs'>
						<a className={`${activeLink('/jobs') && 'text-sky-300'} ml-3`}>
							Jobs
						</a>
					</Link>
					{user && (
						<>
							<Link href='/admin'>
								<a className={`${activeLink('/admin') && 'text-sky-300'} ml-3`}>
									Admin
								</a>
							</Link>
							<button onClick={logout}>
								<a className={` ml-3`}>Logout</a>
							</button>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
