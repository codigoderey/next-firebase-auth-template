import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/Authentication';

const UnauthenticatedLayout = ({ children }) => {
	const { push } = useRouter();
	const { checkIfUserIsLoggedIn } = useContext(AuthContext);

	useEffect(() => {
		checkIfUserIsLoggedIn();
	}, [checkIfUserIsLoggedIn, push]);

	return <>{children}</>;
};

export default UnauthenticatedLayout;
