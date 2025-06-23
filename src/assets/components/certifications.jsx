import { Fragment, useState } from "react"


export const Certifications = () => {

    const [logos] = useState({
        linuxtips: "https://media.licdn.com/dms/image/v2/C4D0BAQGCpcP1gP61Fw/company-logo_200_200/company-logo_200_200/0/1659929738274?e=1756339200&v=beta&t=j_69qT96P2OZX0pTcDcxnpfrJUo0Fcs4sZF83f79_tg",
        udemy: "https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_200_200/company-logo_200_200/0/1723593046388/udemy_logo?e=1756339200&v=beta&t=aantC5jR1-RG8YwCmfQmnmABDCeR0LCqR6auwJV9b84",
        fatecCruzeiro: "https://media.licdn.com/dms/image/v2/C560BAQGIVg88ixdZ5Q/company-logo_200_200/company-logo_200_200/0/1631381549380?e=1756339200&v=beta&t=TKcgKfkLFMZiU_p10uJGxf_cmeIsoxBoQ-XIAkM5ycU"
    });

    return (
        <Fragment>
            <div id="certifications-section" className="bg-[#1A1717] p-25">
                <div className="flex flex-col items-center">
                    <h1 className="text-[#fafafa] text-[24px] mb-4">Certificações</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <a
                        href="#"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src={logos.fatecCruzeiro}
                            alt=""
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Professor do Curso "Construindo APIs Django com Docker Compose e o Django Rest Framework"
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <b>Fatec Cruzeiro - Prof. Waldomiro May</b>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                01/2024
                            </p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src={logos.udemy}
                            alt=""
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Aprenda a Criar Servidores Virtuais com EC2 na Amazon AWS
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <b>Udemy</b>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                12/2023
                            </p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src={logos.linuxtips}
                            alt=""
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Descomplicando o Docker
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <b>LINUXtips</b>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                04/2023
                            </p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src={logos.udemy}
                            alt=""
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Criando poderosas API's RESTful com Django Rest Framework
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <b>Udemy</b>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                03/2023
                            </p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src={logos.udemy}
                            alt=""
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                React Native Criando aplicativos do zero ao avançado
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <b>Udemy</b>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                03/2023
                            </p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src={logos.udemy}
                            alt=""
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                React Js do zero ao avançado na prática
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <b>Udemy</b>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                06/2022
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}