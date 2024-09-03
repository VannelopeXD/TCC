import React from "react";
import Copyright from '../../Assets/Icons/c-circle.svg';

function Footer() {
    return (
        <footer className="footer py-3 text-center" style={{ backgroundColor: '#f8f9fa' }}>
            <p className="mb-0">
                Copyright
                <img src={Copyright} className="mx-1" alt="copyright" />
                Iount Cora 2024
            </p>
        </footer>
    );
}

export default Footer;
