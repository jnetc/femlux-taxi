import { useState, MouseEvent } from 'react';
import styled from 'styled-components';

const ThemeButtonStyle = styled.div`
  --theme-button-width-height: 30px;
  width: var(--theme-button-width-height);
  height: var(--theme-button-width-height);

  position: relative;
  /* background-color: white; */
`;

const SunStyle = styled.span`
  width: var(--theme-button-width-height);
  height: var(--theme-button-width-height);
  position: absolute;
  background-color: ${({ theme }) => theme.colors.txtPrimaryClr};
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 50%,
    #f0f0f0 50%
  );
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      #f0f0f0 30%,
      rgba(0, 0, 0, 0) 31%,
      rgba(0, 0, 0, 0) 50%,
      #f0f0f0 50%
    );
    transform: rotate(45deg);
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      #f0f0f0 30%,
      rgba(0, 0, 0, 0) 31%,
      rgba(0, 0, 0, 0) 50%,
      #f0f0f0 50%
    );
    transform: rotate(0deg);
  }
`;
const MoonStyle = styled.span`
  width: var(--theme-button-width-height);
  height: var(--theme-button-width-height);
  position: absolute;
  background-color: ${({ theme }) => theme.colors.txtPrimaryClr};
  border-radius: 50%;
`;

export const ThemeButton = () => {
  return (
    <ThemeButtonStyle>
      <SunStyle />
      {/* <MoonStyle /> */}
    </ThemeButtonStyle>
  );
};
