import { Fragment, useState } from "react"


export const Projects = () => {
    const [logos] = useState({
        linuxtips: "https://media.licdn.com/dms/image/v2/C4D0BAQGCpcP1gP61Fw/company-logo_200_200/company-logo_200_200/0/1659929738274?e=1756339200&v=beta&t=j_69qT96P2OZX0pTcDcxnpfrJUo0Fcs4sZF83f79_tg",
        udemy: "https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_200_200/company-logo_200_200/0/1723593046388/udemy_logo?e=1756339200&v=beta&t=aantC5jR1-RG8YwCmfQmnmABDCeR0LCqR6auwJV9b84",
        fatecCruzeiro: "https://media.licdn.com/dms/image/v2/C560BAQGIVg88ixdZ5Q/company-logo_200_200/company-logo_200_200/0/1631381549380?e=1756339200&v=beta&t=TKcgKfkLFMZiU_p10uJGxf_cmeIsoxBoQ-XIAkM5ycU"
    });
    return (
        <Fragment>
            <div id="projects-section" className="bg-[#151212] p-4 sm:p-2 lg:p-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-[#fafafa] text-[24px] mb-4">Projetos</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
                    <a
                        href="#"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-64 sm:h-72 md:h-48 md:w-32 lg:w-48 md:rounded-none md:rounded-l-lg"
                            src={logos.fatecCruzeiro}
                            alt="Fatec Cruzeiro"
                        />
                        <div className="flex flex-col justify-between p-4 sm:p-5 leading-normal">
                            <h5 className="mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Bancos de Dados Docker
                            </h5>
                            <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
                                <b>Este projeto fornece um único Dockerfile que pode ser usado para criar containers para vários bancos de dados diferentes.</b>
                            </p>
                            <p className="text-sm sm:text-base font-normal text-blue-600 dark:text-blue-400 hover:underline">
                                Acessar
                            </p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-64 sm:h-72 md:h-48 md:w-32 lg:w-48 md:rounded-none md:rounded-l-lg"
                            src={logos.udemy}
                            alt="Udemy"
                        />
                        <div className="flex flex-col justify-between p-4 sm:p-5 leading-normal">
                            <h5 className="mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Django API, PostgresSQL & Docker
                            </h5>
                            <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
                                <b>Este projeto fornece uma API RESTful desenvolvida com Django, conectada a um banco de dados PostgreSQL. O projeto também inclui um Dockerfile que permite que você facilmente configure e execute a API em um container Docker.</b>
                            </p>
                            <p className="text-sm sm:text-base font-normal text-blue-600 dark:text-blue-400 hover:underline">
                                Acessar
                            </p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-64 sm:h-72 md:h-48 md:w-32 lg:w-48 md:rounded-none md:rounded-l-lg"
                            src={logos.linuxtips}
                            alt="LinuxTips"
                        />
                        <div className="flex flex-col justify-between p-4 sm:p-5 leading-normal">
                            <h5 className="mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Algoritmos IA
                            </h5>
                            <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
                                <b>Projeto da faculdade de desenvolvimento onde o JavaScript implementa diversos algoritmos de inteligência artificial (IA) para um jogo de tabuleiro.</b>
                            </p>
                            <p className="text-sm sm:text-base font-normal text-blue-600 dark:text-blue-400 hover:underline">
                                Acessar
                            </p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-64 sm:h-72 md:h-48 md:w-32 lg:w-48 md:rounded-none md:rounded-l-lg"
                            src={logos.udemy}
                            alt="Udemy"
                        />
                        <div className="flex flex-col justify-between p-4 sm:p-5 leading-normal">
                            <h5 className="mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Sistema de Agenda - Laravel, PostgresSQL & Docker
                            </h5>
                            <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
                                <b>Este projeto oferece uma agenda completa desenvolvida em Laravel, utilizando MySQL como banco de dados e com a opção de rodar em ambiente Docker.</b>
                            </p>
                            <p className="text-sm sm:text-base font-normal text-blue-600 dark:text-blue-400 hover:underline">
                                Acessar
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </Fragment>
    );
}