import { useState } from "react";
import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";
import { FormInput } from "../../general/auth/authFormStyled";
import IconButton from "../buttons/IconButton";

export const PasswordInputContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: ${sizes.halfOffsetRem}rem;
`;

const passwordInvisibleState = {
  type: "password",
  icon: "visibility"
}

const passwordVisibleState = {
  type: "text",
  icon: "visibility_off"
}

export default function PasswordInput(props) {
  const [state, setType] = useState(passwordInvisibleState);
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

  function visibilityIconClicked(currentState, e) {
    const newState = currentState.type === "password" ?
      passwordVisibleState : 
      passwordInvisibleState;

    setType(newState);
  }
}