import React from 'react';
import { Icon } from '../src/components/Icon/Icon';

export default {
    title: "Design System/Icon",
    component: Icon,
    argTypes: {
        color: { control: 'color' },
    },
};

const Template = (args) => <Icon {...args} />;

export const Tipster = Template.bind({});

Tipster.args = {
   type: "tipster",
   size: "40" 
}

export const Quiz = Template.bind({});

Quiz.args = {
   type: "quiz",
   size: "40" 
}