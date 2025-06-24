import { Fragment, useState } from "react"


export const Certifications = () => {
    const [logos] = useState({
        linuxtips: "https://media.licdn.com/dms/image/v2/C4D0BAQGCpcP1gP61Fw/company-logo_200_200/company-logo_200_200/0/1659929738274?e=1756339200&v=beta&t=j_69qT96P2OZX0pTcDcxnpfrJUo0Fcs4sZF83f79_tg",
        udemy: "https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_200_200/company-logo_200_200/0/1723593046388/udemy_logo?e=1756339200&v=beta&t=aantC5jR1-RG8YwCmfQmnmABDCeR0LCqR6auwJV9b84",
        fatecCruzeiro: "https://media.licdn.com/dms/image/v2/C560BAQGIVg88ixdZ5Q/company-logo_200_200/company-logo_200_200/0/1631381549380?e=1756339200&v=beta&t=TKcgKfkLFMZiU_p10uJGxf_cmeIsoxBoQ-XIAkM5ycU"
    });
    return (
        <Fragment>
            <div id="certifications-section" className="bg-[#1A1717] min-h-screen py-8 sm:py-12 lg:py-16">
                <div className="flex flex-col items-center mb-8 sm:mb-12">
                    <h1 className="text-[#fafafa] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                        Certificados
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-full px-4 sm:px-6 lg:px-8">
                    {[
                        {
                            title: 'Django Celery Mastery: Python Asynchronous Task Processing',
                            description: 'Curso focado no uso do Celery com Django para processamento assíncrono de tarefas em segundo plano, como envio de e-mails, geração de relatórios e integração com filas como Redis e RabbitMQ.',
                            imgSrc: logos.udemy,
                            imgAlt: 'UDEMY',
                            href: 'https://www.udemy.com/certificate/UC-f03642bb-0500-4cb1-a61c-dbedeacfb0f2/',
                        },
                        {
                            title: 'Professor do Curso "Construindo APIs Django com Docker Compose e o Django Rest Framework"',
                            description: 'Atuei como instrutor neste curso que ensina a construir APIs robustas com Django Rest Framework, utilizando Docker Compose para orquestração de containers e PostgreSQL como banco de dados.',
                            imgSrc: logos.fatecCruzeiro,
                            imgAlt: 'FATEC',
                            href: 'https://www.linkedin.com/in/leonardo-gomes-63a2b717b/details/certifications/1707083772080/single-media-viewer/?profileId=ACoAACqUtc4BSCzlBIuFTS5-qIycDScK3iAoMpU',
                        },
                        {
                            title: 'Aprenda a Criar Servidores Virtuais com EC2 na Amazon AWS',
                            description: 'Curso prático que ensina a configurar, acessar e gerenciar instâncias EC2 na AWS, incluindo criação de servidores, configurações de segurança e deploy de aplicações na nuvem.',
                            imgSrc: logos.udemy,
                            imgAlt: 'UDEMY',
                            href: 'https://www.udemy.com/certificate/UC-30d69fc7-b57a-4c0b-bde1-55b4311df347/',
                        },
                        {
                            title: 'Descomplicando o Docker',
                            description: 'Curso completo sobre Docker, abordando desde os conceitos básicos de containers até a criação de ambientes isolados para desenvolvimento, testes e produção de aplicações modernas.',
                            imgSrc: logos.linuxtips,
                            imgAlt: 'LINUXTIPS',
                            href: 'https://school.linuxtips.io/certificate_v2/634ffe2b3e60c56d9901655f/user/6429e529b9387e6ac308a5e9',
                        },
                        {
                            title: "Criando poderosas API's RESTful com Django Rest Framework",
                            description: 'Construção de APIs RESTful robustas e escaláveis com Django Rest Framework, abordando autenticação, controle de permissões, versionamento de endpoints e boas práticas do desenvolvimento backend moderno.',
                            imgSrc: logos.udemy,
                            imgAlt: 'UDEMY',
                            href: 'https://www.udemy.com/certificate/UC-6f7596d5-2098-47bb-8107-16b05145615a/',
                        },
                        {
                            title: "React Native Criando aplicativos do zero ao avançado",
                            description: 'Curso que ensina a criar aplicações mobile nativas para Android e iOS com React Native, abordando navegação, consumo de APIs, persistência de dados e publicação nas lojas.',
                            imgSrc: logos.udemy,
                            imgAlt: 'Udemy',
                            href: 'https://www.udemy.com/certificate/UC-70a396ef-36fb-4028-a2b1-16c4e7065afe/',
                        },
                        {
                            title: "React Js do zero ao avançado na prática",
                            description: 'Curso prático de React.js, cobrindo desde os fundamentos da biblioteca até técnicas avançadas como gerenciamento de estado com Redux, hooks personalizados e integração com APIs.',
                            imgSrc: logos.udemy,
                            imgAlt: 'Udemy',
                            href: 'https://www.udemy.com/certificate/UC-c45a6db5-6ac2-474e-b591-09d53a7d17b0',
                        },
                    ].map((project, index) => (
                        <a
                            key={index}
                            href={project.href}
                            aria-label={`Ver projeto ${project.title}`}
                            className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 w-full max-w-4xl mx-auto"
                        >
                            <div className="flex-shrink-0 w-full md:w-64 lg:w-80 p-4">
                                <img
                                    className="object-cover w-full h-48 sm:h-56 md:h-full rounded-lg"
                                    src={project.imgSrc}
                                    alt={project.imgAlt}
                                />
                            </div>
                            <div className="flex flex-col justify-between p-4 sm:p-6 lg:p-8 w-full">
                                <h5 className="mb-3 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {project.title}
                                </h5>
                                <p className="mb-4 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-400">
                                    <b>{project.description}</b>
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}