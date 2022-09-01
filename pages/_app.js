import { AuthProvider } from '../context/Authentication';
import '../styles/globals.css';
import ToastifyLayout from '../layouts/ToastifyLayout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<AuthProvider>
				<ToastifyLayout>
					<Component {...pageProps} />
				</ToastifyLayout>
			</AuthProvider>
		</>
	);
}

export default MyApp;
