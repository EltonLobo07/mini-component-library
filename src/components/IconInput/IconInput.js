import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  if (size !== "small" && size !== "large") {
    throw new Error("Invalid size");
  }

  if (icon !== "search" && icon !== "at-sign") {
    throw new Error("Invalid icon");
  }

  let iconBoxSize = 16;
  const inputStyleProps = {
    $paddingLeft: iconBoxSize + 8,
    $paddingTop: 4,
    $paddingBottom: 4,
    $fontSize: 14,
    $borderBottomWidth: 1,
    $width: width
  };
  if (size === "large") {
    iconBoxSize = 24;
    inputStyleProps.$paddingLeft = iconBoxSize + 12;
    inputStyleProps.$paddingTop = 8;
    inputStyleProps.$paddingBottom = 7;
    inputStyleProps.$fontSize = 18;
    inputStyleProps.$borderBottomWidth = 2; 
  }

  return (
    <Wrapper>
      <IconWrapper
        aria-hidden
      >
        <Icon 
          id = {icon}
          strokeWidth = {1}
          size = {iconBoxSize}
        />
      </IconWrapper>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
      <Input 
        type = "text"
        placeholder = {placeholder}
        {...inputStyleProps}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black}
  }
`;

const Input = styled.input`
  width: ${p => p.$width}px;
  font-size: ${p => p.$fontSize / 16}rem;
  border: none;
  border-bottom: ${p => p.$borderBottomWidth}px solid black;
  padding-left: ${p => p.$paddingLeft}px;
  color: inherit;
  font-weight: 700;
  &:focus {
    outline-offset: 2px;
  }
  &::placeholder {
    color: ${COLORS.gray300};
    font-weight: 400;
  }
  padding-top: ${p => p.$paddingTop}px;
  padding-bottom: ${p => p.$paddingBottom}px;
`;

const IconWrapper = styled.div` 
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: max-content;
`;

export default IconInput;
