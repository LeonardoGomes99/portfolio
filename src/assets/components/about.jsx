import { Fragment, useState } from "react"

export const About = () => {
    const [profilePicture] = useState("https://media.licdn.com/dms/image/v2/D4D03AQElOG26d9fadg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704054876469?e=1755734400&v=beta&t=Yqcy8p_FomT9Fx7jkG5I-eFprRugaht3a4cLPdwOV6U");
    return (
        <Fragment>
            <div className="flex justify-center">
                <article className="flex flex-col items-center">
                    <img className="w-128 h-128 rounded-full object-cover" src={profilePicture} alt="Profile" />
                    <div className="mt-15">
                        <p className="antialiased font-mono text-[33px] text-[#fafafa] mt-4 text-center">
                            Desenvolvedor Full Stack/Cycle
                        </p>
                        <div className="box-border h-80 w-180">
                            <p className="antialiased font-sans text-wrap text-[20px] text-[#fafafa] mt-4 text-center">
                                Proativo, curioso e um entusiasta por tecnologia, busco novos desafios para aplicar meus conhecimentos e fazer a diferença.
                                Propondo alternativas inovadoras para problemas e aprimorando minhas habilidades continuamente. Acredito na comunicação
                                transparente e no feedback como pilares para o sucesso em equipe e nos projetos.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </Fragment>
    )
}