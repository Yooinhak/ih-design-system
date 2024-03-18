import { FiCheck } from 'react-icons/fi';
import styled from 'styled-components';

import Component from './index';

export default {
  title: 'shared/Button',
  component: Component,
  argTypes: {},
};

export const Basic = args => {
  return (
    <>
      <Component {...args} />
    </>
  );
};

export const Template = () => {
  return (
    <>
      <Title>size</Title>
      <Divider>
        <Component size={'s'} />
        <Component size={'m'} />
        <Component size={'l'} />
      </Divider>
      <Title>fill</Title>
      <Divider>
        <Component />
        <Component disabled />
        <Component error />
      </Divider>
      <Title>outline</Title>
      <Divider>
        <Component outline />
        <Component outline />
        <Component outline />
        <Component outline disabled />
        <Component outline error />
      </Divider>
      <Title>layout</Title>
      <Divider>
        <Component />
        <Component icon={<FiCheck />} iconPosition={'left'} />
        <Component icon={<FiCheck />} iconPosition={'right'} />
        <Component icon={<FiCheck />} iconPosition={'right'} label={''} />
      </Divider>
      <Title>Loading</Title>
      <Divider>
        <Component loading={true} />
      </Divider>
    </>
  );
};

const Title = styled.div`
  margin: 15px 0;
`;
const Divider = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
