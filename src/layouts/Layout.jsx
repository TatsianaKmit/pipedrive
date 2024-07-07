import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function LayoutMax() {

    return (
        <>
            <header className="header">
                <Header />
            </header>
            <main className="main" >
                <Outlet />
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
}