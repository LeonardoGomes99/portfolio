import { Fragment, useState } from "react"

export const Introduction = () => {
    const [profilePicture] = useState("https://media.licdn.com/dms/image/v2/D4D03AQElOG26d9fadg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704054876469?e=1755734400&v=beta&t=Yqcy8p_FomT9Fx7jkG5I-eFprRugaht3a4cLPdwOV6U");
    return (
        <Fragment>
            <div id="introduction-section" className="flex justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 animated-background bg-gray-900 dark:bg-gray-900 overflow-auto">
                <article className="flex flex-col items-center mt-10 sm:mt-14 lg:mt-20">
                    <img
                        className="w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full object-cover"
                        src={profilePicture}
                        alt="Profile"
                    />
                    <div className="mt-6 sm:mt-8 lg:mt-10">
                        <p className="font-mono text-2xl sm:text-3xl lg:text-4xl text-gray-100 dark:text-gray-200 mt-4 text-center">
                            Desenvolvedor Full Stack/Cycle
                        </p>
                        <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
                            <p className="font-sans text-base sm:text-lg lg:text-xl text-gray-100 dark:text-gray-200 leading-relaxed mt-6 text-center">
                                Profissional altamente qualificado com experiência comprovada no desenvolvimento de ERPs, plataformas de BI e sistemas financeiros, combinando habilidades técnicas avançadas com conhecimento em segurança da informação.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </Fragment>
    )
}