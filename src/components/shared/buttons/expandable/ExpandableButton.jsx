import { useState } from "react";
import * as styled from "./expandableButtonStyled";

export default function ExpandableButton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const tickAngle = isOpen ? 180 : 0;

  return (
    <styled.ExpandableButtonContainer>
      <styled.ExpandableButton isOpen={isOpen} onClick={clicked}>
        {props.text}
        <styled.Tick angle={tickAngle} className="material-icons">
          expand_more
        </styled.Tick>
      </styled.ExpandableButton>

      {isOpen ? <ExpandableContent 
        content={props.dropdownContent} 
        width={props.width} /> : null}
    </styled.ExpandableButtonContainer>
  );

  function clicked() {
    setIsOpen(!isOpen);
  }
}

function ExpandableContent(props) {
  return (
    <styled.ExpandableContentContainer width={props.width}>
      {props.content}
    </styled.ExpandableContentContainer>
  );
}