import { useState, createContext } from 'react';
import { auth } from '../firebase/index';
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut
} from 'firebase/auth';
import { useRouter } from 'next/router';
// initialize AuthContext using createContext
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const { push } = useRouter();
	const [user, setUser] = useState(null);
	const [authError, setAuthError] = useState(false);
	const [authSuccess, setAuthSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [authMessage, setAuthMessage] = useState('');

	//  function to register new users
	const register = async (email, password, name) => {
		try {
			setLoading(true);
			setAuthError(false);
			setAuthSuccess(false);
			const authenticated = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await updateProfile(auth.currentUser, {
				displayName: name,
				isAdmin: true
			});
			setUser(authenticated.user);
			setAuthSuccess(true);
			setAuthMessage('Successfully registered!');
			return authenticated;
		} catch (error) {
			setAuthError(true);
			setAuthMessage(error.message);
		} finally {
			setLoading(false);
		}
	};

	// function to login current users
	const login = async (email, password) => {
		try {
			setLoading(true);
			setAuthError(false);
			setAuthSuccess(false);
			if (email === '' || password === '') {
				setAuthError(true);
				setAuthMessage('All fields are required.');
				return;
			}
			const authenticated = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			setUser(authenticated.user);
			setAuthSuccess(true);
			setAuthMessage('Successfully logged in!');
			return authenticated;
		} catch (error) {
			setAuthError(true);
			setAuthMessage(error.message);
		} finally {
			setLoading(false);
		}
	};

	// log out users
	const logout = () => {
		try {
			signOut(auth);
			push('/login/admin');
			setAuthSuccess(true);
			setAuthMessage('Successfully logged out!');
		} catch (error) {
			setAuthError(true);
			setAuthMessage(error.message);
		}
	};

	// check if user is logged in when trying to access login or register pages
	const checkIfUserIsActive = () => {
		const authenticated = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				logout();
			}
		});
		return authenticated;
	};

	// check if user is logged in when trying to access login or register pages
	const checkIfUserIsLoggedIn = () => {
		const authenticated = onAuthStateChanged(auth, (user) => {
			if (user) {
				push('/admin/');
			} else {
				return null;
			}
		});
		return authenticated;
	};

	const updateUser = async (updatedInfo) => {
		console.log('update user');
	};

	const enviarTokenParaRecuperarContrasena = async (email) => {
		console.log('send recover password email');
	};

	return (
		<AuthContext.Provider
			value={{
				register,
				login,
				logout,
				user,
				authError,
				authSuccess,
				authMessage,
				loading,
				checkIfUserIsActive,
				checkIfUserIsLoggedIn
			}}>
			{children}
		</AuthContext.Provider>
	);
};
