import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/UseClickOutside";
import { DropdownButtonContainerStyled, DropdownButtonStyled, TickStyled, DropdownContentStyled } from "./DropdownButtonStyled";

export default function DropdownButton(props) {
  const contentRef = useRef();
  const buttonRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const tickAngle = isOpen ? 180 : 0;

  useClickOutside(buttonRef, contentRef, clicked);

  return (
    <DropdownButtonContainerStyled>
      <DropdownButtonStyled ref={buttonRef} isOpen={isOpen} onClick={clicked}>
        {props.text}
        <TickStyled angle={tickAngle} className="material-icons">
          expand_more
        </TickStyled>
      </DropdownButtonStyled>

      {isOpen ? <DropdownContent 
        content={props.dropdownContent} 
        reference={contentRef}
        width={props.width} /> : null}
    </DropdownButtonContainerStyled>
  );

  function clicked() {
    setIsOpen(!isOpen);
  }
}

function DropdownContent(props) {
  return (
    <DropdownContentStyled ref={props.reference} width={props.width}>
      {props.content}
    </DropdownContentStyled>
  );
}