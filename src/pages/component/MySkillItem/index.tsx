import Image from "next/image"

interface MySkillItemProps{
  skillTitle: string
  skillImg: string
}

export default function MySkillItem(props: MySkillItemProps) {
  return (
    <div className="flex items-center gap-4 group">
      <Image src={props.skillImg} alt={"Imagem da minha habilidade"} width={60} height={0}/>
      <h5 className="font-bold text-gray-300 text-[2rem] group-hover:text-white">{props.skillTitle}</h5>
    </div>
  )
}
