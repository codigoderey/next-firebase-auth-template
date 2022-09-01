import React, { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../context/Authentication';
import 'react-toastify/dist/ReactToastify.css';

const ToastifyLayout = ({ children }) => {
	const { authError, authSuccess, authMessage } = useContext(AuthContext);

	useEffect(() => {
		if (authError) {
			toast.error(authMessage, {
				id: 'error',
				hideProgressBar: true,
				autoClose: 3000
			});
		}
		if (authSuccess) {
			toast.success(authMessage, {
				id: 'success',
				hideProgressBar: true,
				autoClose: 3000
			});
		}
	}, [authError, authSuccess, authMessage]);

	return (
		<>
			<ToastContainer />
			{children}
		</>
	);
};

export default ToastifyLayout;
