import { Menu, X } from "lucide-react";
import { useState } from "react";

export const NavBar = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#1B1B1F] text-white z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold">Leonardo Gomes</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#home" className="hover:text-gray-300">Sobre Mim</a>
                        <a href="#features" className="hover:text-gray-300">Skills</a>
                        <a href="#pricing" className="hover:text-gray-300">Experiencia</a>
                        <a href="#contact" className="hover:text-gray-300">Projetos</a>
                        <a href="#contact" className="hover:text-gray-300">Contatos</a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#1B1B1F] px-4 py-2 space-y-2">
                    <a href="#home" className="block hover:text-gray-300">Sobre Mim</a>
                    <a href="#features" className="block hover:text-gray-300">Skills</a>
                    <a href="#pricing" className="block hover:text-gray-300">Projetos</a>
                    <a href="#contact" className="block hover:text-gray-300">Contatos</a>
                </div>
            )}
        </nav>
    );
}