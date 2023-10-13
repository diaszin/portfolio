import LinkedinLogo from "../icons/LinkedinLogo";
import { Inter } from 'next/font/google'
import TitleWithTypeAnimation from "./TitleWithTypedAnimation";
const inter = Inter({ subsets: ['latin'] })

export default function HeroSection() {
  return (
    <section>
      <div className="flex-row ">
          <div className="h-[28rem] flex flex-col justify-center items-start">
            <div className="flex flex-col justify-center items-center w-full gap-8">
                <TitleWithTypeAnimation title="Seja Bem Vindo !"/>
                <p className={"w-[28rem] text-justify font-mono"}>
                  Olá, sou Kaique Dias, um desenvolvedor apaixonado pelo que faço.  
                  Meu compromisso vai além do simples código: acredito em valorizar o
                  processo, entender o negócio e, principalmente, criar um código limpo
                  e bem estruturado.
                </p>
                <a href="https://www.linkedin.com/in/kaique-dias-aa1055212/" target="blank" className={"flex flex-row justify-center my-5 py-4 px-[6rem]  rounded-lg font-bold cursor-pointer items-center transition duration-300  gap-4 bg-[darkblue] hover:bg-[#191970] "+inter.className}><LinkedinLogo className="fill-[white]" size="1rem"/>Conheça mais em meu LinkedIn</a>
            </div>
          </div>
      </div>
    </section>
  );
}
