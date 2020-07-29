import React from "react";

function ButtonLink(props) {
  //props => { className: "O que alguém passar", href: "/" }
  // as {} são utilizadas para colocar o JS dentro do HTML, que está dentro do JS. Usado sempre para valores dinâmicos

  console.log(props);

  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
