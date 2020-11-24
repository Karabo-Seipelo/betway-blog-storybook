import React from 'react';
import { Tag } from '../src/components/Tag/Tag';

export default {
    title: "Organisms/Tags",
    component: Tag,
    argTypes: {
        backgroundColor: { control: 'color' },
        fontColor: { control: 'color' },
        headerColor: { control: 'color' },
    }
};

const mockTags = [
    {
        name: 'Premier league',
        url: 'www.youtube.com'
    },
    {
        name: 'Arsenal',
        url: 'www.youtube.com'
    },
    {
        name: 'Manchester united',
        url: 'www.youtube.com'
    },
    {
        name: 'Tottenham',
        url: 'www.youtube.com'
    }
];

export const Tags = (args) => (
    <div>
        <Tag {...args} />
    </div>
);

Tags.args = {
    tags: mockTags,
    title: "Tags"
}

Tags.storyName = 'Tags';