import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ActionIcon } from './ActionIcon';

const ActionButtonStyle = styled.a`
  padding: 1.5rem 4rem 1.5rem 2rem;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.txtPrimaryClr};
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: 0 10px 20px ${({ theme }) => theme.colors.primaryTransparant25},
    0 25px 50px ${({ theme }) => theme.colors.primaryTransparant15};
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  span {
    display: inline-block;
    transform: translateX(1rem);
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    box-shadow: none;
  }
  &:hover span {
    transform: translateX(0);
  }
  &:hover .phone-icon {
    opacity: 1;
    transform: translate(0, -50%) scale(1);
  }
`;

export const ActionButton: FC = ({ children }) => {
  return (
    <Link href={`tel:${+358054645221}`} passHref>
      <ActionButtonStyle>
        <ActionIcon />
        <span>{children}</span>
      </ActionButtonStyle>
    </Link>
  );
};
