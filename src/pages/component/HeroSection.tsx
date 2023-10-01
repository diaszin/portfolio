import LinkedinLogo from "../icons/LinkedinLogo";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function HeroSection() {
  return (
    <section>
      <div className="flex-row ">
          <div className="h-[28rem] flex flex-col justify-center items-start dark:border-2 dark:border-sky-200 dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
            <div className="flex flex-col justify-center items-center w-full gap-3">
                <h2 className=" text-4xl font-bold">Seja Bem Vindo !</h2>
                <p className="w-[42rem] text-center font-mono">
                  Olá, sou Kaique Dias, um desenvolvedor apaixonado pelo que faço. Meu
                  compromisso vai além do simples código: acredito em valorizar o
                  processo, entender o negócio e, principalmente, criar um código limpo
                  e bem estruturado.
                </p>
                <button className={"w-[20rem] h-[2rem] rounded-sm flex flex-row justify-center font-semibold items-center gap-4 bg-[darkblue] "+inter.className}><LinkedinLogo className="fill-[white]" size="1rem"/>Conheça mais em meu LinkedIn</button>
            </div>
          </div>
      </div>
    </section>
  );
}
