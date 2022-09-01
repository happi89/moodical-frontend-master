import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from './App';

function LoginForm(e) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function login(e) {
		e.preventDefault();
		axios
			.post(`${BASE_URL}/api/login/`, {
				username: username,
				password: password,
			})
			.then((res) => {
				const { token, username, pk } = res.data;
				localStorage.setItem('token', token);
				localStorage.setItem('username', username);
				localStorage.setItem('pk', pk);
				window.location.pathname = '/';
			})
			.catch((err) => {
				console.log(err);
			});
	}

	useEffect(() => {
		if (localStorage.getItem('token')) {
			window.location.pathname = '/';
		}
	}, []);

	return (
		// <div classNameName='w-75 d-flex justify-content-center align-items-center'>
		// 	<form onSubmit={(e) => login(e)}>
		// 		<div classNameName='form-group'>
		// 			<label for='exampleInputEmail1'>Username</label>
		// 			<input
		// 				classNameName='form-control'
		// 				aria-describedby='emailHelp'
		// 				type='text'
		// 				placeholder='Enter username'
		// 				value={username}
		// 				onChange={(e) => setUsername(e.currentTarget.value)}
		// 				required
		// 			/>
		// 			<small
		// 				classNameName='form-text text-muted text-3xl font-bold underline text-red-800'>
		// 				We'll never share your details with anyone else.
		// 			</small>
		// 		</div>
		// 		<div classNameName='form-group'>
		// 			<label for='exampleInputPassword1'>Password</label>
		// 			<input
		// 				classNameName='form-control'
		// 				type='password'
		// 				placeholder='Password'
		// 				value={password}
		// 				onChange={(e) => setPassword(e.currentTarget.value)}
		// 				required
		// 			/>
		// 		</div>
		// 		<button type='submit' classNameName='btn btn-primary'>
		// 			Submit
		// 		</button>
		// 		<div classNameName='form-group'>
		// 			<small
		// 				classNameName='form-text text-muted text-center mt-4'>
		// 				Not a user? <Link to='/signup'>Register</Link>
		// 			</small>
		// 		</div>
		// 	</form>
		// </div>

		<div className='card shadow-xl w-96 bg-base-100 my-0 mx-auto mt-5 mb-5'>
			<div className='card-body'>
				<div className='self-center text-xl font-light text-gray-600 sm:text-2xl dark:text-white'>
					Login To Your Account
				</div>
				<div className='mt-2'>
					<form onSubmit={(e) => login(e)}>
						<div className='flex flex-col mb-2'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='text'
								className='input input-bordered w-full'
								placeholder='Username'
								value={username}
								onChange={(e) => setUsername(e.currentTarget.value)}
								required
							/>
						</div>
						<div className='flex flex-col mb-6'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								className='input input-bordered w-full'
								type='password'
								placeholder='Password'
								value={password}
								onChange={(e) => setPassword(e.currentTarget.value)}
								required
							/>
						</div>
						<div className='flex items-center mb-6 -mt-4'>
							{/* <div className='flex ml-auto'>
							<a
								href='/'
								className='inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white'>
								Forgot Your Password?
							</a>
						</div> */}
						</div>
						<div className='flex w-full'>
							<button type='submit' className='btn btn-primary w-full'>
								Login
							</button>
						</div>
					</form>
				</div>
				<div className='flex items-center justify-center mt-6'>
					<Link
						to='/signup'
						className='inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white'>
						<span className='ml-2'>Sign Up!</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
