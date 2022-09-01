import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/Authentication';
import { useRouter } from 'next/router';

const AuthenticatedLayout = ({ children }) => {
	const { push } = useRouter();
	const { checkIfUserIsActive, user } = useContext(AuthContext);

	useEffect(() => {
		checkIfUserIsActive();
	}, [checkIfUserIsActive, push, user]);

	return <>{children}</>;
};

export default AuthenticatedLayout;
