import { Fragment } from "react"


export const Timeline = () => {
    return (
        <Fragment>
            <div id="timeline-section" className="bg-[rgb(31,27,27)] min-h-screen w-full p-4 sm:p-6 lg:p-8 overflow-auto">
                <div className="flex flex-col md:flex-row md:justify-center gap-4 sm:gap-6 lg:gap-12 m-4 sm:m-6 lg:m-8">
                    {/* Experiência Profissional */}
                    <div className="flex flex-col items-center max-w-md">
                        <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                            Experiência Profissional
                        </h2>
                        <ol className="relative border-s border-gray-200 dark:border-gray-700 w-full">
                            <li className="mb-6 sm:mb-8 ms-6">
                                <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full -start-2.5 sm:-start-3 ring-6 sm:ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm2 2l2 2-2 2m4-2h6"
                                        />
                                    </svg>
                                </span>
                                <h3 className="flex items-center mb-1 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                                    Desenvolvedor Full Stack / Full Cycle (Senior/Tech Lead)
                                    <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium me-2 px-2 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-2 sm:ms-3">
                                        Atual
                                    </span>
                                </h3>
                                <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    10/2024 - Atual
                                </time>
                                <p className="mb-2 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
                                    React JS - Django - Springboot - Postgresql - Docker
                                </p>
                            </li>
                            <li className="mb-6 sm:mb-8 ms-6">
                                <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full -start-2.5 sm:-start-3 ring-6 sm:ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm2 2l2 2-2 2m4-2h6"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                                    Desenvolvedor Full Stack / Full Cycle (Junior/Pleno)
                                </h3>
                                <time className="block mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    11/2023 - 10/2024 (Pleno)
                                </time>
                                <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    07/2022 - 11/2023 (Junior)
                                </time>
                                <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
                                    React JS - Django - Springboot - Postgresql - Docker
                                </p>
                            </li>
                            <li className="mb-6 sm:mb-8 ms-6">
                                <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full -start-2.5 sm:-start-3 ring-6 sm:ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm2 2l2 2-2 2m4-2h6"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                                    Software Engineer (Junior)
                                </h3>
                                <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    06/2021 - 05/2022
                                </time>
                                <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
                                    Laravel - Mysql - Docker
                                </p>
                            </li>
                            <li className="mb-6 sm:mb-8 ms-6">
                                <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full -start-2.5 sm:-start-3 ring-6 sm:ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm2 2l2 2-2 2m4-2h6"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                                    Desenvolvedor Full Stack & Suporte (Junior)
                                </h3>
                                <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    08/2020 - 06/2021
                                </time>
                                <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
                                    Laravel - VueJS - MySQL - OracleDB - Docker
                                </p>
                            </li>
                            <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full -start-2.5 sm:-start-3 ring-6 sm:ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm2 2l2 2-2 2m4-2h6"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                                    Desenvolvedor Full Stack (Estagiário)
                                </h3>
                                <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    04/2020 - 07/2020
                                </time>
                                <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
                                    Flask - PostgreSQL
                                </p>
                            </li>
                        </ol>
                    </div>
                    {/* Formação Acadêmica */}
                    <div className="flex flex-col items-center max-w-md">
                        <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                            Formação Acadêmica
                        </h2>
                        <ol className="relative border-s border-gray-200 dark:border-gray-700 w-full">
                            <li className="mb-6 sm:mb-8 ms-6">
                                <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full -start-2.5 sm:-start-3 ring-6 sm:ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 2.5l6.5 3.25L12 11 5.5 7.75 12 4.5zm-10 6.5v6l10 5 10-5v-6l-10 5-10-5zm10 2.5l6.5-3.25v3.5L12 16l-6.5-3.25v-3.5L12 12.5z" />
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                                    Especialização em Segurança da Informação
                                </h3>
                                <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    2022 - 2023
                                </time>
                                <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
                                    <b>SENAC Brasil</b>
                                </p>
                                <p className="mb-2 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
                                    Pós-graduação
                                </p>
                            </li>
                            <li className="mb-6 sm:mb-8 ms-6">
                                <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full -start-2.5 sm:-start-3 ring-6 sm:ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 2.5l6.5 3.25L12 11 5.5 7.75 12 4.5zm-10 6.5v6l10 5 10-5v-6l-10 5-10-5zm10 2.5l6.5-3.25v3.5L12 16l-6.5-3.25v-3.5L12 12.5z" />
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                                    Análise e Desenvolvimento de Sistemas
                                </h3>
                                <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    2018 - 2021
                                </time>
                                <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
                                    <b>Fatec Cruzeiro - Prof. Waldomiro May</b>
                                </p>
                                <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
                                    Graduação
                                </p>
                            </li>
                            <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full -start-2.5 sm:-start-3 ring-6 sm:ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 2.5l6.5 3.25L12 11 5.5 7.75 12 4.5zm-10 6.5v6l10 5 10-5v-6l-10 5-10-5zm10 2.5l6.5-3.25v3.5L12 16l-6.5-3.25v-3.5L12 12.5z" />
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                                    Tecnologia da Informação
                                </h3>
                                <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    2015 - 2017
                                </time>
                                <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
                                    <b>Etec Cruzeiro - Prof. José Sant’Ana de Castro em Cruzeiro</b>
                                </p>
                                <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
                                    Curso Técnico
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}