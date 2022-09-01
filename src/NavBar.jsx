import { Link } from 'react-router-dom';

const NavBar = () => {
	function logout() {
		localStorage.clear();
		window.location.pathname = '/login';
	}

	return (
		<div className='navbar bg-base-100 shadow-md'>
			<div className='flex-1'>
				<Link className='btn btn-ghost normal-case text-xl' to='/'>
					Moodify
				</Link>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal p-0'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					{/* <li tabindex='0'>
							<a>
								Parent
								<svg
									className='fill-current'
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'>
									<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
								</svg>
							</a>
							<ul className='p-2 bg-base-100'>
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li> */}
					<li>
						<Link to='/friends'>Friends</Link>
					</li>
					<li>
						<Link to='/login' onClick={logout}>
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
