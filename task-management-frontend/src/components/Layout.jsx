import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="min-vh-100 bg-light d-flex flex-column">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">Task Manager</Link>
                    <div className="ms-auto">
                        <Link to="/create" className="btn btn-outline-light">
                            + Add Task
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container py-4 flex-grow-1">
                {children}
            </main>

            {/* Footer (optional) */}
            <footer className="bg-dark text-white text-center py-2">
                <small>&copy; {new Date().getFullYear()} Task Manager App</small>
            </footer>
        </div>
    );
};

export default Layout;
