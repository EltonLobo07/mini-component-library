import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper 
      value = {value} 
      onChange = {onChange}
    >
      <SelectedWrapper>
        <span>
          {displayedValue}
        </span>
        <Icon 
          id = "chevron-down"
        />
      </SelectedWrapper>
      <label>
        <VisuallyHidden>
          {label}
        </VisuallyHidden>
        <InternalSelect>
          {children}
        </InternalSelect>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  font-family: "Roboto", sans-serif;
  background-color: ${COLORS.transparentGray15};
  border-radius: 2px;

  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black}
  }

  position: relative;
`;

const SelectedWrapper = styled.div`
  display: inline-flex;
  column-gap: 24px;
  align-items: center;
  padding: 12px 16px;
`;

const InternalSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export default Select;
