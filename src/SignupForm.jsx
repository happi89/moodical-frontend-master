import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BASE_URL } from './App';

function SignupForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const history = useHistory();

	function signup(e) {
		e.preventDefault();
		axios
			.post(`${BASE_URL}/api/signup/`, {
				username: username,
				password: password,
				email: email,
			})
			.then((res) => {
				history.push('/login/');
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

	// <div className='w-75 d-flex justify-content-center align-items-center'>
	// 	<form onSubmit={(e) => signup(e)}>

	/* <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div> */
	/* <div className='flex relative '>
					<span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
						<svg
							height='15'
							fill='currentColor'
							viewBox='0 0 1792 1792'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
						</svg>
					</span>
					<input
						type='text'
						className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
						required
					/>
				</div>
				<div className='form-group'>
					<label for='exampleInputEmail1'>Username</label>
					<input
						type='text'
						className='form-control'
						aria-describedby='emailHelp'
						placeholder='Enter username'
						value={username}
						onChange={(e) => setUsername(e.currentTarget.value)}
					/>
				</div>
				<div className='form-group'>
					<label for='exampleInputPassword1'>Password</label>
					<input
						type='password'
						className='form-control'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.currentTarget.value)}
					/>
				</div>
				<div className='flex w-full'>
					<button type='submit' className='btn btn-primary w-full'>
						Sign Up
					</button>
				</div>
				<div className='form-group'>
					<small
						className='form-text text-muted text-center mt-4'>
						<Link to='/login'>Login</Link>
					</small>
				</div>
			</form>
		</div> */

	return (
		<div className='card shadow-xl w-96 bg-base-100 my-0 mx-auto mt-3'>
			<div className='card-body'>
				<div className='self-center text-xl font-light text-gray-600 sm:text-2xl dark:text-white'>
					Sign Up
				</div>
				<div className='mt-2'>
					<form onSubmit={(e) => signup(e)}>
						<div className='flex flex-col mb-2'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='text'
								className='input input-bordered w-full'
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.currentTarget.value)}
								required
							/>
						</div>
						<div className='flex flex-col mb-2'>
							<label className='label'>
								<span className='label-text'>Username</span>
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
						to='/login'
						className='inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white'>
						<span className='ml-2'>Sign Up!</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SignupForm;
