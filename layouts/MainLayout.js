import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
	return (
		<>
			<Navigation />
			<main className='container mx-auto'>{children}</main>
			<Footer />
		</>
	);
};

MainLayout.propTypes = {
	children: PropTypes.node.isRequired
};

export default MainLayout;
