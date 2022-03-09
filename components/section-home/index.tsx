import styled from 'styled-components';
import { ActionBlock } from './action-buttons/ActionBlock';

const SectionHomeStyle = styled.section`
  height: calc(100vh - var(--lang-button-height-width) - 4rem);
  display: flex;
  align-items: center;
  column-gap: 10rem;
`;

const RightBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 60%;
  border: 1px solid red;
`;
const LeftBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 40%;
  row-gap: 1.5rem;
`;

import { Title } from '@Components/title/Title';
import { Description } from '@Components/description/Description';

const Main = () => {
  return (
    <SectionHomeStyle>
      <LeftBlockStyle>
        <Title>Быстро Надежно Безопасно!</Title>
        <Description>
          Если желаете во время, с комфортом и с хорошим настроением добраться
          до места назначения - звоните и заказывайте!
        </Description>
        <ActionBlock />
      </LeftBlockStyle>
      <RightBlockStyle>IMAGE</RightBlockStyle>
    </SectionHomeStyle>
  );
};

export default Main;
