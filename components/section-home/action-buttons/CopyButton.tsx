import { useState } from 'react';
import styled from 'styled-components';

const CopyButtonStyle = styled.button<{ copyInfo: string; isCopy: boolean }>`
  width: 2.8rem;
  height: 2.8rem;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  z-index: 5;

  &::after {
    content: ${({ copyInfo }) => copyInfo};
    position: absolute;
    top: -2.5rem;
    left: 50%;
    padding: 0.3rem 0.5rem;
    opacity: ${({ isCopy }) => (isCopy ? '1' : '0')};
    background-color: ${({ theme }) => theme.colors.txtPrimaryClr};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.bg};
    letter-spacing: 0.5px;
    white-space: nowrap;
    transform: ${({ isCopy }) =>
      isCopy ? 'translateX(-50%) scale(1)' : 'translate(-50%, 25px) scale(0)'};
    transition: all 0.3s cubic-bezier(0, 0.98, 0.44, 1.05);
    pointer-events: none;
    z-index: -1;
  }
`;

const CopyIconStyle = styled.span<{ isCopy: boolean }>`
  width: 14px;
  height: 17px;
  position: absolute;
  top: 15px;
  left: 15px;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  transform: ${({ isCopy }) => (isCopy ? 'scale(0)' : 'scale(1)')};
  &::after {
    content: '';
    width: inherit;
    height: inherit;
    position: inherit;
    top: -8px;
    left: -8px;
    border: 3px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.primary};
    border-left-color: ${({ theme }) => theme.colors.primary};
    border-radius: inherit;
  }
`;

const CopiedIconStyle = styled.span<{ isCopy: boolean }>`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 8px;
  left: 8px;
  transform-origin: 50% center;
  transition: all 0.3s ease-in-out;
  transform: ${({ isCopy }) => (isCopy ? 'scale(1)' : 'scale(0)')};
  &::after,
  &::before {
    content: '';
    height: 3px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &::after {
    width: 11px;
    top: 15px;
    left: 2px;
    transform: rotate(45deg);
  }
  &::before {
    width: 18px;
    left: 7px;
    top: 10px;
    transform: rotate(-55deg);
  }
`;

export const CopyButton = () => {
  const [isCopy, setIsCopy] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+358504645221');
    setIsCopy(true);
    const clean = setTimeout(() => {
      setIsCopy(false);
      clearTimeout(clean);
    }, 3000);
  };

  return (
    <CopyButtonStyle
      onMouseDown={copyPhoneNumber}
      title="copy phone number"
      aria-label="copy phone number"
      copyInfo={`'${'номер скопирован'}'`}
      isCopy={isCopy}
    >
      <CopiedIconStyle isCopy={isCopy} />
      <CopyIconStyle isCopy={isCopy} />
    </CopyButtonStyle>
  );
};
