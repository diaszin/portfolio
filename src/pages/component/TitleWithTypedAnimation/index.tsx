import { useEffect, useState } from "react";
import style from "./style.module.css";

export default function TitleWithTypeAnimation(props: { title: string }) {
  const [titleAnimated, setTitleAnimated] = useState<string>("");
  useEffect(()=>{
    let index = 0
    const intervalID = setInterval(()=>{
        let letter = props.title[index]
        setTitleAnimated(prevText => prevText+letter)
        index++
        if(index == props.title.length){
            clearInterval(intervalID) // função cancela o setInterval
        }
    }, 200)

    return ()=> clearInterval(intervalID)
  }, [props.title])

  return (
    <h2 className={`${style.typed} text-right text-4xl font-bold font-mono`}>
      {titleAnimated}
    </h2>
  );
}
