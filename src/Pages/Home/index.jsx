import React from 'react';
import './index.css';
import Login from '../../Components/Login';
import Footer from '../../Components/Footer';
const Home = () => {
	return (
		<div className='home_page_wrapper'>
			<Login />
			<Footer />
		</div>
	);
};

export default Home;
