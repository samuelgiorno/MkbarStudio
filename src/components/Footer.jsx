import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-6 mt-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-lg font-semibold mb-2">MKBar</p>
                <div className="flex justify-center space-x-4 mb-3">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram text-xl hover:text-pink-500"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i className="fab fa-facebook text-xl hover:text-blue-400"></i>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <i className="fab fa-tiktok text-xl hover:text-white"></i>
                    </a>
                </div>
                <p className="text-sm">&copy; {year} MKBar. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
