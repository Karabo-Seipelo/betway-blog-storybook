import React from 'react';
import { Tag } from '../src/components/Tag/Tag';

export default {
    title: "Design System/Tag",
    component: Tag,
    argTypes: {
        backgroundColor: { control: 'color' },
        fontColor: { control: 'color' },
        headerColor: { control: 'color' },
    }
};

export const Tags = (args) => (
    <div>
        <Tag tagName="Tags" {...args} header={true}/>
        <Tag tagName="Premier league" {...args}/>
        <Tag tagName="Arsenal" {...args}/>
        <Tag tagName="Manchester united" {...args}/>
        <Tag tagName="Tottenham" {...args}/>
        <Tag tagName="Six nations" {...args}/>
    </div>
);

Tags.storyName = 'Tags';