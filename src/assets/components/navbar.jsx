import { Menu, X } from "lucide-react";
import { useState } from "react";

export const NavBar = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#1B1B1F] text-white z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold">Leonardo Gomes</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#introduction-section" className="hover:text-gray-300"><b>Sobre Mim</b></a>
                        <a href="#timeline-section" className="hover:text-gray-300"><b>Trajetória Profissional e Acadêmica</b></a>
                        <a href="#certifications-section" className="hover:text-gray-300"><b>Certificações</b></a>
                        <a href="#projects-section" className="hover:text-gray-300"><b>Projetos</b></a>
                        <a href="#contact" className="hover:text-gray-300"><b>Contatos</b></a>
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
                    <a href="#home" className="block hover:text-gray-300"><b>Sobre Mim</b></a>
                    <a href="#features" className="block hover:text-gray-300"><b>Trajetória Profissional e Acadêmica</b></a>
                    <a href="#features" className="block hover:text-gray-300"><b>Certificações</b></a>
                    <a href="#pricing" className="block hover:text-gray-300"><b>Projetos</b></a>
                    <a href="#contact" className="block hover:text-gray-300"><b>Contatos</b></a>
                </div>
            )}
        </nav>
    );
}