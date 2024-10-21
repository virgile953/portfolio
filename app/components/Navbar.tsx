// app/Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="mb-12 text-center">
		<Link href="/" className="text-blue-600 hover:text-blue-800 transition duration-300">
		Home
		</Link>
		<span className="mx-2">|</span>
		<Link href="/projects" className="text-blue-600 hover:text-blue-800 transition duration-300">
		See All Projects
		</Link>
		<span className="mx-2">|</span>
		<Link href="/about" className="text-blue-600 hover:text-blue-800 transition duration-300">
		About Me
		</Link>
		<span className="mx-2">|</span>
		<Link href="/contact" className="text-blue-600 hover:text-blue-800 transition duration-300">
		Contact
		</Link>
		</nav>
	);
};

export default Navbar;
