import styled from 'styled-components';
// Components
import { ActionButton } from './ActionButton';
import { CopyButton } from './CopyButton';

const ActionBlockStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  column-gap: 1.5rem;
  position: relative;
`;
const PhoneNomber = styled.span`
  color: ${({ theme }) => theme.colors.txtPrimaryClr};
  font-size: 1.5em;
`;
const Arrow = styled.span`
  max-width: 50px;
  height: 4px;
  display: flex;
  flex: 1 0 auto;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  &::after,
  &::before {
    content: '';
    width: 20px;
    height: inherit;
    position: absolute;
    left: 0;
    background-color: inherit;
    border-radius: inherit;
    transform-origin: center left;
  }
  &::after {
    top: -1px;
    transform: rotate(45deg);
  }
  &::before {
    top: 1px;
    transform: rotate(-45deg);
  }
`;
export const ActionBlock = () => {
  return (
    <ActionBlockStyle>
      <ActionButton>закажи такси</ActionButton>
      <Arrow></Arrow>
      <PhoneNomber>0504645221</PhoneNomber>
      <CopyButton />
    </ActionBlockStyle>
  );
};
