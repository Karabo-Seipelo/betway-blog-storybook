import React from 'react';
import { Card } from '../src/components/Card/Card';

export default {
    title: "Design System/Card",
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
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
    appearance: "featured"
}