import React from 'react';
import { Card } from '../src/components/Card/Card';

export default {
    title: "Organisms/Card",
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        backgrounds: {
          values: [
            {name: 'blog', value: '#efefef'},
            {name: 'white', value: 'white'},
            {name: 'black', value: 'black'}
          ]
        }
    },
};

const Template = (args) => <Card {...args} />;

export const Featured = Template.bind({});

Featured.args = {
    title: "Sunday Betting Guide: Our writers' 5 best football tips",
    teaser: "We've compiled our best football tips, including win/draw/win and total goals, into one bite-size betting preview for Sunday's matches. You can back the 32/1 five-fold.", 
    category: {
        name: "Accumulator",
        url: "http://google.com"
    }, 
    author: {
        name: "Adam Drury",
        url: "http://youtube.com"
    },
    appearance: "featured",
    boxshadow: true,
    icon: "STATSDOTS"
}

export const Default = Template.bind({});

Default.args = {
    title: "Sunday Betting Guide: Our writers' 5 best football tips",
    teaser: "We've compiled our best football tips, including win/draw/win and total goals, into one bite-size betting preview for Sunday's matches. You can back the 32/1 five-fold.", 
    category: {
        name: "Accumulator",
        url: "http://google.com"
    }, 
    author: {
        name: "Adam Drury",
        url: "http://youtube.com"
    },
    appearance: "default",
    boxshadow: true,
    icon: "STATSDOTS"
}

export const Thumb = Template.bind({});

Thumb.args = {
    title: "Sunday Betting Guide: Our writers' 5 best football tips",
    teaser: "We've compiled our best football tips, including win/draw/win and total goals, into one bite-size betting preview for Sunday's matches. You can back the 32/1 five-fold.", 
    category: {
        name: "Accumulator",
        url: "http://google.com"
    }, 
    author: {
        name: "Adam Drury",
        url: "http://youtube.com"
    },
    appearance: "thumb",
    boxshadow: true,
}

export const Mini = Template.bind({});

Mini.args = {
    title: "Sunday Betting Guide: Our writers' 5 best football tips",
    teaser: "We've compiled our best football tips, including win/draw/win and total goals, into one bite-size betting preview for Sunday's matches. You can back the 32/1 five-fold.", 
    category: {
        name: "Accumulator",
        url: "http://google.com"
    }, 
    author: {
        name: "Adam Drury",
        url: "http://youtube.com"
    },
    appearance: "mini",
    width: "320px"
}