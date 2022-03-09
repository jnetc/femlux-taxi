import { FC } from 'react';
import styled from 'styled-components';

const DescriptionStyle = styled.p`
  font-size: 1.5em;
  line-height: 1.3;
`;
export const Description: FC = ({ children }) => {
  return <DescriptionStyle>{children}</DescriptionStyle>;
};
