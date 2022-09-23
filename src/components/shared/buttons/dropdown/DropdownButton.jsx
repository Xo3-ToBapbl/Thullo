import { useRef, useState } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import * as styled from "./dropdownButtonStyled";

export default function DropdownButton(props) {
  const contentRef = useRef();
  const buttonRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const tickAngle = isOpen ? 180 : 0;

  useClickOutside(buttonRef, contentRef, clicked);

  function clicked() {
    setIsOpen(!isOpen);
  }

  return (
    <styled.DropdownButtonContainer>
      <styled.DropdownButton ref={buttonRef} isOpen={isOpen} onClick={clicked}>
        {props.text}
        <styled.Tick angle={tickAngle} className="material-icons">
          expand_more
        </styled.Tick>
      </styled.DropdownButton>

      {isOpen ? <DropdownContent 
        content={props.dropdownContent} 
        reference={contentRef}
        width={props.width} /> : null}
    </styled.DropdownButtonContainer>
  );
}

function DropdownContent(props) {
  return (
    <styled.DropdownContentContainer ref={props.reference} width={props.width}>
      {props.content}
    </styled.DropdownContentContainer>
  );
}