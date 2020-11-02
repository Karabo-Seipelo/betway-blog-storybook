import React from 'react';
import { SideBar } from '../src/components/SideBar/SideBar';

export default {
    title: "Design System/SideBar",
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => (
    <SideBar {...args}>testing</SideBar>
);

export const MostRead = Template.bind({});

MostRead.args = {
    title: "most read"
}