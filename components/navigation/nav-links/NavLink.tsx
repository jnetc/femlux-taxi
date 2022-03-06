import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavLinkStyle = styled.a`
  color: ${({ theme }) => theme.colors.txtPrimaryClr};
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const NavLink: FC<{ url: string }> = ({ children, url }) => {
  return (
    <Link href={url} passHref>
      <NavLinkStyle>{children}</NavLinkStyle>
    </Link>
  );
};
