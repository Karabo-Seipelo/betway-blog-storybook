import React from 'react';
import { AuthorProfile } from '../src/components/AuthorProfile/AuthorProfile';
import imageFile from  './assets/static/andrew_circle.png';

export default {
    title: "Organisms/AuthorProfile",
    component: AuthorProfile,
    argTypes: {
        backgroundColor: { control: 'color' },
        fontColor: { control: 'color' },
        headerColor: { control: 'color' },
    }
};

const image = {
    src: imageFile,
    alt: 'media',
    caption: 'Source: Getty Images'
};

const Template = (args) =>  <AuthorProfile {...args} />;

export const AuthorProfileCard = Template.bind({});

AuthorProfileCard.args = {
    image: image,
    name: 'Andrew Balding',
    url: 'http://youtube.com',
    social: [
        {
            name: 'Twitter',
            url: 'https://twitter.com/AndrewBalding2'
        }
    ],
    content: 'Multiple Group 1 and Classic-winning Flat trainer who has amassed over 250 wins across the last two seasons.'
}