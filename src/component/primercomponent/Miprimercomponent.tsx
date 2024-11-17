import {FC} from "react";

interface IPropsMiprimercomponent{
    text: String;
    color: String;
    fontSize?: number;
}

export const Miprimercomponent:
FC<IPropsMiprimercomponent> = ({text, color, fontSize}) => {
  return (
  <div style={{color:`${color}`, fontSize:`${fontSize || 1}rem`}}>
    <p></p>{text}
    </div>);
}
