import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const iconBoxSize = 24;

  return (
    <Wrapper>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
      <NativeSelect 
        value = {value} 
        onChange = {onChange}
      >
        {children}
      </NativeSelect>
      <Presentational
        aria-hidden
      >
        <SelectedValue>
          {displayedValue}
        </SelectedValue>
        <IconWrapper
          height = {iconBoxSize}
        >
          <Icon 
            id = "chevron-down"
            strokeWidth = {1}
            size = {iconBoxSize}
          />
        </IconWrapper>
      </Presentational>
    </Wrapper>
  );
};


const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  appearance: none;
  opacity: 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const Presentational = styled.div`
  display: inline-block;
  padding: 12px 16px;
  padding-right: 52px;
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SelectedValue = styled.span`
  font-size: ${16 / 16}rem;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: ${p => p.height}px;
  right: 4px;
  pointer-events: none;
`;

export default Select;
