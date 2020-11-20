import React from 'react';
import { Page } from '../src/components/Page/Page';
import imageFile from  './assets/static/call-of-duty.jpg';

export default {
    title: "Organisms/Page",
    component: Page,
    parameters: {
        backgrounds: {
          values: [
            {name: 'blog', value: '#efefef'},
            {name: 'white', value: 'white'},
            {name: 'black', value: 'black'}
          ]
        },
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const image = {
    src: imageFile,
    alt: 'media',
    caption: 'Source: Getty Images'
};

const mockArticleData = {
    featuredImage: image,
    title: 'Football Ramble & Betway: Safer Gambling Week special',
    content: 'HTML content',
    teaser: 'Luke Moore and Jim Campbell sit down with Betway\'s Alan Alger to discuss the importance of Safer Gambling Week and how we can all gamble more responsibly.',
    category: {
        name: "Accumulator",
        url: "http://google.com"
    }, 
    author: {
        name: "Adam Drury",
        url: "http://youtube.com"
    }

}

const Template = (args) =>  <Page {...args} />;

export const SinglePage = Template.bind({});

SinglePage.args = {...mockArticleData}