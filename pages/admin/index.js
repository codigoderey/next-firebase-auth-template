import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authentication';
import MainLayout from '../../layouts/MainLayout';
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout';

const AdminHomePage = () => {
	const { user } = useContext(AuthContext);

	return (
		<MainLayout>
			<AuthenticatedLayout>
				<div className='container mx-auto'>
					Welcome {user?.displayName} this is your admin page
				</div>
			</AuthenticatedLayout>
		</MainLayout>
	);
};

export default AdminHomePage;
