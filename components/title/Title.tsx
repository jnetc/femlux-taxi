import { FC } from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
  font-size: 6em;
  text-transform: uppercase;
  line-height: 1.1;
  background: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Title: FC = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};
