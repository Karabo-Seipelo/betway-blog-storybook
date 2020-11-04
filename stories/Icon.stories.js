import React from 'react';
import { Icon } from '../src/components/Icon/Icon';

export default {
    title: "Design System/Icon",
    component: Icon,
    argTypes: {
        color: { control: 'color' },
    },
};

export const AllIcons = (args) => (
    <div>
        <Icon type="tipster" size="40" title="tipster"/>
        <Icon type="quiz" size="40" title="quiz"/>
    </div>
);

AllIcons.storyName = 'All Icons';
