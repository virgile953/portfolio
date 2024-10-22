// app/Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="mb-12 text-center">
		<Link href="/">
		Home
		</Link>
		<span className="mx-2">|</span>
		<Link href="/projects">
		See All Projects
		</Link>
		<span className="mx-2">|</span>
		<Link href="/about">
		About Me
		</Link>
		<span className="mx-2">|</span>
		<Link href="/contact">
		Contact
		</Link>
		</nav>
	);
};

export default Navbar;
