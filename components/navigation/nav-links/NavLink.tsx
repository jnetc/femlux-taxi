import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavLinkStyle = styled.a`
  color: ${({ theme }) => theme.colors.txtPrimaryClr};
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavLink: FC<{ url: string }> = ({ children, url }) => {
  return (
    <Link href={url} passHref>
      <NavLinkStyle>{children}</NavLinkStyle>
    </Link>
  );
};
