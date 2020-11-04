import React from 'react';

import { Header } from '../src/components/Header/Header';

export default {
  title: 'Design System/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Main = Template.bind({});
