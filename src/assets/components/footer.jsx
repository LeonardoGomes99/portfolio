import { Fragment } from "react"


export const Footer = () => {
    return (
        <Fragment>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-2">Entre em contato</h3>
                            <p className="text-sm">
                                Email: <a href="mailto:info@example.com" className="hover:text-gray-300">leonardo.gomes16477@gmail.com</a>
                            </p>
                            <p className="text-sm">
                                WhatsApp: <a href="tel:+1234567890" className="hover:text-gray-300">+55 (12) 987081018</a>
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/leonardo-gomes-63a2b717b" aria-label="LinkedIn" className="hover:text-gray-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                            <a href="https://github.com/LeonardoGomes99" aria-label="GitHub" className="hover:text-gray-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.295-1.552 3.3-1.23 3.3-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.921.42.36.81 1.096.81 2.22v3.285c0 .318.195.694.795.577C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="text-center text-sm mt-4">
                        Leonardo Gomes. All rights reserved.
                    </div>
                    <div className="text-center text-sm mt-4">
                        {new Date().getFullYear()}
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}