import { Fragment, useState } from "react"


export const Projects = () => {
    return (
        <Fragment>
            <div id="projects-section" className="bg-[#151212] min-h-screen py-8 sm:py-12 lg:py-16">
                <div className="flex flex-col items-center mb-8 sm:mb-12">
                    <h1 className="text-[#fafafa] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                        Projetos
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-full px-4 sm:px-6 lg:px-8">
                    {[
                        {
                            title: 'Bancos de Dados Docker',
                            description: 'Este projeto fornece um único Dockerfile e Docker Compose que pode ser usado para criar containers para vários bancos de dados diferentes.',
                            imgSrc: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fcloudx-labs%2Fposts%2Fmain%2Fposts%2Fnavarroaxel%2Fassets%2Fdocker-databases-cover.jpg",
                            imgAlt: 'Docker & DBs',
                            href: 'https://github.com/LeonardoGomes99/docker-databases',
                        },
                        {
                            title: 'Django API, PostgresSQL & Docker',
                            description: 'Este projeto fornece uma API RESTful desenvolvida com Django, conectada a um banco de dados PostgreSQL. O projeto também inclui um Dockerfile que permite que você facilmente configure e execute a API em um container Docker.',
                            imgSrc: "https://datascientest.com/en/files/2023/05/django1.jpg",
                            imgAlt: 'Django',
                            href: 'https://github.com/LeonardoGomes99/django-api-exemplo',
                        },
                        {
                            title: 'Algoritmos IA',
                            description: 'Projeto da faculdade de desenvolvimento onde o JavaScript implementa diversos algoritmos de inteligência artificial (IA) para um jogo de tabuleiro.',
                            imgSrc: "https://uploads.startups.com.br/2025/03/AsLBE4qe-inteligencia-artificial-cerebro-1024x596.webp",
                            imgAlt: 'IA',
                            href: 'https://github.com/LeonardoGomes99/Game.Busca',
                        },
                        {
                            title: 'Sistema de Agenda - Laravel, PostgresSQL & Docker',
                            description: 'Este projeto oferece uma agenda completa desenvolvida em Laravel, utilizando MySQL como banco de dados e com a opção de rodar em ambiente Docker.',
                            imgSrc: "https://belenos.me/media/2021-06-laravel.webp",
                            imgAlt: 'Laravel',
                            href: 'https://github.com/LeonardoGomes99/Agenda-VEX',
                        },
                        {
                            title: 'API Chamados React.js / Spring Boot / S3',
                            description: 'API de gerenciamento de chamados desenvolvida com Spring Boot no backend e React.js no frontend, integrando armazenamento de arquivos com Amazon S3 para anexos e evidências.',
                            imgSrc: "https://blog.codersee.com/wp-content/uploads/2024/09/codersee_spring_boot_kotlin_aws_s3client_s3_object_storage_featured_image.png",
                            imgAlt: 'Springboot',
                            href: 'https://github.com/LeonardoGomes99/springboot-sistema-chamados-s3',
                        },
                        {
                            title: 'Scripts de Configuração para Linux',
                            description: 'Scripts de configuração para Arch Linux voltados à instalação e otimização de drivers de vídeo, além do ajuste de interfaces gráficas como KDE, GNOME e outras distribuições visuais populares.',
                            imgSrc: "https://linuxiac.b-cdn.net/wp-content/uploads/2022/06/arch-steam.jpg",
                            imgAlt: 'linux-arch',
                            href: 'https://github.com/LeonardoGomes99/archlinux-for-gaming',
                        },
                        {
                            title: 'Aplicação para leitura de PNG e Upscale de Imagem',
                            description: 'Aplicação desenvolvida em Python para leitura de arquivos de Imagem e aprimoramento de imagens via técnicas de upscale, com foco na melhoria de resolução e qualidade visual.',
                            imgSrc: "https://www.img2go.com/assets/blog/upscale_img.png",
                            imgAlt: 'python-upscale',
                            href: 'https://github.com/LeonardoGomes99/archlinux-for-gaming',
                        },
                        {
                            title: '',
                            description: 'Veja mais no meu Github....',
                            imgSrc: "https://miro.medium.com/v2/resize:fit:1400/0*oqeffc2fwt1Qfm0p.jpg",
                            imgAlt: 'github',
                            href: 'https://github.com/LeonardoGomes99?tab=repositories',
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