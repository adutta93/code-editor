import React from 'react';
import './index.css';
const Login = () => {
	return (
		<div className='login_form_wrapper'>
			<h1 className='main_logo'>CODE</h1>
			<h4 className='main_label'>Paste invitation ROOM ID</h4>

			<div className='form_inputGroup'>
				<input type='text' className='inputGroup_roomId' placeholder='Room ID' />
				<input type='text' className='inputGroup_userName' placeholder='Username' />
				<button className='btn _joinBtn'>Join</button>

				<span className='room_createInfo'>
					If you don't have invite, create a{' '}
					<a href='/' className='create_new_roomId'>
						new room
					</a>
				</span>
			</div>
		</div>
	);
};

export default Login;
