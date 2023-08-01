/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const PROGRESS_SIZE_VARS = {
  small: {
    "--height": "8px"
  },
  medium: {
    "--height": "12px"
  },
  large: {
    "--height": "16px"
  }
};

const WRAPPER_SIZE_VARS = {
  large: {
    "--padding": "4px",
    "--borderRadius": "8px"
  }
};

const Wrapper = styled.div`
  display: inline-block;
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding, 0);
  border-radius: var(--borderRadius, 4px);
  box-shadow: inset 0 2px 4px 0 ${COLORS.transparentGray15};
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${p => p.value}%;
  background-color: ${COLORS.primary};
  height: var(--height);
  border-radius: 4px ${p => p.value === 100 ? "4px" : "0"} ${p => p.value === 100 ? "4px" : "0"} 4px;
`;

const MIN_VALUE = 0;
const MAX_VALUE = 100;

const ProgressBar = ({ value, size, label = "progress bar" }) => {
  let currentValue;
  if (typeof value === "number") {
    currentValue = Math.max(Math.min(value, MAX_VALUE), 0);
  }

  return (
    <Wrapper
      role = "progressbar"
      aria-valuemin = {MIN_VALUE}
      aria-valuemax = {MAX_VALUE}
      aria-aria-valuenow = {typeof currentValue === "number" ? currentValue : undefined}
      aria-label = {label}
      style = {WRAPPER_SIZE_VARS[size]}
    >
      <Progress 
        style = {PROGRESS_SIZE_VARS[size]}
        value = {currentValue}
      />
    </Wrapper>
  );
};

export default ProgressBar;
