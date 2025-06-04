import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-blue-500 text-white flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">The Big-Game-Site</h1>
            <Link to="/" className="hover:text-blue-300 transition">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m-5 4h6"
                    />
                </svg>
            </Link>
        </header>
    )
}

export default Header;
