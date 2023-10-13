import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

interface CardProjectProps {
  title: string;
  stacks?: Array<string>;
  description?: string;
  githubLink?: string;
  imgSrc: string;
}

function sanatizeStackList(stacks: Array<string>): string {
  let sanatizeText = "";
  stacks.forEach((stack, ind) => {
    sanatizeText += stack;
    if (ind != (stacks.length-1)) {
      sanatizeText += " - ";
    }
  });
  return sanatizeText;
}

export default function CardProject(props: CardProjectProps) {
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 3,
        toggleActions: "restart none reverse complete",
      },
      x: 290,
      opacity: 1,
      duration: 3,
    });
  }, []);
  return (
    <div
      ref={cardRef}
      className="w-[50rem] opacity-0 h-[17rem] gap-11 dark:bg-[#333333] flex items-center justify-between p-10 overflow-hidden rounded-lg"
    >
      <div className="w-[30rem] flex flex-col gap-4">
        <h4 className="text-[#F0F0F0] text-lg font-bold">{props.title}</h4>
        <div className="text-[#D3D3D3] flex flex-col gap-4">
          {props.stacks && <h5>Stacks: {sanatizeStackList(props.stacks)}</h5>}
          <p>{props.description}</p>
        </div>
      </div>
      <div className="self-start  ">
        <Image
          className="mt-4 rounded-md"
          src={props.imgSrc}
          alt={"Imagem do projeto"}
          width={870}
          height={340}
          quality={100}
        />
      </div>
    </div>
  );
}
