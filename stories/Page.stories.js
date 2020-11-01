import React from 'react';

import { Page } from '../src/components/Page/Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Design System/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
