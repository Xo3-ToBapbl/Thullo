import IconButton from "../buttons/IconButton";
import styled from "styled-components";
import { useState } from "react";
import { sizes } from "../../../resources/constants/sizes";
import { FormInput } from "./formInputStyled";

export const PasswordInputContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: ${sizes.halfOffsetRem}rem;
`;

const passwordInvisibleState = {
  type: "password",
  icon: "visibility"
};

const passwordVisibleState = {
  type: "text",
  icon: "visibility_off"
};

export default function PasswordInput(props) {
  const [state, setType] = useState(passwordInvisibleState);
  
  function visibilityIconClicked(currentState) {
    const newState = currentState.type === "password" ?
      passwordVisibleState : 
      passwordInvisibleState;

    setType(newState);
  }

  return (
    <PasswordInputContainer>
      <FormInput
        required={props.required}
        value={props.value}
        placeholder={props.placeholder} 
        onChange={props.onChange}
        name={props.name}
        minLength={5} 
        disabled={props.disabled}
        type={state.type}
        ref={props.passwordRef}
        autoComplete="off"
        onBlur={props.onBlur}
        style={{flexGrow: 1}} />

      <IconButton 
        iconSize={3} 
        icon={state.icon} 
        onClick={visibilityIconClicked.bind(null, state)}/>
    </PasswordInputContainer>
  );
}