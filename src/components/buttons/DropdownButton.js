import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/UseClickOutside";
import { DropdownButtonContainerStyled, DropdownButtonStyled, TickStyled, DropdownContentStyled } from "./DropdownButtonStyled";

export default function DropdownButton(props) {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const tickAngle = isOpen ? 180 : 0;

  useClickOutside(ref, clicked);

  return (
    <DropdownButtonContainerStyled>
      <DropdownButtonStyled isOpen={isOpen} onClick={clicked}>
        {props.text}
        <TickStyled angle={tickAngle} className="material-icons">
          expand_more
        </TickStyled>
      </DropdownButtonStyled>

      {isOpen ? <DropdownContent content={props.dropdownContent} reference={ref} /> : null}
    </DropdownButtonContainerStyled>
  );

  function clicked(e) {
    e?.stopPropagation();
    setIsOpen(!isOpen);
  }
}

function DropdownContent(props) {
  return (
    <DropdownContentStyled ref={props.reference}>
      {props.content}
    </DropdownContentStyled>
  );
}