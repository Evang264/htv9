export default function Navbar() {
    return (
        <nav className="navbar bg-gray-100 sticky">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl font-departure font-bold">VeriThread</a>
                
            </div>
            
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    
                </div>
                </div>
        </nav>
    );
}